import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('hero.available')}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hasan Gürel
            </h1>

            <p className="text-xl md:text-2xl text-primary font-semibold">
              {t('hero.title')}
            </p>

            <p className="text-lg text-muted-foreground max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Ankara, Turkey
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                +90 531 990 1270
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild>
                <a href="mailto:hasangurel9@hotmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  {t('hero.contact')}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/hasangurel" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/hasangurel" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="secondary" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                {t('hero.download_cv')}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Hasan Gürel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-mono text-sm text-center whitespace-pre-line">
                {t('hero.exp_badge')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
