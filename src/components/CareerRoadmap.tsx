import { useState } from "react";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface RoadmapStop {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    duration: string;
    type: "fulltime" | "internship";
    description: string[];
    technologies: string[];
    position: number;
}

export const CareerRoadmap = () => {
    const { t } = useLanguage();
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const roadmapStops: RoadmapStop[] = [
        {
            id: "konya",
            title: t("exp.konya.title"),
            company: "Konya Science Center",
            location: t("exp.konya.location"),
            period: t("exp.konya.date"),
            duration: t("exp.konya.duration"),
            type: "internship",
            description: [t("exp.konya.desc.1"), t("exp.konya.desc.2")],
            technologies: ["Java", "Agile"],
            position: 15,
        },
        {
            id: "fmss",
            title: t("exp.fmss.title"),
            company: "FMSS",
            location: t("exp.fmss.location"),
            period: t("exp.fmss.date"),
            duration: t("exp.fmss.duration"),
            type: "internship",
            description: [t("exp.fmss.desc.1"), t("exp.fmss.desc.2")],
            technologies: ["Java", "Spring Boot"],
            position: 40,
        },
        {
            id: "vogue",
            title: t("exp.vogue.title"),
            company: "Vogue Telecom",
            location: t("exp.vogue.location"),
            period: t("exp.vogue.date"),
            duration: t("exp.vogue.duration"),
            type: "internship",
            description: [t("exp.vogue.desc.1"), t("exp.vogue.desc.2")],
            technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT"],
            position: 65,
        },
        {
            id: "workeb",
            title: t("exp.workeb.title"),
            company: "Workeb",
            location: t("exp.workeb.location"),
            period: t("exp.workeb.date"),
            duration: t("exp.workeb.duration"),
            type: "fulltime",
            description: [
                t("exp.workeb.desc.1"),
                t("exp.workeb.desc.2"),
                t("exp.workeb.desc.3"),
                t("exp.workeb.desc.4"),
            ],
            technologies: ["Spring Boot", "Next.js", "Microservices", "Docker"],
            position: 90,
        },
    ];

    return (
        <section id="experience" className="py-32 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Minimal Header */}
                <div className="mb-20">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-light">
                        Experience
                    </p>
                    <h2 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
                        Work History
                    </h2>
                </div>

                {/* Horizontal Timeline - Desktop */}
                <div className="hidden md:block mb-20">
                    <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
                        {/* Progress line */}
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-foreground"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />

                        {/* Markers */}
                        {roadmapStops.map((stop, index) => (
                            <motion.div
                                key={stop.id}
                                className="absolute top-1/2 -translate-y-1/2 group cursor-pointer"
                                style={{ left: `${stop.position}%` }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, type: "spring" }}
                                onMouseEnter={() => setHoveredId(stop.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Marker dot */}
                                <div className={`w-4 h-4 rounded-full border-2 border-background transition-all duration-300 ${hoveredId === stop.id ? "bg-foreground scale-150" : "bg-foreground/50"
                                    }`} />

                                {/* Year label */}
                                <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs transition-opacity duration-300 ${hoveredId === stop.id ? "opacity-100" : "opacity-0"
                                    }`}>
                                    {stop.period.split(" ")[0]}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience Cards - Minimal Style */}
                <div className="space-y-1">
                    {roadmapStops.map((stop, index) => (
                        <motion.div
                            key={stop.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(stop.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card className={`border-0 border-l-2 rounded-none transition-all duration-300 ${hoveredId === stop.id
                                    ? "border-l-foreground bg-card/50"
                                    : "border-l-border/30 bg-transparent"
                                }`}>
                                <CardContent className="p-8 md:p-10">
                                    <div className="grid md:grid-cols-[200px_1fr] gap-8">
                                        {/* Left: Period & Type */}
                                        <div className="space-y-2">
                                            <p className="text-sm font-light text-muted-foreground tracking-wide">
                                                {stop.period}
                                            </p>
                                            <Badge
                                                variant="outline"
                                                className="text-xs font-light border-foreground/20 rounded-none px-3"
                                            >
                                                {stop.type === "fulltime"
                                                    ? t("experience.type.fulltime")
                                                    : t("experience.type.internship")}
                                            </Badge>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="space-y-6">
                                            {/* Title & Company */}
                                            <div>
                                                <h3 className="text-2xl font-light text-foreground mb-1 tracking-tight">
                                                    {stop.title}
                                                </h3>
                                                <p className="text-lg text-muted-foreground font-light">
                                                    {stop.company}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    <span className="font-light">{stop.location}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: hoveredId === stop.id ? "auto" : 0,
                                                    opacity: hoveredId === stop.id ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <ul className="space-y-3 text-sm text-muted-foreground font-light leading-relaxed">
                                                    {stop.description.map((item, idx) => (
                                                        <li key={idx} className="flex gap-3">
                                                            <span className="text-foreground/30 mt-1.5">—</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {stop.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs font-light text-muted-foreground tracking-wide"
                                                    >
                                                        {tech}
                                                        {idx < stop.technologies.length - 1 && " /"}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA - Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 pt-20 border-t border-border/30"
                >
                    <div className="flex items-center justify-between group cursor-pointer">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2 font-light">
                                What's Next
                            </p>
                            <h3 className="text-3xl font-light text-foreground tracking-tight">
                                Let's Work Together
                            </h3>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
