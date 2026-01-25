import { Card, CardContent } from "./ui/card";
import {
    Lightbulb, Code, TestTube, Rocket, RefreshCw, Users,
    CheckCircle, ArrowRight, Zap, Layers, FileText
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

// ============================================
// BACK SIDE CONTENT COMPONENTS - Visually Rich
// ============================================

const AnalyzeBackContent = () => (
    <div className="w-full space-y-3">
        {/* Step 1 */}
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-xl border-l-4 border-blue-500">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <FileText className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-xs font-bold text-foreground font-workflow">Requirements</div>
                <div className="text-[10px] text-muted-foreground">Gather & Document</div>
            </div>
            <ArrowRight className="h-4 w-4 text-blue-500" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-xl border-l-4 border-cyan-500">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <Layers className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-xs font-bold text-foreground font-workflow">Architecture</div>
                <div className="text-[10px] text-muted-foreground">Design Structure</div>
            </div>
            <CheckCircle className="h-4 w-4 text-cyan-500" />
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-green-600 dark:text-green-400 font-workflow">PLANNING PHASE COMPLETE</span>
        </div>
    </div>
);

const DevelopBackContent = () => (
    <div className="w-full">
        {/* VS Code Style Header */}
        <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground ml-2">UserService.java</span>
        </div>

        {/* Code Block with gradient border */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-[2px] rounded-lg">
            <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-[10px] space-y-0.5">
                <div className="text-purple-400">@Service</div>
                <div><span className="text-blue-400">public class</span> <span className="text-green-400">UserService</span> {'{'}</div>
                <div className="pl-2"><span className="text-blue-400">private final</span> <span className="text-yellow-300">UserRepo</span> repo;</div>
                <div className="pl-2 text-gray-500">// SOLID ✓ Clean Code ✓</div>
                <div>{'}'}</div>
            </div>
        </div>

        {/* Principles */}
        <div className="flex gap-2 mt-3">
            <Badge className="bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 text-[10px]">SOLID</Badge>
            <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30 text-[10px]">DRY</Badge>
            <Badge className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 text-[10px]">KISS</Badge>
        </div>
    </div>
);

const TestBackContent = () => (
    <div className="w-full space-y-2">
        {/* Test Results with colored backgrounds */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-lg border-l-4 border-green-500">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-xs font-mono flex-1">shouldCreateUser()</span>
            <Badge className="bg-green-500 text-white text-[9px] px-1.5">PASS</Badge>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-lg border-l-4 border-green-500">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-xs font-mono flex-1">shouldValidate()</span>
            <Badge className="bg-green-500 text-white text-[9px] px-1.5">PASS</Badge>
        </div>

        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-lg border-l-4 border-green-500">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-xs font-mono flex-1">shouldHandle()</span>
            <Badge className="bg-green-500 text-white text-[9px] px-1.5">PASS</Badge>
        </div>

        {/* Coverage with big number */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-lg p-3 mt-2 border border-green-500/30">
            <div className="flex items-center justify-between">
                <span className="text-xs font-workflow text-muted-foreground">Test Coverage</span>
                <span className="text-2xl font-bold text-green-500 font-mono">95%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[95%]" />
            </div>
        </div>
    </div>
);

const DeployBackContent = () => (
    <div className="w-full space-y-3">
        {/* Terminal with gradient border */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-lg">
            <div className="bg-gray-900 rounded-lg p-3 font-mono text-[10px] space-y-1">
                <div className="text-gray-400">$ docker-compose up -d</div>
                <div className="text-green-400">✓ Building backend...</div>
                <div className="text-green-400">✓ Starting postgres...</div>
                <div className="text-cyan-400">⚡ All services UP</div>
            </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg p-2 border border-purple-500/30">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono">backend</span>
                </div>
                <div className="text-[9px] text-green-500 font-bold mt-1">HEALTHY</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-lg p-2 border border-pink-500/30">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono">database</span>
                </div>
                <div className="text-[9px] text-green-500 font-bold mt-1">HEALTHY</div>
            </div>
        </div>
    </div>
);

const OptimizeBackContent = () => (
    <div className="w-full space-y-2">
        {/* Cache */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-lg border-l-4 border-orange-500">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-[10px] font-workflow font-bold text-foreground">Redis Cache</div>
                <div className="text-[9px] text-muted-foreground">Hit Rate: 98%</div>
            </div>
            <Badge className="bg-green-500 text-white text-[8px] px-1">ON</Badge>
        </div>

        {/* Rate Limiting */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-lg border-l-4 border-yellow-500">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                <RefreshCw className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-[10px] font-workflow font-bold text-foreground">Rate Limit</div>
                <div className="text-[9px] text-muted-foreground">1000 req/min</div>
            </div>
            <Badge className="bg-yellow-500 text-white text-[8px] px-1">API</Badge>
        </div>

        {/* Lighthouse */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-lg border-l-4 border-green-500">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-[10px] font-workflow font-bold text-foreground">Lighthouse CI</div>
                <div className="text-[9px] text-muted-foreground">Performance: 95</div>
            </div>
            <Badge className="bg-green-500 text-white text-[8px] px-1">A+</Badge>
        </div>

        {/* Microservices */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-lg border-l-4 border-purple-500">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Layers className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
                <div className="text-[10px] font-workflow font-bold text-foreground">Microservices</div>
                <div className="text-[9px] text-muted-foreground">K8s Auto-Scale</div>
            </div>
            <Badge className="bg-purple-500 text-white text-[8px] px-1">6 pods</Badge>
        </div>
    </div>
);

const CollaborateBackContent = () => (
    <div className="w-full space-y-2">
        {/* Git Commits with colored backgrounds */}
        <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg" />
                <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-500" />
            </div>
            <div className="flex-1 bg-gradient-to-r from-indigo-500/20 to-indigo-500/5 rounded-lg p-2 border-l-4 border-indigo-500">
                <div className="text-xs font-mono font-bold text-foreground">feat: add auth</div>
                <div className="text-[10px] text-indigo-500">JWT + OAuth2</div>
            </div>
        </div>

        <div className="flex items-start gap-2">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg" />
                <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-green-500" />
            </div>
            <div className="flex-1 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-lg p-2 border-l-4 border-purple-500">
                <div className="text-xs font-mono font-bold text-foreground">test: coverage 95%</div>
                <div className="text-[10px] text-purple-500">Unit + Integration</div>
            </div>
        </div>

        <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg" />
            <div className="flex-1 bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-lg p-2 border-l-4 border-green-500">
                <div className="text-xs font-mono font-bold text-green-600 dark:text-green-400">merge → main ✓</div>
                <div className="text-[10px] text-green-500">PR #42 approved</div>
            </div>
        </div>
    </div>
);

// ============================================
// 3D FLIP CARD COMPONENT
// ============================================

interface FlipCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    colorFrom: string;
    colorTo: string;
    bgLight: string;
    bgDark: string;
    borderColor: string;
    hint: string;
    backContent: React.ReactNode;
}

const FlipCard = ({
    title,
    description,
    icon: Icon,
    colorFrom,
    colorTo,
    bgLight,
    bgDark,
    borderColor,
    hint,
    backContent
}: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="h-[320px] cursor-pointer"
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
                {/* FRONT SIDE */}
                <div
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <Card className={`w-full h-full border-2 ${borderColor} bg-card shadow-lg rounded-xl`}>
                        <CardContent className="flex flex-col items-center justify-center text-center h-full p-6">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center mb-5 shadow-lg`}>
                                <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                            </div>

                            {/* Title */}
                            <h3 className={`text-xl font-bold font-workflow mb-3 bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>
                                {title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed font-workflow">
                                {description}
                            </p>

                            {/* Hover hint - More visible */}
                            <div className="mt-4 flex items-center justify-center">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/80 border border-border/50">
                                    <span className="text-xs font-medium text-muted-foreground font-mono">
                                        {hint}
                                    </span>
                                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* BACK SIDE */}
                <div
                    className="absolute w-full h-full"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <Card className={`w-full h-full border-2 ${borderColor} bg-gradient-to-br ${bgLight} ${bgDark} shadow-lg rounded-xl`}>
                        <CardContent className="flex flex-col h-full p-5">
                            {/* Back title */}
                            <h4 className={`text-sm font-bold font-workflow mb-4 bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>
                                {title}
                            </h4>

                            {/* Detailed content */}
                            <div className="flex-1 flex items-center">
                                {backContent}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

// ============================================
// MAIN COMPONENT
// ============================================

export const HowIWorkSection = () => {
    const { t } = useLanguage();

    const flipCards = [
        {
            key: 'analyze',
            title: t('howiwork.analyze.title'),
            description: t('howiwork.analyze.description'),
            icon: Lightbulb,
            colorFrom: 'from-blue-500',
            colorTo: 'to-cyan-500',
            bgLight: 'from-blue-50 to-cyan-50',
            bgDark: 'dark:from-blue-950/30 dark:to-cyan-950/30',
            borderColor: 'border-blue-500/30',
            backContent: <AnalyzeBackContent />
        },
        {
            key: 'develop',
            title: t('howiwork.develop.title'),
            description: t('howiwork.develop.description'),
            icon: Code,
            colorFrom: 'from-indigo-500',
            colorTo: 'to-blue-600',
            bgLight: 'from-indigo-50 to-blue-50',
            bgDark: 'dark:from-indigo-950/30 dark:to-blue-950/30',
            borderColor: 'border-indigo-500/30',
            backContent: <DevelopBackContent />
        },
        {
            key: 'test',
            title: t('howiwork.test.title'),
            description: t('howiwork.test.description'),
            icon: TestTube,
            colorFrom: 'from-green-500',
            colorTo: 'to-emerald-500',
            bgLight: 'from-green-50 to-emerald-50',
            bgDark: 'dark:from-green-950/30 dark:to-emerald-950/30',
            borderColor: 'border-green-500/30',
            backContent: <TestBackContent />
        },
        {
            key: 'deploy',
            title: t('howiwork.deploy.title'),
            description: t('howiwork.deploy.description'),
            icon: Rocket,
            colorFrom: 'from-purple-500',
            colorTo: 'to-pink-500',
            bgLight: 'from-purple-50 to-pink-50',
            bgDark: 'dark:from-purple-950/30 dark:to-pink-950/30',
            borderColor: 'border-purple-500/30',
            backContent: <DeployBackContent />
        },
        {
            key: 'optimize',
            title: t('howiwork.optimize.title'),
            description: t('howiwork.optimize.description'),
            icon: RefreshCw,
            colorFrom: 'from-orange-500',
            colorTo: 'to-red-500',
            bgLight: 'from-orange-50 to-red-50',
            bgDark: 'dark:from-orange-950/30 dark:to-red-950/30',
            borderColor: 'border-orange-500/30',
            backContent: <OptimizeBackContent />
        },
        {
            key: 'collaborate',
            title: t('howiwork.collaborate.title'),
            description: t('howiwork.collaborate.description'),
            icon: Users,
            colorFrom: 'from-indigo-500',
            colorTo: 'to-purple-500',
            bgLight: 'from-indigo-50 to-purple-50',
            bgDark: 'dark:from-indigo-950/30 dark:to-purple-950/30',
            borderColor: 'border-indigo-500/30',
            backContent: <CollaborateBackContent />
        },
    ];

    return (
        <div id="howiwork">
            {/* LIGHT MODE - Badges + Stats Style */}
            <div className="text-center mb-12 dark:hidden">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-workflow tracking-tight">
                    {t('howiwork.title')}
                </h2>
                <p className="text-muted-foreground text-lg font-workflow mb-6">
                    {t('howiwork.subtitle')}
                </p>
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                    <Badge className="bg-orange-500/20 text-orange-700 border-orange-500/30 px-3 py-1.5 text-sm font-workflow">
                        🔥 6 Core Principles
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-700 border-green-500/30 px-3 py-1.5 text-sm font-workflow">
                        ✅ 100+ Projects
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-700 border-blue-500/30 px-3 py-1.5 text-sm font-workflow">
                        ⚡ Production Ready
                    </Badge>
                </div>
            </div>

            {/* DARK MODE - Terminal Style */}
            <div className="mb-12 hidden dark:block">
                <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-6 border border-green-500/30 shadow-lg shadow-green-500/5">
                    <div className="font-mono">
                        <div className="flex items-center gap-2 text-green-400 text-xl md:text-2xl font-bold mb-2">
                            <span className="text-green-500">&gt;</span>
                            <span>{t('howiwork.title')}</span>
                            <span className="w-3 h-6 bg-green-400 animate-pulse" />
                        </div>
                        <div className="text-green-300/70 text-sm md:text-base">
                            <span className="text-green-500">$</span> {t('howiwork.subtitle')}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flipCards.map((card) => (
                    <FlipCard
                        key={card.key}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        colorFrom={card.colorFrom}
                        colorTo={card.colorTo}
                        bgLight={card.bgLight}
                        bgDark={card.bgDark}
                        borderColor={card.borderColor}
                        hint={t('howiwork.hint')}
                        backContent={card.backContent}
                    />
                ))}
            </div>
        </div>
    );
};
