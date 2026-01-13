import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    title: "FullStack Developer",
    company: "Workeb",
    period: "Oct 2024 – Dec 2025",
    description: [
      "Designed microservice-based REST APIs using Spring Boot including user authorization, product management, and campaign features",
      "Applied Design Patterns (Singleton, Factory, Builder) and SOLID principles for clean, maintainable code",
      "Developed automated unit and integration tests using JUnit and Mockito",
      "Worked with CI/CD pipelines using Git, Docker, and Linux",
    ],
    technologies: ["Spring Boot", "Next.js", "Microservices", "Docker", "JUnit", "Git"],
  },
  {
    title: "FullStack Developer Intern",
    company: "Vogue Telecom",
    period: "Jul 2023 – Aug 2023",
    description: [
      "Developed enterprise HRMS application using Spring Boot with JWT, LDAP, and OAuth2 authentication mechanisms",
      "Integrated MongoDB database and ElasticSearch for efficient data management and search functionality",
    ],
    technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT", "OAuth2", "LDAP"],
  },
  {
    title: "Backend Developer Intern",
    company: "FMSS",
    period: "Mar 2023 – Apr 2023",
    description: [
      "Contributed to backend development processes in a Fintech project using Java and Spring Boot",
      "Gained hands-on experience in enterprise-level backend architecture",
    ],
    technologies: ["Java", "Spring Boot", "Fintech"],
  },
  {
    title: "Backend Developer Intern",
    company: "Konya Science Center",
    period: "Aug 2021 – Sep 2023",
    description: [
      "Led a 5-person Agile team developing a library management system",
      "Managed sprint processes, ensured team coordination, and actively participated in development",
    ],
    technologies: ["Java", "Agile", "Team Leadership"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content Card */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIdx) => (
                          <Badge key={techIdx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
