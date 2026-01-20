import { Server, Database, Code2, Globe, Shield, Boxes, Cloud, GitBranch } from "lucide-react";
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

export const WhatIDo = () => {
    const { t } = useLanguage();
    const expertiseAreas = getExpertiseAreas(t);

    return (
        <section id="whatido" className="py-20 bg-gradient-to-b from-card to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('whatido.title')}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t('whatido.subtitle')}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, idx) => (
                        <Card
                            key={idx}
                            className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${area.color}`} />
                            <CardContent className="p-6 text-center">
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <area.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
