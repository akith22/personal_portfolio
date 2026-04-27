import { motion } from 'framer-motion';
import { 
  SiSharp, SiDotnet, SiOpenjdk, SiSpringboot, SiReact, 
  SiTypescript, SiMysql, SiGit, SiGithub, SiApachemaven,
  SiSelenium, SiPytest, SiJavascript, 
  SiTailwindcss, SiPostman, SiJunit5, SiJira, SiVite, 
  SiHtml5, SiCss 
} from 'react-icons/si';

// Row 1 — Primary languages and frameworks
const row1 = [
  { name: 'C#',          icon: SiSharp, color: '#239120' },
  { name: 'ASP.NET Core',icon: SiDotnet, color: '#512BD4' },
  { name: 'Java',        icon: SiOpenjdk, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React',       icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript',  icon: SiTypescript, color: '#3178C6' },
  { name: 'MySQL',       icon: SiMysql, color: '#4479A1' },
  { name: 'Git',         icon: SiGit, color: '#F05032' },
  { name: 'GitHub',      icon: SiGithub, color: '#ffffff' },
  { name: 'Maven',       icon: SiApachemaven, color: '#C71A36' },
];

// Row 2 — Supporting tools and technologies
const row2 = [
  { name: 'SQL Server',  icon: SiMysql, color: '#CC292B' },
  { name: 'Selenium',    icon: SiSelenium, color: '#43B02A' },
  { name: 'Pytest',      icon: SiPytest, color: '#0A9EDC' },
  { name: 'JavaScript',  icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Postman',     icon: SiPostman, color: '#FF6C37' },
  { name: 'JUnit 5',     icon: SiJunit5, color: '#25A162' },
  { name: 'Jira',        icon: SiJira, color: '#0052CC' },
  { name: 'Vite',        icon: SiVite, color: '#646CFF' },
  { name: 'HTML5',       icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3',        icon: SiCss, color: '#1572B6' },
];

interface TechItem { name: string; icon: React.ElementType; color: string; }

function TechRow({
  items,
  duration,
  reverse = false,
}: {
  items: TechItem[];
  duration: string;
  reverse?: boolean;
}) {
  // Duplicate the array for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrap py-1">
      <div
        className={reverse ? 'ticker-track-reverse' : 'ticker-track'}
        style={{ animationDuration: duration }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-3 mx-10 flex-shrink-0 cursor-default"
          >
            {/* Icon container */}
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center p-3 border border-border/50 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <tech.icon
                className="w-8 h-8"
                style={{ color: tech.color }}
              />
            </div>
            {/* Name */}
            <span className="text-xs text-muted font-mono whitespace-nowrap group-hover:text-text-main transition-colors duration-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Section Header */}
      <div className="container-base mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
            Technologies
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text-primary">Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to architect and ship production-grade systems.
          </p>
        </motion.div>
      </div>

      {/* Icon Ticker Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="space-y-8 py-4"
      >
        <TechRow items={row1} duration="34s" />
        <TechRow items={row2} duration="46s" reverse />
      </motion.div>

      {/* Category summary pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container-base mt-14"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Backend Engineering',
            'Frontend Development',
            'Relational Databases',
            'Build & DevTools',
            'Testing & QA',
            'Agile / Scrum',
          ].map((label) => (
            <span
              key={label}
              className="text-xs px-4 py-2 rounded-full border border-border/60 text-muted font-mono tracking-wide hover:border-primary/30 hover:text-text-main transition-all duration-200 cursor-default"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
