import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'akithdesilva626@gmail.com', href: 'mailto:akithdesilva626@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Akith De Silva', href: 'https://www.linkedin.com/in/akith-de-silva-957166317' },
    { icon: FiPhone, label: 'Phone', value: '+94 71 879 6358', href: 'tel:+94718796358' },
    { icon: FiMapPin, label: 'Location', value: 'Sri Lanka' },
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

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group block"
                    >
                        {/* Background glowing halo effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 mix-blend-screen" />

                        <div className="premium-card premium-card-hover p-10 sm:p-16 flex flex-col items-center gap-12 text-center overflow-hidden relative z-10">
                            {/* Inner architectural grid aesthetic setup */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 w-full relative z-10">
                                {contactInfo.map((info, idx) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={idx} className="flex flex-col items-center justify-center gap-4 group/item">
                                            <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/item:border-primary/50 group-hover/item:scale-110 group-hover/item:shadow-[0_0_20px_rgba(0,229,255,0.3)] shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
                                                <Icon className="w-6 h-6 text-muted transition-colors duration-300 group-hover/item:text-primary" />
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted/60">{info.label}</p>
                                                {info.href ? (
                                                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-lg font-medium text-text-main hover:text-primary transition-colors">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-medium text-text-main">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <a href="mailto:akithdesilva626@gmail.com" className="btn-gradient px-10 py-4 mt-4 relative overflow-hidden group/btn shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)]">
                                <span className="relative z-10 flex items-center gap-2 text-lg">
                                    <FiMail className="w-5 h-5" /> Say Hello
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
