import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border no-print">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Hasan Gürel. {t('footer.rights')}</p>
          <p className="flex items-center gap-1.5">
            {t('footer.built')} <Heart className="h-4 w-4 text-destructive fill-destructive" />
          </p>
        </div>
      </div>
    </footer>
  );
};
