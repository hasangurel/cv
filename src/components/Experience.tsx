import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp.workeb.title'),
      company: "Workeb",
      location: t('exp.workeb.location'),
      period: t('exp.workeb.date'),
      duration: t('exp.workeb.duration'),
      description: [
        t('exp.workeb.desc.1'),
        t('exp.workeb.desc.2'),
        t('exp.workeb.desc.3'),
        t('exp.workeb.desc.4'),
      ],
      technologies: ["Spring Boot", "Next.js", "Microservices", "Docker", "JUnit", "Git"],
      type: t('experience.type.fulltime'),
    },
    {
      title: t('exp.vogue.title'),
      company: "Vogue Telecom",
      location: t('exp.vogue.location'),
      period: t('exp.vogue.date'),
      duration: t('exp.vogue.duration'),
      description: [
        t('exp.vogue.desc.1'),
        t('exp.vogue.desc.2'),
      ],
      technologies: ["Spring Boot", "MongoDB", "ElasticSearch", "JWT", "OAuth2", "LDAP"],
      type: t('experience.type.internship'),
    },
    {
      title: t('exp.fmss.title'),
      company: "FMSS",
      location: t('exp.fmss.location'),
      period: t('exp.fmss.date'),
      duration: t('exp.fmss.duration'),
      description: [
        t('exp.fmss.desc.1'),
        t('exp.fmss.desc.2'),
      ],
      technologies: ["Java", "Spring Boot", "Fintech"],
      type: t('experience.type.internship'),
    },
    {
      title: t('exp.konya.title'),
      company: "Konya Science Center",
      location: t('exp.konya.location'),
      period: t('exp.konya.date'),
      duration: t('exp.konya.duration'),
      description: [
        t('exp.konya.desc.1'),
        t('exp.konya.desc.2'),
      ],
      technologies: ["Java", "Agile", "Team Leadership"],
      type: t('experience.type.internship'),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('experience.subtitle')}
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
              <div className="text-sm text-muted-foreground">{t('experience.duration.years')}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">{t('experience.title').split(' ')[1] || 'Companies'}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card border">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">{t('experience.location') || 'Countries'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
