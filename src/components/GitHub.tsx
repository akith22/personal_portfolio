import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiActivity, FiTarget, FiBarChart2 } from 'react-icons/fi';

export default function GitHub() {
    const username = 'akith22';

    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
    const handleImgError = (key: string) => setImgErrors(prev => ({ ...prev, [key]: true }));

    // Shared fetcher params to match the minimalist pure dark style.
    const themeParams = `&theme=transparent&hide_border=true&title_color=E5E7EB&text_color=9CA3AF&icon_color=7C5CFF&bg_color=00000000`;

    return (
        <section id="github" className="section-padding relative bg-black/20 border-y border-border">
            <div className="container-base">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Open Source <span className="gradient-text-primary">Impact</span></h2>
                    <p className="section-subtitle mx-auto">Commit history, streaks, and continuous integration footprint.</p>
                </motion.div>

                {/* Top specific metrics */}
                <div className="grid lg:grid-cols-2 gap-6 mb-6 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="premium-card p-6 flex flex-col items-center justify-center min-h-[180px]"
                    >
                        {imgErrors['stats'] ? (
                            <div className="text-center text-muted">
                                <FiBarChart2 className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Summary Unavailable</p>
                            </div>
                        ) : (
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${username}${themeParams}&show_icons=true`}
                                alt="GitHub Stats"
                                className="w-full max-w-[400px] object-contain"
                                onError={() => handleImgError('stats')}
                                loading="lazy"
                            />
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="premium-card p-6 flex flex-col items-center justify-center min-h-[180px]"
                    >
                        {imgErrors['langs'] ? (
                            <div className="text-center text-muted">
                                <FiActivity className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Languages Unavailable</p>
                            </div>
                        ) : (
                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact${themeParams}`}
                                alt="Top Languages"
                                className="w-full max-w-[400px] object-contain"
                                onError={() => handleImgError('langs')}
                                loading="lazy"
                            />
                        )}
                    </motion.div>
                </div>

                {/* Streak and Map */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="premium-card p-6 md:p-8 flex flex-col items-center justify-center overflow-x-auto min-h-[220px]"
                    >
                        {imgErrors['streak'] ? (
                            <div className="text-center text-muted">
                                <FiTarget className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Streak Data Unavailable</p>
                            </div>
                        ) : (
                            <img
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=7C5CFF&fire=22D3EE&currStreakNum=E5E7EB&sideNums=E5E7EB&currStreakLabel=9CA3AF&sideLabels=9CA3AF&dates=9CA3AF&background=00000000`}
                                alt="GitHub Streak"
                                className="max-w-[800px] w-full object-contain"
                                onError={() => handleImgError('streak')}
                                loading="lazy"
                            />
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="premium-card p-6 md:p-8 flex flex-col items-center justify-center overflow-x-auto min-h-[200px]"
                    >
                        {imgErrors['chart'] ? (
                            <div className="text-center text-muted">
                                <FiGithub className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">Activity Heatmap Unavailable</p>
                            </div>
                        ) : (
                            <img
                                src={`https://ghchart.rshah.org/7C5CFF/${username}`}
                                alt="GitHub Contribution Graph"
                                className="max-w-[800px] w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                onError={() => handleImgError('chart')}
                                loading="lazy"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
