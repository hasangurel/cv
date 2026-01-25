import { ExternalLink, Github, Server, Database, Shield, Layers } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj.ecommerce.title'),
      description: t('proj.ecommerce.desc'),
      technologies: ["Spring Boot", "PostgreSQL", "Docker", "REST API", "JWT"],
      icon: Server,
      github: "https://github.com/hasangurel",
    },
    {
      title: t('proj.hrms.title'),
      description: t('proj.hrms.desc'),
      technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "OAuth2", "LDAP"],
      icon: Shield,
      github: "https://github.com/hasangurel",
    },
    {
      title: t('proj.library.title'),
      description: t('proj.library.desc'),
      technologies: ["Java", "Spring MVC", "MySQL", "Agile", "Scrum"],
      icon: Database,
      github: "https://github.com/hasangurel",
    },
    {
      title: t('proj.campaign.title'),
      description: t('proj.campaign.desc'),
      technologies: ["Spring Boot", "JUnit", "Mockito", "Docker", "CI/CD"],
      icon: Layers,
      github: "https://github.com/hasangurel",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
                      {t('projects.btn.code')}
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.btn.demo')}
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
