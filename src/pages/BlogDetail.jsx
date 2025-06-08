import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'

const blogs = [
  {
    id: '1',
    title: 'Trường xanh và những "người hùng" mang trong mình chiếc áo học sinh',
    image: blog1,
    date: '08 April 2024',
    author: 'Nguyễn Văn A',
    content: `
      <p>
        <b>Trường xanh</b> không chỉ là một khái niệm về môi trường mà còn là nơi nuôi dưỡng những "người hùng" nhỏ tuổi. Các em học sinh đã và đang góp phần bảo vệ môi trường học đường bằng những hành động thiết thực như phân loại rác, trồng cây xanh, tiết kiệm điện nước và lan tỏa ý thức bảo vệ môi trường đến bạn bè, thầy cô.
      </p>
      <p>
        Một số câu chuyện nổi bật như nhóm học sinh lớp 8A đã tự tay làm thùng rác tái chế từ chai nhựa, hay câu lạc bộ "Xanh School" tổ chức các buổi tuyên truyền về giảm thiểu rác thải nhựa. Những hành động nhỏ nhưng ý nghĩa này đã tạo nên một làn sóng tích cực trong toàn trường.
      </p>
      <p>
        <i>“Chúng em muốn trường học luôn xanh, sạch, đẹp để mỗi ngày đến lớp là một ngày vui.”</i> – bạn Minh Anh, lớp 8A chia sẻ.
      </p>
    `
  },
  {
    id: '2',
    title: 'Trường học xanh là gì? Cùng tìm hiểu về trường xanh',
    image: blog2,
    date: '10 April 2024',
    author: 'Trần Thị B',
    content: `
      <p>
        <b>Trường học xanh</b> là mô hình trường học hướng đến phát triển bền vững, thân thiện với môi trường. Tại đây, mọi hoạt động đều chú trọng đến việc giảm thiểu tác động tiêu cực lên môi trường như sử dụng năng lượng tái tạo, tiết kiệm nước, trồng cây xanh và giáo dục ý thức bảo vệ môi trường cho học sinh.
      </p>
      <ul class="list-disc pl-5">
        <li>Không gian xanh: nhiều cây xanh, vườn trường, lớp học mở.</li>
        <li>Tiết kiệm năng lượng: sử dụng đèn LED, tận dụng ánh sáng tự nhiên.</li>
        <li>Giáo dục ý thức: lồng ghép nội dung bảo vệ môi trường vào các môn học.</li>
      </ul>
      <p>
        Trường học xanh không chỉ giúp bảo vệ môi trường mà còn tạo không gian học tập trong lành, nâng cao sức khỏe và tinh thần cho học sinh, giáo viên.
      </p>
    `
  },
  {
    id: '3',
    title: 'Trường xanh và những mục tiêu bền vững trong giáo dục',
    image: blog3,
    date: '12 April 2024',
    author: 'Lê Văn C',
    content: `
      <p>
        <b>Giáo dục bền vững</b> là mục tiêu quan trọng của trường xanh. Thông qua các hoạt động thực tiễn như trồng cây, tái chế rác thải, tiết kiệm tài nguyên, học sinh được rèn luyện kỹ năng sống xanh và ý thức trách nhiệm với cộng đồng.
      </p>
      <p>
        Các mục tiêu bền vững trong giáo dục trường xanh gồm:
      </p>
      <ol class="list-decimal pl-5">
        <li>Giảm phát thải carbon trong trường học.</li>
        <li>Khuyến khích học sinh sáng tạo giải pháp bảo vệ môi trường.</li>
        <li>Xây dựng cộng đồng học tập thân thiện, hợp tác vì môi trường.</li>
      </ol>
      <p>
        Trường xanh là nền tảng để xây dựng thế hệ trẻ có trách nhiệm, sáng tạo và sẵn sàng chung tay bảo vệ hành tinh xanh.
      </p>
    `
  }
]

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.id === id)

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8 text-center bg-gray-50">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Ối! Không tìm thấy bài viết này.</h2>
        <p className="text-lg text-gray-600 mb-6">Có vẻ như bài viết bạn đang tìm không tồn tại hoặc đã bị gỡ bỏ.</p>
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => navigate('/blog')}
        >
          Quay lại trang Blog
        </button>
      </div>
    )
  }

  return (
    <main className="section__container min-h-screen py-10">
      <section className='text-center mb-12 py-[20px]'>
        <div className="banner_image mb-10 rounded-xl overflow-hidden shadow">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[320px] md:h-[400px] object-cover object-center"
          />
        </div>
        <div className="flex justify-center items-center gap-4 mb-4">

        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-8 mb-8 py-20px">{blog.title}</h1>
        <div className="about-author flex items-center gap-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-700">Written by {blog.author}</h3>
          <span className="text-gray-400 text-xl">•</span>
          <p className="text-gray-500">{blog.date}</p>
        </div>
      </section>
      <hr className="my-8" />
      <article className="prose prose-lg max-w-none text-gray-800 mb-10 ml-4 mr-4 text-2xl py-20px">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
      <hr className="my-8" />
      <button
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
        onClick={() => navigate('/blog')}
      >
        Quay lại danh sách blog
      </button>
    </main>
  )
}

export default BlogDetail