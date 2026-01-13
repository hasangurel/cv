import { ExternalLink, Github, Server, Database, Shield, Layers } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Microservices Platform",
    description:
      "A scalable e-commerce backend built with microservices architecture. Features include user authentication, product catalog, order management, and payment processing.",
    technologies: ["Spring Boot", "PostgreSQL", "Docker", "REST API", "JWT"],
    icon: Server,
    github: "https://github.com/hasangurel",
  },
  {
    title: "Enterprise HRMS System",
    description:
      "Human Resource Management System with JWT, LDAP, and OAuth2 authentication. Integrated MongoDB and ElasticSearch for efficient data management.",
    technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "OAuth2", "LDAP"],
    icon: Shield,
    github: "https://github.com/hasangurel",
  },
  {
    title: "Library Management System",
    description:
      "Full-featured library management system developed using Agile methodology. Led a 5-person team managing sprint processes and development cycles.",
    technologies: ["Java", "Spring MVC", "MySQL", "Agile", "Scrum"],
    icon: Database,
    github: "https://github.com/hasangurel",
  },
  {
    title: "Campaign Management API",
    description:
      "RESTful API for managing marketing campaigns with user authorization and product management features. Built following SOLID principles and design patterns.",
    technologies: ["Spring Boot", "JUnit", "Mockito", "Docker", "CI/CD"],
    icon: Layers,
    github: "https://github.com/hasangurel",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of backend projects showcasing my expertise in Java, Spring Boot, 
            and microservices architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <project.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
