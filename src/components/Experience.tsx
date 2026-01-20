import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    title: "FullStack Developer",
    company: "Workeb",
    location: "Remote",
    period: "Oct 2024 – Dec 2025",
    duration: "1 year 3 months",
    description: [
      "Designed microservice-based REST APIs using Spring Boot including user authorization, product management, and campaign features",
      "Applied Design Patterns (Singleton, Factory, Builder) and SOLID principles for clean, maintainable code",
      "Developed automated unit and integration tests using JUnit and Mockito",
      "Worked with CI/CD pipelines using Git, Docker, and Linux",
    ],
    technologies: ["Spring Boot", "Next.js", "Microservices", "Docker", "JUnit", "Git"],
    type: "Full-time",
  },
  {
    title: "FullStack Developer Intern",
    company: "Vogue Telecom",
    location: "Dubai, UAE",
    period: "Jul 2023 – Aug 2023",
    duration: "2 months",
    description: [
      "Developed enterprise HRMS application using Spring Boot with JWT, LDAP, and OAuth2 authentication mechanisms",
      "Integrated MongoDB database and ElasticSearch for efficient data management and search functionality",
    ],
    technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT", "OAuth2", "LDAP"],
    type: "Internship",
  },
  {
    title: "Backend Developer Intern",
    company: "FMSS",
    location: "Remote",
    period: "Mar 2023 – Apr 2023",
    duration: "2 months",
    description: [
      "Contributed to backend development processes in a Fintech project using Java and Spring Boot",
      "Gained hands-on experience in enterprise-level backend architecture",
    ],
    technologies: ["Java", "Spring Boot", "Fintech"],
    type: "Internship",
  },
  {
    title: "Backend Developer Intern",
    company: "Konya Science Center",
    location: "Konya, Turkey",
    period: "Aug 2021 – Sep 2023",
    duration: "2 years 2 months",
    description: [
      "Led a 5-person Agile team developing a library management system",
      "Managed sprint processes, ensured team coordination, and actively participated in development",
    ],
    technologies: ["Java", "Agile", "Team Leadership"],
    type: "Internship",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            2+ years of professional experience in backend development and full-stack engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  {/* Left: Title & Company */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/80">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground ml-15">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 ml-15">
                  {exp.description.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="ml-15">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="outline"
                        className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
