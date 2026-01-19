interface PortfolioItem {
  title: string
  description: string
  technologies: string[]
  link?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: '웹 애플리케이션 A',
    description:
      '사용자 친화적인 인터페이스를 갖춘 모던 웹 애플리케이션입니다. 반응형 디자인과 최적화된 성능을 제공합니다.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '웹 애플리케이션 B',
    description:
      '실시간 데이터 처리가 가능한 대시보드 애플리케이션입니다. 직관적인 차트와 그래프로 데이터를 시각화합니다.',
    technologies: ['Next.js', 'Chart.js', 'Node.js'],
  },
  {
    title: '웹 애플리케이션 C',
    description:
      '협업을 위한 프로젝트 관리 도구입니다. 효율적인 워크플로우와 실시간 업데이트 기능을 제공합니다.',
    technologies: ['React', 'Firebase', 'Material UI'],
  },
]

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-10 sm:mb-12 md:mb-16 text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base font-medium inline-block min-h-[44px] flex items-center"
                >
                  자세히 보기 →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
