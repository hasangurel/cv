import { User, Briefcase, Video, Heart, Target, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const getSections = (t: (key: string) => string) => [
    {
        icon: User,
        title: t('knowme.intro.title'),
        content: t('knowme.intro.text'),
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Briefcase,
        title: t('knowme.journey.title'),
        content: t('knowme.journey.text'),
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Video,
        title: t('knowme.creator.title'),
        content: t('knowme.creator.text'),
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Heart,
        title: t('knowme.personality.title'),
        content: t('knowme.personality.text'),
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Target,
        title: t('knowme.philosophy.title'),
        content: t('knowme.philosophy.text'),
        color: "from-indigo-500 to-purple-500"
    },
    {
        icon: Rocket,
        title: t('knowme.future.title'),
        content: t('knowme.future.text'),
        color: "from-pink-500 to-rose-500"
    }
];

export const GetToKnowMe = () => {
    const { t } = useLanguage();
    const sections = getSections(t);

    return (
        <section id="knowme" className="py-20 bg-gradient-to-b from-background to-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('knowme.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {sections.map((section, idx) => (
                        <Card
                            key={idx}
                            className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${section.color}`} />
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    {/* Icon */}
                                    <div className="hidden md:block shrink-0">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <section.icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* Mobile Icon */}
                                            <div className={`md:hidden w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                                                <section.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {section.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            {section.content.split('\n\n').map((paragraph, pIdx) => (
                                                <p
                                                    key={pIdx}
                                                    className="text-muted-foreground leading-relaxed text-justify"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary/20">
                        <p className="text-lg text-foreground font-semibold mb-2">
                            {t('language') === 'tr'
                                ? '🚀 Birlikte harika projeler geliştirelim!'
                                : '🚀 Let\'s build amazing projects together!'}
                        </p>
                        <p className="text-muted-foreground">
                            {t('language') === 'tr'
                                ? 'İletişim bölümünden benimle iletişime geçebilirsiniz.'
                                : 'Feel free to reach out through the contact section.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
