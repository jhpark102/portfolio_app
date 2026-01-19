function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 dark:text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors text-sm sm:text-base min-h-[44px] flex items-center"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors text-sm sm:text-base min-h-[44px] flex items-center"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
