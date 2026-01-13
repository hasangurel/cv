import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Backend & Java",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring MVC", level: 85 },
      { name: "Spring Security", level: 80 },
      { name: "Spring Data JPA", level: 88 },
      { name: "Maven", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Oracle", level: 70 },
      { name: "Hibernate/JPA", level: 85 },
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      { name: "Microservices", level: 85 },
      { name: "REST API Design", level: 90 },
      { name: "Design Patterns", level: 85 },
      { name: "SOLID Principles", level: 90 },
      { name: "OOP", level: 95 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "JUnit/Mockito", level: 85 },
    ],
  },
];

const technologies = [
  "Java", "Spring Boot", "Microservices", "REST API", "GraphQL", 
  "PostgreSQL", "MongoDB", "Docker", "Git", "JUnit", "Mockito", 
  "Maven", "Hibernate", "JWT", "OAuth2", "ElasticSearch", "Linux"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardHeader className="bg-accent/50 border-b border-border">
                <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
