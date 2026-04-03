import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'CVortex',
        tagline: 'Application Tracking System',
        description: 'Full-stack Application Tracking System with role-based access for Admin, Recruiter, and Candidate. Supports job management, applications, and secure authentication.',
        tech: ['Spring Boot', 'Spring Security', 'JWT', 'React (Vite)', 'MySQL'],
        github: 'https://github.com/akith22/CVortex-application-tracking-system',
        featured: false
    },
    {
        title: 'AtlasFS',
        tagline: 'Distributed File System',
        description: 'Distributed file system with Raft-based consensus, automatic replication, and fault-tolerant storage across multiple nodes.',
        tech: ['Java', 'Maven', 'Raft Consensus', 'Distributed Systems'],
        github: 'https://github.com/akith22/AtlasFS-Distributed-File-Storage-System',
        featured: false
    },
    {
        title: 'DiagNote',
        tagline: 'Healthcare Management System',
        description: 'Healthcare management web app enabling doctors, patients, and lab technicians to manage appointments, prescriptions, and reports in one system.',
        tech: ['Spring Boot', 'TypeScript (Vite)', 'MySQL', 'Node.js'],
        github: 'https://github.com/akith22/DiagNote',
        featured: false
    },
    {
        title: 'TestLang++',
        tagline: 'API Testing DSL',
        description: 'Custom DSL for API testing that generates JUnit test cases from high-level scripts using Flex and Bison.',
        tech: ['Java', 'Flex', 'Bison', 'JUnit', 'DSL Design'],
        github: 'https://github.com/akith22/TestLang',
        featured: false
    },
    {
        title: 'FungiFlow',
        tagline: 'Mushroom Farm Management',
        description: 'Mushroom production management system handling lab operations, inventory, and sales with role-based dashboards.',
        tech: ['Spring Boot', 'React', 'MySQL', 'Spring Security'],
        github: 'https://github.com/akith22/FungiFlow',
        featured: false
    },
    {
        title: 'AlertEYE',
        tagline: 'Smart Wearable System',
        description: 'Smart wearable system that detects driver drowsiness using IR sensors and alerts users via a connected mobile app.',
        tech: ['Arduino', 'Java (Android)', 'Firebase', 'Google Maps API'],
        github: 'https://github.com/akith22/AlertEYE',
        featured: false
    }
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.project-orb-parallax', {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#projects",
                    scrub: true
                }
            });
        });
        return () => ctx.revert();
    }, []);

    const featured = projects.filter(p => p.featured)[0];
    const regular = projects.filter(p => !p.featured);

    // Merge them: Featured first, then the rest
    const allProjects = [featured, ...regular].filter(Boolean);

    return (
        <section id="projects" className="section-padding relative overflow-hidden" ref={sectionRef}>
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full project-orb-parallax pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/5 blur-[120px] rounded-full project-orb-parallax pointer-events-none" />

            <div className="container-base relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
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
                            <motion.div key={project.title} variants={itemVariants} className={`glass-card group flex flex-col p-8 lg:p-10 relative overflow-hidden h-full ${project.featured ? 'border-primary/30 shadow-[inset_0_1px_0_rgba(56,189,248,0.1),0_8px_32px_rgba(56,189,248,0.15)]' : ''}`}>
                                
                                <span className="absolute top-4 right-6 project-number">{(i + 1).toString().padStart(2, '0')}</span>

                                {project.featured && <span className="featured-tag mb-4 w-max">Featured Project</span>}

                                <h3 className={`font-display font-bold text-text-main flex items-center gap-3 ${project.featured ? 'text-3xl mt-2' : 'text-2xl mt-4'}`}>
                                    {project.title}
                                </h3>
                                <p className="text-secondary font-mono text-xs tracking-widest uppercase mt-2 mb-6 flex-none">{project.tagline}</p>

                                <p className="text-muted leading-relaxed mb-8 relative z-10 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto relative z-10 pb-6 border-b border-border/50">
                                    {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                </div>
                                
                                <div className="pt-6 relative z-10">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-glass flex-none w-max !p-3">
                                        <FiGithub className="w-5 h-5" />
                                    </a>
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
