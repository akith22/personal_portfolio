import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'akithdesilva626@gmail.com', href: 'mailto:akithdesilva626@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Akith De Silva', href: 'https://www.linkedin.com/in/akith-de-silva-957166317' },
    { icon: FiPhone, label: 'Phone', value: '+94 71 879 6358', href: 'tel:+94718796358' },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Replace YOUR_FORM_ID or use fallback
            const res = await fetch("https://formspree.io/f/xvgzyryg", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                window.location.href = `mailto:akithdesilva626@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
                setStatus('idle');
            }
        } catch (error) {
            window.location.href = `mailto:akithdesilva626@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
            setStatus('idle');
        }
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="section-padding relative min-h-[80vh] flex items-center" ref={ref}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg pointer-events-none" />

            <div className="container-base relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start"
                >
                    {/* Left: Contact Info */}
                    <div className="flex flex-col h-full">
                        <motion.p variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.25em] text-primary/70 mb-3">
                            Get In Touch
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="section-title mb-4">
                            Start a <span className="gradient-text-primary">Conversation</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-muted text-lg mb-12">
                            Looking to collaborate on a backend project, API architecture, or hiring for a driven full-stack intern? I'm always open to discussing new opportunities.
                        </motion.p>

                        <div className="flex flex-col gap-4 mt-auto">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        variants={itemVariants}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="contact-row group flex items-center gap-5 px-6 py-5 glass-card"
                                    >
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-bg border border-border flex items-center justify-center transition-colors group-hover:border-primary/50 group-hover:bg-primary/5">
                                            <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                                            <span className="text-xs font-semibold uppercase tracking-widest text-muted/60">{info.label}</span>
                                            <span className="text-base font-medium text-text-main truncate group-hover:text-primary transition-colors">{info.value}</span>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div variants={itemVariants} className="glass-card p-8 lg:p-10 w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none rounded-full" />

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-semibold tracking-wide text-muted mb-2 font-mono">Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleInput} placeholder="Jane Doe" className="form-input" />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-semibold tracking-wide text-muted mb-2 font-mono">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleInput} placeholder="jane@example.com" className="form-input" />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-semibold tracking-wide text-muted mb-2 font-mono">Subject</label>
                                <input required type="text" name="subject" value={formData.subject} onChange={handleInput} placeholder="Internship Opportunity" className="form-input" />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-semibold tracking-wide text-muted mb-2 font-mono">Message</label>
                                <textarea required name="message" value={formData.message} onChange={handleInput} placeholder="Hi Akith..." rows={5} className="form-input resize-none" />
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`btn-glass py-4 w-full mt-2 flex items-center justify-center transition-all ${status === 'success' ? '!bg-tertiary/20' : ''}`}
                            >
                                {status === 'loading' && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                {status === 'success' && <><FiCheckCircle className="w-5 h-5" /> Message Sent!</>}
                                {status === 'idle' && <><FiSend className="w-5 h-5" /> Send Message &rarr;</>}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
