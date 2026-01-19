function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-8 sm:mb-12 text-center">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 sm:mb-8">
            안녕하세요. 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드
            개발자입니다. 깔끔하고 직관적인 인터페이스를 만들기 위해 노력하며,
            최신 기술 트렌드를 학습하고 적용하는 것을 즐깁니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4">
                경력
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                프론트엔드 개발 경력 3년 이상
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4">
                전문 분야
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                React, Next.js, TypeScript 기반 웹 애플리케이션 개발
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
