import { Briefcase, Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
    {
        title: "FullStack Developer",
        company: "Workeb",
        location: "Remote",
        period: "Oct 2024 – Dec 2025",
        description: [
            "Designed microservice-based REST APIs using Spring Boot",
            "Applied Design Patterns and SOLID principles",
            "Developed automated tests using JUnit and Mockito",
        ],
        technologies: ["Spring Boot", "Next.js", "Microservices", "Docker"],
    },
    {
        title: "FullStack Developer Intern",
        company: "Vogue Telecom",
        location: "Dubai, UAE",
        period: "Jul 2023 – Aug 2023",
        description: [
            "Developed enterprise HRMS with JWT, LDAP, OAuth2",
            "Integrated MongoDB and ElasticSearch",
        ],
        technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT"],
    },
    {
        title: "Backend Developer Intern",
        company: "FMSS",
        location: "Remote",
        period: "Mar 2023 – Apr 2023",
        description: [
            "Contributed to Fintech project",
            "Gained enterprise-level backend experience",
        ],
        technologies: ["Java", "Spring Boot"],
    },
    {
        title: "Backend Developer Intern",
        company: "Konya Science Center",
        location: "Konya, Turkey",
        period: "Aug 2021 – Sep 2023",
        description: [
            "Led 5-person Agile team",
            "Developed library management system",
        ],
        technologies: ["Java", "Agile"],
    },
];

const education = [
    {
        degree: "B.Sc. Computer Engineering",
        school: "Eskişehir Technical University",
        period: "2019 – 2024",
        gpa: "3.12 / 4.00",
        description: "Specialized in software engineering, algorithms, and backend development.",
    },
    {
        degree: "Derivatives - Options & Futures",
        school: "Interactive Brokers",
        period: "Nov 2025",
        badge: "Credential ID: D7301D78PTZS",
        description: "Advanced financial markets training focusing on derivatives, options strategies, and futures trading.",
    },
    {
        degree: "IBM Java Developer Professional",
        school: "IBM",
        period: "2025",
        badge: "Professional Certificate",
        description: "Comprehensive mastery of Java SE, Java EE, microservices, and cloud-native development.",
    },
    {
        degree: "Cloud Native, Microservices, Containers, DevOps and Agile",
        school: "IBM",
        period: "2025",
        badge: "Specialization",
        description: "Deep dive into CI/CD, Docker, Kubernetes, OpenShift, and Agile methodologies.",
    },
    {
        degree: "IBM Front-End Developer",
        school: "IBM",
        period: "2025",
        badge: "Specialization",
        description: "Professional training in React, clean code, UI/UX principles, and modern web development.",
    },
    {
        degree: "Mathematics for Engineering",
        school: "Coursera",
        period: "2025",
        badge: "Specialization",
        description: "Applied mathematics focusing on matrix algebra, differential equations, and numerical analysis.",
    },
];

export const TimelineSection = () => {
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
