import { Server, Database, Globe, Boxes, Shield, Cloud } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExpertiseArea {
    icon: React.ElementType;
    title: string;
    description: string;
    gradientBg: string;
    gradientIcon: string;
    borderColor: string;
    hoverBorderColor: string;
}

const getExpertiseAreas = (t: (key: string) => string): ExpertiseArea[] => [
    {
        icon: Server,
        title: t('expertise.backend.title'),
        description: t('expertise.backend.description'),
        gradientBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
        gradientIcon: "from-emerald-500 to-teal-600",
        borderColor: "border-l-emerald-500/50",
        hoverBorderColor: "group-hover:border-l-emerald-500"
    },
    {
        icon: Database,
        title: t('expertise.database.title'),
        description: t('expertise.database.description'),
        gradientBg: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
        gradientIcon: "from-purple-500 to-fuchsia-600",
        borderColor: "border-l-purple-500/50",
        hoverBorderColor: "group-hover:border-l-purple-500"
    },
    {
        icon: Globe,
        title: t('expertise.api.title'),
        description: t('expertise.api.description'),
        gradientBg: "from-orange-500/10 via-red-500/5 to-transparent",
        gradientIcon: "from-orange-500 to-red-600",
        borderColor: "border-l-orange-500/50",
        hoverBorderColor: "group-hover:border-l-orange-500"
    },
    {
        icon: Boxes,
        title: t('expertise.microservices.title'),
        description: t('expertise.microservices.description'),
        gradientBg: "from-green-500/10 via-emerald-500/5 to-transparent",
        gradientIcon: "from-green-500 to-emerald-600",
        borderColor: "border-l-green-500/50",
        hoverBorderColor: "group-hover:border-l-green-500"
    },
    {
        icon: Shield,
        title: t('expertise.security.title'),
        description: t('expertise.security.description'),
        gradientBg: "from-indigo-500/10 via-purple-500/5 to-transparent",
        gradientIcon: "from-indigo-500 to-purple-600",
        borderColor: "border-l-indigo-500/50",
        hoverBorderColor: "group-hover:border-l-indigo-500"
    },
    {
        icon: Cloud,
        title: t('expertise.devops.title'),
        description: t('expertise.devops.description'),
        gradientBg: "from-pink-500/10 via-rose-500/5 to-transparent",
        gradientIcon: "from-pink-500 to-rose-600",
        borderColor: "border-l-pink-500/50",
        hoverBorderColor: "group-hover:border-l-pink-500"
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

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, idx) => (
                        <Card
                            key={idx}
                            className={`group relative overflow-hidden border-l-4 ${area.borderColor} ${area.hoverBorderColor} 
                                       hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 
                                       bg-gradient-to-br ${area.gradientBg}`}
                        >
                            <CardContent className="p-6 relative z-10">
                                {/* Icon Container */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradientIcon} 
                                                   flex items-center justify-center flex-shrink-0
                                                   group-hover:scale-110 group-hover:rotate-3 
                                                   transition-all duration-300 shadow-lg`}>
                                        <area.icon className="h-7 w-7 text-white" strokeWidth={2} />
                                    </div>

                                    {/* Title */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground 
                                                     group-hover:text-primary transition-colors duration-300
                                                     leading-tight">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground text-[14px] leading-relaxed">
                                    {area.description}
                                </p>

                                {/* Subtle gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradientIcon} 
                                               opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 
                                               pointer-events-none`} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
