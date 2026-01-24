import { Card, CardContent } from "./ui/card";
import {
    Lightbulb, Code, TestTube, Rocket, RefreshCw, Users,
    CheckCircle, ArrowRight, Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LucideIcon } from "lucide-react";

// ============================================
// Card-specific detailed content components
// ============================================

const AnalyzeContent = () => (
    <div className="space-y-2 text-xs font-mono">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Requirements</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
            <span>Analysis</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Design</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
            <span>Architecture</span>
        </div>
    </div>
);

const DevelopContent = () => (
    <div className="bg-[#1e1e1e] rounded-lg p-3 font-mono text-[11px] text-white">
        <div className="text-purple-400">@Service</div>
        <div><span className="text-blue-400">public class</span> <span className="text-green-400">UserService</span> {'{'}</div>
        <div className="pl-2 text-gray-500">// SOLID principles ✓</div>
        <div>{'}'}</div>
    </div>
);

const TestContent = () => (
    <div className="space-y-1.5 text-xs">
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-3 w-3" />
            <span className="font-mono">shouldCreateUser</span>
        </div>
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-3 w-3" />
            <span className="font-mono">shouldValidate</span>
        </div>
        <div className="mt-2 text-muted-foreground">
            Coverage: <span className="font-bold text-green-600 dark:text-green-400 font-mono">95%</span>
        </div>
    </div>
);

const DeployContent = () => (
    <div className="bg-gray-900 rounded-lg p-3 font-mono text-[11px] space-y-1 text-white">
        <div className="text-gray-400">$ docker-compose up -d</div>
        <div className="text-green-400">✓ backend [HEALTHY]</div>
        <div className="text-green-400">✓ database [HEALTHY]</div>
    </div>
);

const OptimizeContent = () => (
    <div className="text-xs space-y-2">
        <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Replicas</span>
            <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                <Zap className="h-3 w-3" />
                <span className="font-mono font-bold">2 → 10</span>
            </div>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[75%]" />
        </div>
        <div className="text-muted-foreground text-[10px]">Trigger: CPU {'>'} 70%</div>
    </div>
);

const CollaborateContent = () => (
    <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="font-mono">feat: add auth</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="font-mono">test: coverage 95%</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-mono text-green-600 dark:text-green-400">merge → main ✓</span>
        </div>
    </div>
);

// ============================================
// Unified Card Component
// ============================================

interface HowIWorkCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    borderColor: string;
    detailedContent: React.ReactNode;
}

const HowIWorkCard = ({
    title,
    description,
    icon: Icon,
    color,
    borderColor,
    detailedContent
}: HowIWorkCardProps) => (
    <Card className={`
        h-[280px] md:h-[300px]
        flex flex-col
        border-2 ${borderColor}
        bg-card/80 backdrop-blur-sm
        rounded-xl overflow-hidden
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-2xl hover:z-10
        group cursor-pointer
    `}>
        <CardContent className="flex-1 flex flex-col p-6">
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} 
                           flex items-center justify-center mb-4 shadow-lg
                           group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-7 w-7 text-white" strokeWidth={2} />
            </div>

            {/* Title with gradient */}
            <h3 className={`text-xl font-bold font-heading mb-2 
                           bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                {title}
            </h3>

            {/* Short description - always visible */}
            <p className="text-sm text-muted-foreground line-clamp-2 flex-shrink-0">
                {description}
            </p>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Detailed content - hidden by default, shown on hover */}
            <div className="
                opacity-0 max-h-0 overflow-hidden
                group-hover:opacity-100 group-hover:max-h-[150px]
                transition-all duration-300 ease-out
                mt-auto pt-4
            ">
                {detailedContent}
            </div>
        </CardContent>
    </Card>
);

// ============================================
// Main Component - How I Work Section
// ============================================

export const HowIWorkSection = () => {
    const { t } = useLanguage();

    const workCards = [
        {
            key: 'analyze',
            title: t('howiwork.analyze.title'),
            description: t('howiwork.analyze.description'),
            icon: Lightbulb,
            color: 'from-blue-500 to-cyan-500',
            borderColor: 'border-blue-500/30 hover:border-blue-500/60',
            detailedContent: <AnalyzeContent />
        },
        {
            key: 'develop',
            title: t('howiwork.develop.title'),
            description: t('howiwork.develop.description'),
            icon: Code,
            color: 'from-blue-600 to-indigo-600',
            borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
            detailedContent: <DevelopContent />
        },
        {
            key: 'test',
            title: t('howiwork.test.title'),
            description: t('howiwork.test.description'),
            icon: TestTube,
            color: 'from-green-500 to-emerald-500',
            borderColor: 'border-green-500/30 hover:border-green-500/60',
            detailedContent: <TestContent />
        },
        {
            key: 'deploy',
            title: t('howiwork.deploy.title'),
            description: t('howiwork.deploy.description'),
            icon: Rocket,
            color: 'from-purple-500 to-pink-500',
            borderColor: 'border-purple-500/30 hover:border-purple-500/60',
            detailedContent: <DeployContent />
        },
        {
            key: 'optimize',
            title: t('howiwork.optimize.title'),
            description: t('howiwork.optimize.description'),
            icon: RefreshCw,
            color: 'from-orange-500 to-red-500',
            borderColor: 'border-orange-500/30 hover:border-orange-500/60',
            detailedContent: <OptimizeContent />
        },
        {
            key: 'collaborate',
            title: t('howiwork.collaborate.title'),
            description: t('howiwork.collaborate.description'),
            icon: Users,
            color: 'from-indigo-500 to-purple-500',
            borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
            detailedContent: <CollaborateContent />
        },
    ];

    return (
        <div id="howiwork">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading tracking-tight">
                    {t('howiwork.title')}
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
                <p className="text-muted-foreground text-lg font-sans">
                    {t('howiwork.subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {workCards.map((card) => (
                    <HowIWorkCard
                        key={card.key}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        color={card.color}
                        borderColor={card.borderColor}
                        detailedContent={card.detailedContent}
                    />
                ))}
            </div>
        </div>
    );
};
