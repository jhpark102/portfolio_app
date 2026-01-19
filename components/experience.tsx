interface ExperienceItem {
  title: string
  period: string
  role: string
  technologies: string[]
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: '프로젝트 A',
    period: '2023.01 - 2023.06',
    role: '프론트엔드 개발자',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    achievements: [
      '사용자 인터페이스 설계 및 구현',
      '성능 최적화로 로딩 속도 30% 개선',
      '반응형 디자인 적용',
    ],
  },
  {
    title: '프로젝트 B',
    period: '2022.07 - 2022.12',
    role: '풀스택 개발자',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    achievements: [
      'RESTful API 설계 및 개발',
      '실시간 데이터 동기화 기능 구현',
      '코드 리뷰 및 팀 협업',
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-10 sm:mb-12 md:mb-16 text-center">
          Experience
        </h2>
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 sm:pl-6 md:pl-8 py-3 sm:py-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-1 sm:mb-0">
                  {exp.title}
                </h3>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                {exp.role}
              </p>
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-base sm:text-sm text-gray-700 dark:text-gray-300 flex items-start leading-relaxed"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
