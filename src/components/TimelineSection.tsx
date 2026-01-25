import { Briefcase, Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

import { useLanguage } from "@/contexts/LanguageContext";

export const TimelineSection = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            title: t('exp.workeb.title'),
            company: "Workeb",
            location: t('exp.workeb.location'),
            period: t('exp.workeb.date'),
            description: [
                t('exp.workeb.desc.1'),
                t('exp.workeb.desc.2'),
                t('exp.workeb.desc.3'),
            ],
            technologies: ["Spring Boot", "Next.js", "Microservices", "Docker"],
        },
        {
            title: t('exp.vogue.title'),
            company: "Vogue Telecom",
            location: t('exp.vogue.location'),
            period: t('exp.vogue.date'),
            description: [
                t('exp.vogue.desc.1'),
                t('exp.vogue.desc.2'),
            ],
            technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT"],
        },
        {
            title: t('exp.fmss.title'),
            company: "FMSS",
            location: t('exp.fmss.location'),
            period: t('exp.fmss.date'),
            description: [
                t('exp.fmss.desc.1'),
                t('exp.fmss.desc.2'),
            ],
            technologies: ["Java", "Spring Boot"],
        },
        {
            title: t('exp.konya.title'),
            company: "Konya Science Center",
            location: t('exp.konya.location'),
            period: t('exp.konya.date'),
            description: [
                t('exp.konya.desc.1'),
                t('exp.konya.desc.2'),
            ],
            technologies: ["Java", "Agile"],
        },
    ];

    const education = [
        {
            degree: t('education.school.degree_full'),
            school: t('education.school.name'),
            period: t('education.school.period'),
            gpa: "3.12 / 4.00",
            description: t('education.school.desc'),
        },
        {
            degree: t('cert.finance.title'),
            school: t('cert.finance.issuer'),
            period: "Nov 2025",
            badge: `${t('education.cert.credential')}: D7301D78PTZS`,
            description: t('cert.finance.desc'),
        },
        {
            degree: t('cert.java.title'),
            school: t('cert.java.issuer'),
            period: "2025",
            badge: "Professional Certificate",
            description: t('cert.java.desc'),
        },
        {
            degree: t('cert.cloud.title'),
            school: t('cert.cloud.issuer'),
            period: "2025",
            badge: "Specialization",
            description: t('cert.cloud.desc'),
        },
        {
            degree: t('cert.frontend.title'),
            school: t('cert.frontend.issuer'),
            period: "2025",
            badge: "Specialization",
            description: t('cert.frontend.desc'),
        },
        {
            degree: t('cert.math.title'),
            school: t('cert.math.issuer'),
            period: "2025",
            badge: "Specialization",
            description: t('cert.math.desc'),
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Education Column */}
                        <div id="education">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">
                                        Education
                                    </h2>
                                </div>
                                <div className="w-16 h-1 bg-primary rounded-full ml-13" />
                            </div>

                            <div className="relative ml-13 space-y-6">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />

                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                                        <Card className="hover:shadow-md transition-all">
                                            <CardContent className="p-5">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <Calendar className="h-4 w-4 text-primary" />
                                                            <span className="text-sm text-primary font-medium">
                                                                {edu.period}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg font-bold text-foreground mb-1">
                                                            {edu.degree}
                                                        </h3>
                                                        <p className="text-sm font-medium text-foreground/80">
                                                            {edu.school}
                                                        </p>
                                                    </div>
                                                    {edu.badge && (
                                                        <Badge variant="secondary" className="shrink-0">
                                                            <Award className="h-3 w-3 mr-1" />
                                                            {edu.badge}
                                                        </Badge>
                                                    )}
                                                </div>
                                                {edu.gpa && (
                                                    <div className="mb-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            GPA: {edu.gpa}
                                                        </Badge>
                                                    </div>
                                                )}
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Column */}
                        <div id="experience">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">
                                        Experience
                                    </h2>
                                </div>
                                <div className="w-16 h-1 bg-primary rounded-full ml-13" />
                            </div>

                            <div className="relative ml-13 space-y-6">
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />

                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                                        <Card className="hover:shadow-md transition-all">
                                            <CardContent className="p-5">
                                                <div className="mb-3">
                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                        <Calendar className="h-4 w-4 text-primary" />
                                                        <span className="text-sm text-primary font-medium">
                                                            {exp.period}
                                                        </span>
                                                        <span className="text-muted-foreground">•</span>
                                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                                        <span className="text-sm text-muted-foreground">
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-foreground mb-1">
                                                        {exp.title}
                                                    </h3>
                                                    <p className="text-sm font-medium text-foreground/80">
                                                        {exp.company}
                                                    </p>
                                                </div>

                                                <ul className="space-y-1.5 mb-3">
                                                    {exp.description.map((item, itemIdx) => (
                                                        <li
                                                            key={itemIdx}
                                                            className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                                                        >
                                                            <span className="text-primary mt-1 shrink-0">▸</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.technologies.map((tech, techIdx) => (
                                                        <Badge
                                                            key={techIdx}
                                                            variant="outline"
                                                            className="text-xs"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
