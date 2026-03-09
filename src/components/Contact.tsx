import { motion, useInView } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'akithdesilva626@gmail.com', href: 'mailto:akithdesilva626@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+94 71 879 6358', href: 'tel:+94718796358' },
    { icon: FiMapPin, label: 'Location', value: 'Sri Lanka' },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const updateField = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

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

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="premium-card p-8 flex flex-col gap-8">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-lg border border-border bg-surface flex items-center justify-center shrink-0 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                                            <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-lg font-medium text-text-main hover:text-primary transition-colors">
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
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="premium-card p-8 flex flex-col gap-6" noValidate>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-name" className="text-sm font-medium text-text-main">Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        className="form-input"
                                        placeholder="Jane Doe"
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-text-main">Email</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateField('email', e.target.value)}
                                        className="form-input"
                                        placeholder="jane@example.com"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-message" className="text-sm font-medium text-text-main">Message</label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => updateField('message', e.target.value)}
                                    className="form-input resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitted}
                                className={`btn-gradient mt-2 ${submitted ? '!from-emerald-500 !to-emerald-400' : ''}`}
                            >
                                {submitted ? (
                                    <>
                                        <FiCheckCircle className="w-5 h-5" />
                                        Sent Successfully
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FiSend className="w-5 h-5 ml-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
