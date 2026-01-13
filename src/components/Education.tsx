import { GraduationCap, Award, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const certifications = [
  {
    title: "IBM Java Developer",
    issuer: "IBM",
    topics: ["Cloud Native Architecture", "Java Development"],
  },
  {
    title: "IBM Front-End Developer",
    issuer: "IBM",
    topics: ["Front-end Technologies", "Web Development"],
  },
  {
    title: "Mathematics for Engineering",
    issuer: "BITS Pilani",
    topics: [
      "Probability & Statistics",
      "Discrete Mathematics",
      "Linear Algebra for ML",
      "AI Logic for Computer Science",
    ],
  },
  {
    title: "Practical Guide to Trading",
    issuer: "IBKR",
    topics: ["Stock Fundamentals", "Forex Basics", "Derivatives", "Options & Futures"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <Card className="overflow-hidden">
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold">Computer Engineering</h3>
                  <p className="opacity-90">Bachelor's Degree</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg text-foreground mb-2">
                Eskisehir Technical University
              </h4>
              <p className="text-muted-foreground mb-4">Sep 2020 – Jun 2024</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  GPA: 3.00 / 4.00
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  English & Turkish
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <Card key={idx} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-foreground">{cert.title}</h4>
                    <Badge variant="outline" className="text-xs shrink-0 ml-2">
                      {cert.issuer}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.topics.slice(0, 3).map((topic, topicIdx) => (
                      <span
                        key={topicIdx}
                        className="text-xs text-muted-foreground"
                      >
                        {topic}
                        {topicIdx < Math.min(cert.topics.length, 3) - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
