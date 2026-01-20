import { User, Briefcase, Video, Heart, Target, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const getRoadmapSteps = (t: (key: string) => string) => [
    {
        icon: User,
        title: t('knowme.intro.title'),
        text: t('knowme.intro.text'),
        color: "from-blue-500 to-cyan-500",
        position: "left"
    },
    {
        icon: Briefcase,
        title: t('knowme.journey.title'),
        text: t('knowme.journey.text'),
        color: "from-purple-500 to-pink-500",
        position: "right"
    },
    {
        icon: Video,
        title: t('knowme.creator.title'),
        text: t('knowme.creator.text'),
        color: "from-orange-500 to-red-500",
        position: "left"
    },
    {
        icon: Heart,
        title: t('knowme.personality.title'),
        text: t('knowme.personality.text'),
        color: "from-green-500 to-emerald-500",
        position: "right"
    },
    {
        icon: Target,
        title: t('knowme.philosophy.title'),
        text: t('knowme.philosophy.text'),
        color: "from-indigo-500 to-purple-500",
        position: "left"
    },
    {
        icon: Rocket,
        title: t('knowme.future.title'),
        text: t('knowme.future.text'),
        color: "from-pink-500 to-rose-500",
        position: "right"
    },
];

export const GetToKnowMe = () => {
    const { t } = useLanguage();
    const roadmapSteps = getRoadmapSteps(t);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(roadmapSteps.length).fill(false));
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = stepRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleSteps((prev) => {
                                const newVisible = [...prev];
                                newVisible[index] = true;
                                return newVisible;
                            });
                        }
                    });
                },
                {
                    threshold: 0.2,
                    rootMargin: '-50px'
                }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section id="knowme" className="py-20 bg-gradient-to-b from-background to-card overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 opacity-0 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('knowme.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Roadmap */}
                    <div className="relative">
                        {roadmapSteps.map((step, idx) => (
                            <div
                                key={idx}
                                ref={(el) => stepRefs.current[idx] = el}
                                className={`relative mb-16 transition-all duration-1000 ease-out ${visibleSteps[idx]
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-20'
                                    } ${step.position === 'left'
                                        ? 'md:pr-1/2 md:text-right'
                                        : 'md:pl-1/2 md:ml-auto md:text-left'
                                    }`}
                                style={{
                                    transitionDelay: `${idx * 150}ms`
                                }}
                            >
                                {/* Connector Line */}
                                {idx < roadmapSteps.length - 1 && (
                                    <div
                                        className={`hidden md:block absolute top-24 w-1/2 h-32 transition-all duration-1000 ${visibleSteps[idx] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                            } ${step.position === 'left' ? 'right-0' : 'left-0'
                                            }`}
                                        style={{
                                            borderLeft: step.position === 'right' ? '3px dashed rgba(139, 92, 246, 0.3)' : 'none',
                                            borderRight: step.position === 'left' ? '3px dashed rgba(139, 92, 246, 0.3)' : 'none',
                                            borderBottom: '3px dashed rgba(139, 92, 246, 0.3)',
                                            borderBottomLeftRadius: step.position === 'right' ? '100px' : '0',
                                            borderBottomRightRadius: step.position === 'left' ? '100px' : '0',
                                            transitionDelay: `${idx * 150 + 200}ms`
                                        }}
                                    />
                                )}

                                <div className={`flex items-start gap-6 ${step.position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Icon */}
                                    <div className={`relative z-10 shrink-0 transition-all duration-700 ${visibleSteps[idx]
                                            ? 'scale-100 rotate-0'
                                            : 'scale-0 rotate-180'
                                        }`}
                                        style={{
                                            transitionDelay: `${idx * 150}ms`
                                        }}>
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-background`}>
                                            <step.icon className="h-8 w-8 text-white" />
                                        </div>
                                        {/* Dot number */}
                                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-background transition-all duration-500 ${visibleSteps[idx] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: `${idx * 150 + 400}ms`
                                            }}>
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <Card className={`flex-1 hover:shadow-xl transition-all duration-700 group ${visibleSteps[idx]
                                            ? `opacity-100 ${step.position === 'left' ? 'md:translate-x-0' : 'md:translate-x-0'}`
                                            : `opacity-0 ${step.position === 'left' ? 'md:-translate-x-20' : 'md:translate-x-20'}`
                                        }`}
                                        style={{
                                            transitionDelay: `${idx * 150 + 100}ms`
                                        }}>
                                        <CardContent className="p-6">
                                            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                                                {step.title}
                                            </h3>
                                            {step.text.split('\n\n').map((paragraph, pIdx) => (
                                                <p
                                                    key={pIdx}
                                                    className={`text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0 text-justify transition-all duration-500 ${visibleSteps[idx] ? 'opacity-100' : 'opacity-0'
                                                        }`}
                                                    style={{
                                                        transitionDelay: `${idx * 150 + 300 + (pIdx * 100)}ms`
                                                    }}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary/30 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                            <CardContent className="p-8">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <Rocket className="h-8 w-8 text-primary" />
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {t('howiwork.philosophy.title')}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground max-w-3xl mx-auto">
                                    {t('howiwork.philosophy.description')}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
