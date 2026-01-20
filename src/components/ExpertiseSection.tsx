import {
    Server, Database, Globe, Boxes, Shield, Cloud,
    Lightbulb, Code, TestTube, Rocket, RefreshCw, Users
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const getExpertiseAreas = (t: (key: string) => string) => [
    {
        icon: Server,
        title: t('expertise.backend.title'),
        description: t('expertise.backend.description'),
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Database,
        title: t('expertise.database.title'),
        description: t('expertise.database.description'),
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Globe,
        title: t('expertise.api.title'),
        description: t('expertise.api.description'),
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Boxes,
        title: t('expertise.microservices.title'),
        description: t('expertise.microservices.description'),
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Shield,
        title: t('expertise.security.title'),
        description: t('expertise.security.description'),
        color: "from-indigo-500 to-purple-500"
    },
    {
        icon: Cloud,
        title: t('expertise.devops.title'),
        description: t('expertise.devops.description'),
        color: "from-pink-500 to-rose-500"
    },
];

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

export const ExpertiseSection = () => {
    const { t } = useLanguage();
    const expertiseAreas = getExpertiseAreas(t);
    const workProcess = getWorkProcess(t);

    return (
        <section className="py-20 bg-gradient-to-b from-card to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* What I Do Column */}
                        <div id="whatido">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-3">
                                    {t('whatido.title')}
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full mb-3" />
                                <p className="text-muted-foreground text-sm">
                                    {t('whatido.subtitle')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {expertiseAreas.map((area, idx) => (
                                    <Card
                                        key={idx}
                                        className="group hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-primary overflow-hidden"
                                        style={{ borderLeftColor: `transparent` }}
                                    >
                                        <CardContent className="p-5">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    <area.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                        {area.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {area.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* How I Work Column */}
                        <div id="howiwork">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-3">
                                    {t('howiwork.title')}
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full mb-3" />
                                <p className="text-muted-foreground text-sm">
                                    {t('howiwork.subtitle')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {workProcess.map((process, idx) => (
                                    <Card
                                        key={idx}
                                        className="group hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-primary overflow-hidden"
                                        style={{ borderLeftColor: `transparent` }}
                                    >
                                        <CardContent className="p-5">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    <process.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                        {process.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {process.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
