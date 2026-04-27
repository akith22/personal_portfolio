import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowRight, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live?: string | null;
  featured: boolean;
  status: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'RestroPlate',
    tagline: 'Food Donation Management System',
    status: 'Completed',
    category: 'Full-Stack / Management',
    description: 'A full-stack food donation platform connecting donors with recipients. Built REST APIs for donation management, inventory tracking, and status updates. Delivered using Agile SCRUM with sprint tracking via Jira.',
    tech: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'Microsoft SQL Server', 'Selenium', 'Pytest'],
    github: 'https://github.com/RestroPlate',
    live: null,
    featured: true,
  },
  {
    title: 'CVortex',
    tagline: 'Application Tracking System',
    status: 'Completed',
    category: 'Enterprise / HR Tech',
    description: 'Full-stack Application Tracking System with role-based access for Admin, Recruiter, and Candidate. Supports job management, applications, and secure authentication.',
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'React (Vite)', 'MySQL'],
    github: 'https://github.com/akith22/CVortex-application-tracking-system',
    featured: false,
  },
  {
    title: 'AtlasFS',
    tagline: 'Distributed File System',
    status: 'Completed',
    category: 'Systems / Infrastructure',
    description: 'Distributed file system with Raft-based consensus, automatic replication, and fault-tolerant storage across multiple nodes.',
    tech: ['Java', 'Maven', 'Raft Consensus', 'Distributed Systems'],
    github: 'https://github.com/akith22/AtlasFS-Distributed-File-Storage-System',
    featured: false,
  },
  {
    title: 'DiagNote',
    tagline: 'Healthcare Management System',
    status: 'Completed',
    category: 'Healthcare',
    description: 'Healthcare management web app enabling doctors, patients, and lab technicians to manage appointments, prescriptions, and reports in one system.',
    tech: ['Spring Boot', 'TypeScript (Vite)', 'MySQL', 'Node.js'],
    github: 'https://github.com/akith22/DiagNote',
    featured: false,
  },
  {
    title: 'TestLang++',
    tagline: 'API Testing DSL',
    status: 'Completed',
    category: 'Developer Tools / DSL',
    description: 'Custom DSL for API testing that generates JUnit test cases from high-level scripts using Flex and Bison.',
    tech: ['Java', 'Flex', 'Bison', 'JUnit', 'DSL Design'],
    github: 'https://github.com/akith22/TestLang',
    featured: false,
  },
  {
    title: 'FungiFlow',
    tagline: 'Mushroom Farm Management',
    status: 'Completed',
    category: 'AgriTech / Operations',
    description: 'Mushroom production management system handling lab operations, inventory, and sales with role-based dashboards.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Spring Security'],
    github: 'https://github.com/akith22/FungiFlow',
    featured: false,
  },
  {
    title: 'AlertEYE',
    tagline: 'Smart Wearable System',
    status: 'Completed',
    category: 'IoT / Mobile',
    description: 'Smart wearable system that detects driver drowsiness using IR sensors and alerts users via a connected mobile app.',
    tech: ['Arduino', 'Java (Android)', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/akith22/AlertEYE',
    featured: false,
  },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    const featured = projects.filter(p => p.featured)[0];
    const regular = projects.filter(p => !p.featured);

    // Merge them: Featured first, then the rest
    const allProjects = [featured, ...regular].filter(Boolean);

    return (
        <section id="projects" className="section-padding relative overflow-hidden" ref={sectionRef}>

            <div className="container-base relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
                    <motion.p variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                        My Work
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Featured <span className="gradient-text-primary">Engineering</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-subtitle">
                        Select projects driving architecture and performance.
                    </motion.p>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-8">
                    {/* Unified Grid Cards */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {allProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={{ scale: 1.015, transition: { duration: 0.22, ease: 'easeOut' } }}
                                className={`glass-card group flex flex-col p-8 lg:p-10 relative overflow-hidden h-full ${project.featured ? 'border-primary/30 shadow-[inset_0_1px_0_rgba(56,189,248,0.1),0_8px_32px_rgba(56,189,248,0.15)]' : ''}`}
                            >

                                {/* Large watermark number */}
                                <span className="absolute bottom-3 right-5 text-[7rem] font-bold leading-none text-white/[0.022] select-none pointer-events-none font-mono">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>

                                {/* Status badge */}
                                <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border w-max mb-3
                                    ${project.status === 'Completed'
                                        ? 'border-tertiary/30 text-tertiary bg-tertiary/5'
                                        : 'border-yellow-400/30 text-yellow-400/80 bg-yellow-400/5'
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-tertiary' : 'bg-yellow-400'}`} />
                                    {project.status}
                                </span>

                                {/* Category eyebrow */}
                                <p className="text-[0.7rem] font-mono uppercase tracking-[0.22em] text-primary/55 mb-2">
                                    {project.category}
                                </p>

                                {/* Project title */}
                                <h3 className="font-bold text-text-main text-2xl mb-1">
                                    {project.title}
                                </h3>

                                {/* Tagline */}
                                <p className="text-secondary font-mono text-xs tracking-widest uppercase mb-5">
                                    {project.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-muted leading-relaxed mb-8 flex-grow relative z-10">
                                    {project.description}
                                </p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 pb-6 border-b border-border/50 relative z-10 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="pt-5 relative z-10 flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-glass flex items-center gap-2 w-max !text-xs"
                                    >
                                        <FiGithub className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-glass flex items-center gap-2 w-max !text-xs"
                                        >
                                            <FiExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={itemVariants} className="flex justify-center mt-12">
                        <a href="https://github.com/akith22" target="_blank" rel="noopener noreferrer" className="btn-glass">
                            View All on GitHub <FiArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
