import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const Gemini = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Xin chào! Tôi là AI hỗ trợ người dùng. Bạn cần hỏi gì?' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatboxRef = useRef(null);

  // Lấy API key từ biến môi trường
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      if (ai) {
        // Sử dụng API mới của Gemini
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: input,
        });

        setMessages((prev) => [...prev, { role: 'ai', text: response.text }]);
      } else {
        // Phản hồi mẫu nếu chưa có API Key
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { role: 'ai', text: 'Đây là phản hồi mẫu từ Gemini AI (bạn cần cấu hình API Key để dùng thật).' }
          ]);
          setLoading(false);
        }, 1200);
        setInput('');
        return;
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages((prev) => [...prev, {
        role: 'ai',
        text: 'Có lỗi xảy ra khi kết nối với Gemini AI. Vui lòng thử lại!'
      }]);
    }

    setLoading(false);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) handleSend();
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  // Close chatbox if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatboxRef.current && !chatboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatboxRef]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
      ref={chatboxRef}
    >
      {/* Floating Button */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#01bbbf',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.2s',
          fontSize: 24,
          ...(isOpen ? { transform: 'rotate(45deg)' } : {}),
        }}
        onClick={toggleChatbox}
      >
        {isOpen ? 'x' : '💬'}
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div
          style={{
            maxWidth: 400,
            borderRadius: 16,
            background: '#fff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            overflow: 'hidden',
            marginTop: 10,
          }}
        >
          {/* Header */}
          <div style={{
            padding: '1rem',
            borderBottom: '1px solid #e0e0e0',
            background: '#01bbbf',
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            AI giải đáp
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            background: '#f8fafc'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  margin: '0.5rem 0',
                  textAlign: msg.role === 'user' ? 'right' : 'left'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.7rem 1.2rem',
                    borderRadius: 20,
                    background: msg.role === 'user' ? '#01bbbf' : '#e0f7fa',
                    color: msg.role === 'user' ? '#fff' : '#222',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{
                textAlign: 'left',
                color: '#01bbbf',
                margin: '0.5rem 0',
                fontStyle: 'italic'
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.7rem 1.2rem',
                  borderRadius: 20,
                  background: '#e0f7fa',
                  color: '#01bbbf'
                }}>
                  Đang trả lời...
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            display: 'flex',
            borderTop: '1px solid #e0e0e0',
            padding: '0.75rem',
            background: '#fff'
          }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 16,
                padding: '0.5rem 1rem',
                borderRadius: 20,
                background: '#f3f4f6'
              }}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                marginLeft: 8,
                background: loading || !input.trim() ? '#ccc' : '#01bbbf',
                color: '#fff',
                border: 'none',
                borderRadius: 20,
                padding: '0.5rem 1.5rem',
                fontWeight: 600,
                fontSize: 16,
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s'
              }}
            >
              {loading ? '...' : 'Gửi'}
            </button>
          </div>

          {/* API Status */}
          {!apiKey && (
            <div style={{
              padding: '0.5rem',
              background: '#fff3cd',
              color: '#856404',
              fontSize: '12px',
              textAlign: 'center',
              borderTop: '1px solid #e0e0e0'
            }}>
              ⚠️ Chưa cấu hình API Key - đang dùng chế độ demo
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gemini;