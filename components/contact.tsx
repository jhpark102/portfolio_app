'use client'

import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // 실제 구현에서는 API 호출 등을 수행
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-10 sm:mb-12 md:mb-16 text-center">
          Contact
        </h2>
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
              이메일
            </h3>
            <a
              href="mailto:your.email@example.com"
              className="text-base sm:text-lg text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              your.email@example.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
              GitHub
            </h3>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              github.com/yourusername
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-2"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-2"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-2"
            >
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 text-base border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3.5 sm:py-4 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-100 active:bg-gray-700 dark:active:bg-gray-200 transition-colors shadow-md hover:shadow-lg min-h-[48px]"
          >
            {isSubmitted ? '전송 완료!' : '전송하기'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
