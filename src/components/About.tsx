import { Badge } from "./ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { User, Code, Target, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

// 3D Flip API Card Component
interface ApiFlipCardProps {
  method: string;
  endpoint: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  hintHover?: string;
  hintViewing?: string;
  jsonContent: React.ReactNode;
}

const ApiFlipCard = ({ method, endpoint, title, summary, icon: Icon, iconColor, borderColor, hintHover, hintViewing, jsonContent }: ApiFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[320px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT SIDE - Summary */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`w-full h-full bg-card border-2 ${borderColor} rounded-xl shadow-lg flex flex-col`}>
            {/* Header */}
            <div className="px-4 py-3 border-b border-border bg-muted/30 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 text-white font-mono text-xs px-2">
                    {method}
                  </Badge>
                  <code className="text-xs font-mono text-muted-foreground">{endpoint}</code>
                </div>
                <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-[10px]">
                  200 OK
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className={`w-16 h-16 rounded-2xl ${iconColor} flex items-center justify-center mb-4 shadow-lg`}>
                <Icon className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-foreground font-workflow mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
            </div>

            {/* Hover hint */}
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-mono">
                <span>{hintHover || 'Hover to view response'}</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE - JSON Response */}
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={`w-full h-full bg-[#1e1e1e] dark:bg-gray-900 border-2 ${borderColor} rounded-xl shadow-lg flex flex-col overflow-hidden`}>
            {/* Response Header */}
            <div className="px-4 py-3 border-b border-gray-700 bg-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500 text-white font-mono text-xs px-2">
                    {method}
                  </Badge>
                  <code className="text-xs font-mono text-gray-400">{endpoint}</code>
                </div>
                <span className="text-xs font-mono text-gray-400">application/json</span>
              </div>
            </div>

            {/* JSON Content */}
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
              {jsonContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// JSON Syntax Highlighting Components
const JsonKey = ({ children }: { children: React.ReactNode }) => (
  <span className="text-purple-400">{children}</span>
);

const JsonString = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-400">"{children}"</span>
);

const JsonNumber = ({ children }: { children: React.ReactNode }) => (
  <span className="text-orange-400">{children}</span>
);

const JsonBool = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-400">{children}</span>
);

const JsonArray = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-300">{children}</span>
);

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border mb-4">
            <span className="text-sm font-mono text-muted-foreground">API Documentation</span>
            <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs">
              v1.0
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-workflow tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-sm">
            GET /api/v1/developer/hasan-gurel/*
          </p>
        </div>

        {/* 3 API Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Card 1: Who */}
          <ApiFlipCard
            method="GET"
            endpoint="/who"
            title={t('about.card.who.title')}
            summary={t('about.card.who.summary')}
            icon={User}
            iconColor="bg-gradient-to-br from-blue-500 to-cyan-500"
            borderColor="border-blue-500/30"
            hintHover={t('about.hint.hover')}
            hintViewing={t('about.hint.viewing')}
            jsonContent={
              <div className="space-y-1 text-gray-300">
                <div>{'{'}</div>
                <div className="pl-4"><JsonKey>"name"</JsonKey>: <JsonString>Hasan Gürel</JsonString>,</div>
                <div className="pl-4"><JsonKey>"title"</JsonKey>: <JsonString>{t('about.json.title')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"location"</JsonKey>: <JsonString>{t('about.json.location')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"exp"</JsonKey>: <JsonNumber>2</JsonNumber>,</div>
                <div className="pl-4"><JsonKey>"available"</JsonKey>: <JsonBool>true</JsonBool>,</div>
                <div className="pl-4"><JsonKey>"languages"</JsonKey>: <JsonArray>["TR", "EN", "JP"]</JsonArray>,</div>
                <div className="pl-4"><JsonKey>"email"</JsonKey>: <JsonString>hasangurel9@hotmail.com</JsonString></div>
                <div>{'}'}</div>
              </div>
            }
          />

          {/* Card 2: Skills */}
          <ApiFlipCard
            method="GET"
            endpoint="/skills"
            title={t('about.card.skills.title')}
            summary={t('about.card.skills.summary')}
            icon={Code}
            iconColor="bg-gradient-to-br from-indigo-500 to-purple-500"
            borderColor="border-indigo-500/30"
            hintHover={t('about.hint.hover')}
            hintViewing={t('about.hint.viewing')}
            jsonContent={
              <div className="space-y-1 text-gray-300">
                <div>{'{'}</div>
                <div className="pl-4"><JsonKey>"role"</JsonKey>: <JsonString>{t('about.json.role')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"primary"</JsonKey>: <JsonArray>["Java", "Spring"]</JsonArray>,</div>
                <div className="pl-4"><JsonKey>"database"</JsonKey>: <JsonArray>["PostgreSQL", "Redis"]</JsonArray>,</div>
                <div className="pl-4"><JsonKey>"devops"</JsonKey>: <JsonArray>["Docker", "K8s"]</JsonArray>,</div>
                <div className="pl-4"><JsonKey>"methods"</JsonKey>: <JsonArray>["TDD", "SOLID"]</JsonArray></div>
                <div>{'}'}</div>
              </div>
            }
          />

          {/* Card 3: Goals */}
          <ApiFlipCard
            method="GET"
            endpoint="/goals"
            title={t('about.card.goals.title')}
            summary={t('about.card.goals.summary')}
            icon={Target}
            iconColor="bg-gradient-to-br from-orange-500 to-red-500"
            borderColor="border-orange-500/30"
            hintHover={t('about.hint.hover')}
            hintViewing={t('about.hint.viewing')}
            jsonContent={
              <div className="space-y-1 text-gray-300">
                <div>{'{'}</div>
                <div className="pl-4"><JsonKey>"passion"</JsonKey>: <JsonString>{t('about.json.passion')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"goal"</JsonKey>: <JsonString>{t('about.json.goal')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"focus"</JsonKey>: <JsonString>{t('about.json.focus')}</JsonString>,</div>
                <div className="pl-4"><JsonKey>"values"</JsonKey>: <JsonArray>["Clean Code", "Learning"]</JsonArray>,</div>
                <div className="pl-4"><JsonKey>"open_to"</JsonKey>: <JsonString>{t('about.json.status')}</JsonString></div>
                <div>{'}'}</div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};
