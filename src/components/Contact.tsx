import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'akithdesilva626@gmail.com', href: 'mailto:akithdesilva626@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Akith De Silva', href: 'https://www.linkedin.com/in/akith-de-silva-957166317' },
    { icon: FiPhone, label: 'Phone', value: '+94 71 879 6358', href: 'tel:+94718796358' },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="section-padding relative" ref={ref}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg pointer-events-none" />

            <div className="container-base relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Start a <span className="gradient-text-primary">Conversation</span></h2>
                    <p className="section-subtitle">Looking for a driven backend intern? Let's connect.</p>
                </motion.div>

                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        return (
                            <motion.a
                                key={idx}
                                href={info.href}
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                                className="group flex items-center gap-5 px-6 py-5 sm:px-8 sm:py-6 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-8px_rgba(0,212,170,0.15)]"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.08] group-hover:shadow-[0_0_16px_rgba(0,212,170,0.2)]">
                                    <Icon className="w-5 h-5 text-muted transition-colors duration-300 group-hover:text-primary" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/50">{info.label}</span>
                                    <span className="text-base sm:text-lg font-medium text-text-main truncate transition-colors duration-300 group-hover:text-primary">{info.value}</span>
                                </div>
                                <FiArrowUpRight className="w-5 h-5 text-muted/30 shrink-0 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <a href="mailto:akithdesilva626@gmail.com" className="btn-gradient px-10 py-4 relative overflow-hidden group/btn shadow-[0_0_40px_-10px_rgba(0,212,170,0.4)]">
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            <FiMail className="w-5 h-5" /> Say Hello
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
