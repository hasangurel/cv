import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border no-print">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Hasan Gürel. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
