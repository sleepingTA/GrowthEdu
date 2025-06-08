import React from 'react'
import { useNavigate } from 'react-router-dom'
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'

const blogs = [
  {
    id: '1',
    title: 'Trường xanh và những "người hùng" mang trong mình chiếc áo học sinh',
    image: blog1,
    date: '08 April 2024',
    excerpt: 'Câu chuyện về các học sinh góp phần bảo vệ môi trường học đường một cách sáng tạo và thiết thực.'
  },
  {
    id: '2',
    title: 'Trường học xanh là gì ? Cùng tìm hiểu về trường xanh',
    image: blog2,
    date: '10 April 2024',
    excerpt: 'Khái niệm trường học xanh và những lợi ích mang lại cho học sinh và giáo viên.'
  },
  {
    id: '3',
    title: 'Trường xanh và những mục tiêu bền vững trong giáo dục',
    image: blog3,
    date: '12 April 2024',
    excerpt: 'Làm thế nào giáo dục có thể hướng đến phát triển bền vững qua mô hình trường xanh.'
  }
]

const BlogPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-4 drop-shadow">Bài viết mới nhất</h2>
        <p className="text-center text-gray-500 mb-12">Khám phá các câu chuyện, kiến thức và cảm hứng về trường học xanh</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 flex flex-col overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {blog.date}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3">{blog.excerpt}</p>
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="mt-auto w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold shadow hover:shadow-lg transition"
                >
                  Đọc thêm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage