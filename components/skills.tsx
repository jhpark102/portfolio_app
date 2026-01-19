interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'CSS Modules', 'Styled Components'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'VS Code', 'Figma', 'Webpack', 'Vite'],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-10 sm:mb-12 md:mb-16 text-center">
          Skills & Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white dark:bg-gray-950 p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-base sm:text-sm text-gray-700 dark:text-gray-300"
                  >
                    • {item}
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

export default Skills
