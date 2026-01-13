import { Code2, Database, Server, Layers } from "lucide-react";
import { Card } from "./ui/card";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing scalable microservices and RESTful APIs",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "SOLID principles, design patterns, and TDD practices",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "PostgreSQL, MongoDB, and ORM technologies",
  },
  {
    icon: Layers,
    title: "Spring Ecosystem",
    description: "Spring Boot, Security, Data JPA, and MVC",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Java Backend Developer with 2 years of active experience in microservices 
            architectures, RESTful API development, and enterprise application design. 
            Strong expertise in the Spring Boot ecosystem, automated testing, and clean 
            code principles. Proactive and solution-oriented developer with solid knowledge 
            in design patterns, ORM technologies, and performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
