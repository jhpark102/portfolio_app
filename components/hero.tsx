'use client'

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4 sm:mb-6 animate-fade-in leading-tight">
          안녕하세요,
          <br />
          <span className="text-green-600 dark:text-green-400">
            개발자
          </span>
          입니다
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed px-2">
          사용자 경험을 중시하는 프론트엔드 개발자
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          깔끔한 코드와 세련된 디자인을 추구합니다
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <button
            onClick={() => {
              const element = document.getElementById('portfolio')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-800 dark:hover:bg-gray-100 active:bg-gray-700 dark:active:bg-gray-200 transition-colors shadow-lg hover:shadow-xl min-h-[48px]"
          >
            포트폴리오 보기
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-gray-900 dark:border-gray-50 text-gray-900 dark:text-gray-50 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-900 dark:hover:bg-gray-50 hover:text-white dark:hover:text-gray-900 active:bg-gray-800 dark:active:bg-gray-100 transition-colors min-h-[48px]"
          >
            연락하기
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
