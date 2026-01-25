import { GraduationCap, Award, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export const Education = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: t('cert.finance.title'),
      issuer: t('cert.finance.issuer'),
      desc: t('cert.finance.desc'),
      credentialId: "D7301D78PTZS",
      date: "Nov 2025",
      topics: ["Derivatives", "Options & Futures", "Trading Strategies"],
    },
    {
      title: t('cert.java.title'),
      issuer: t('cert.java.issuer'),
      desc: t('cert.java.desc'),
      date: "2025",
      topics: ["Java SE", "Java EE", "Microservices", "Cloud Native"],
    },
    {
      title: t('cert.cloud.title'),
      issuer: t('cert.cloud.issuer'),
      desc: t('cert.cloud.desc'),
      date: "2025",
      topics: ["CI/CD", "Docker", "Kubernetes", "Agile"],
    },
    {
      title: t('cert.frontend.title'),
      issuer: t('cert.frontend.issuer'),
      desc: t('cert.frontend.desc'),
      date: "2025",
      topics: ["React", "UI/UX", "Clean Code"],
    },
    {
      title: t('cert.math.title'),
      issuer: t('cert.math.issuer'),
      desc: t('cert.math.desc'),
      date: "2025",
      topics: ["Linear Algebra", "Calculus", "Numerical Analysis"],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <Card className="overflow-hidden h-fit">
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold">{t('education.school.degree')}</h3>
                  <p className="opacity-90">{t('education.school.title')}</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg text-foreground mb-2">
                {t('education.school.name')}
              </h4>
              <p className="text-muted-foreground mb-4 font-mono text-sm">{t('education.school.period')}</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('education.school.desc')}
              </p>

              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  {t('education.school.gpa')}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {t('education.school.lang')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              {t('education.cert.title')}
            </h3>
            {certifications.map((cert, idx) => (
              <Card key={idx} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-foreground text-base">{cert.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span className="font-semibold text-primary">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {cert.desc}
                  </p>

                  {cert.credentialId && (
                    <div className="text-xs text-muted-foreground font-mono mb-3 bg-muted/50 px-2 py-1 rounded w-fit">
                      {t('education.cert.credential')}: {cert.credentialId}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.topics.map((topic, topicIdx) => (
                      <Badge
                        key={topicIdx}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {topic}
                      </Badge>
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
