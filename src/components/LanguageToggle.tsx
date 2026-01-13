import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Languages className="h-4 w-4" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-accent' : ''}
                >
                    🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage('tr')}
                    className={language === 'tr' ? 'bg-accent' : ''}
                >
                    🇹🇷 Türkçe
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
