import { Lightbulb, Code, TestTube, Rocket, RefreshCw, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const getWorkProcess = (t: (key: string) => string) => [
    {
        icon: Lightbulb,
        title: t('howiwork.analyze.title'),
        description: t('howiwork.analyze.description'),
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: Code,
        title: t('howiwork.develop.title'),
        description: t('howiwork.develop.description'),
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: TestTube,
        title: t('howiwork.test.title'),
        description: t('howiwork.test.description'),
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Rocket,
        title: t('howiwork.deploy.title'),
        description: t('howiwork.deploy.description'),
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: RefreshCw,
        title: t('howiwork.optimize.title'),
        description: t('howiwork.optimize.description'),
        color: "from-rose-500 to-pink-500"
    },
    {
        icon: Users,
        title: t('howiwork.collaborate.title'),
        description: t('howiwork.collaborate.description'),
        color: "from-indigo-500 to-purple-500"
    },
];

export const HowIWork = () => {
    const { t } = useLanguage();
    const workProcess = getWorkProcess(t);

    return (
        <section id="howiwork" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('howiwork.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t('howiwork.subtitle')}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workProcess.map((process, idx) => (
                        <Card
                            key={idx}
                            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${process.color}`} />
                            <CardContent className="p-6 text-center">
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <process.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {process.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {process.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom Philosophy */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-2 border-primary/20">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                {t('howiwork.philosophy.title')}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('howiwork.philosophy.description')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
