import {
    Server, Database, Globe, Boxes, Shield, Cloud
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MonitoringPanel } from "./MonitoringPanel";
import { HowIWorkSection } from "./HowIWorkSection";
import { ExpertiseArea } from "@/types/expertise";

// Generate realistic monitoring data with more data points
const generateGraphData = (baseValue: number, variance: number, spike?: { position: number; height: number }) => {
    const times = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
    return times.map((time, idx) => {
        let value = baseValue + Math.random() * variance - variance / 2;
        // Add spike if specified (for Database Design card)
        if (spike && idx === spike.position) {
            value = spike.height;
        }
        return { time, value: Math.max(0, value) };
    });
};

const getExpertiseAreas = (t: (key: string) => string): ExpertiseArea[] => [
    {
        id: 'backend',
        icon: Server,
        title: t('expertise.backend.title'),
        description: t('expertise.backend.description'),
        color: "from-blue-500 to-cyan-500",
        accentColor: "#3b82f6",
        metrics: {
            primaryMetric: {
                label: "System Uptime",
                value: 99.9,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Avg Response", value: "82ms" },
                { label: "Peak Load", value: "98ms" }
            ],
            graphLabel: "Requests Per Second (RPS)",
            graphData: [
                { time: "00:00", value: 4500 },
                { time: "03:00", value: 3200 },
                { time: "06:00", value: 5100 },
                { time: "09:00", value: 6800 },
                { time: "12:00", value: 7200 },
                { time: "15:00", value: 6500 },
                { time: "18:00", value: 8100 },
                { time: "21:00", value: 5800 }
            ],
            status: "excellent"
        }
    },
    {
        id: 'database',
        icon: Database,
        title: t('expertise.database.title'),
        description: t('expertise.database.description'),
        color: "from-purple-500 to-pink-500",
        accentColor: "#a855f7",
        metrics: {
            primaryMetric: {
                label: "Performance Score",
                value: 98.5,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Avg Query", value: "45ms" },
                { label: "Max Connections", value: "150" }
            ],
            graphLabel: "Query Latency (ms)",
            graphData: [
                { time: "00:00", value: 25 },
                { time: "03:00", value: 30 },
                { time: "06:00", value: 28 },
                { time: "09:00", value: 35 },
                { time: "12:00", value: 245 }, // Spike!
                { time: "15:00", value: 40 },
                { time: "18:00", value: 32 },
                { time: "21:00", value: 28 }
            ],
            status: "excellent"
        }
    },
    {
        id: 'api',
        icon: Globe,
        title: t('expertise.api.title'),
        description: t('expertise.api.description'),
        color: "from-orange-500 to-red-500",
        accentColor: "#f97316",
        metrics: {
            primaryMetric: {
                label: "Response Time",
                value: 97.2,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Avg Response", value: "82ms" },
                { label: "Peak Load", value: "96ms" }
            ],
            graphLabel: "Average Response Time (ms)",
            graphData: [
                { time: "00:00", value: 75 },
                { time: "03:00", value: 85 },
                { time: "06:00", value: 80 },
                { time: "09:00", value: 120 },
                { time: "12:00", value: 150 },
                { time: "15:00", value: 110 },
                { time: "18:00", value: 95 },
                { time: "21:00", value: 85 }
            ],
            status: "excellent"
        }
    },
    {
        id: 'microservices',
        icon: Boxes,
        title: t('expertise.microservices.title'),
        description: t('expertise.microservices.description'),
        color: "from-green-500 to-emerald-500",
        accentColor: "#10b981",
        metrics: {
            primaryMetric: {
                label: "Overall Health",
                value: 100,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Active Services", value: "6/6" },
                { label: "Avg Latency", value: "35ms" }
            ],
            graphLabel: "Service Health Status",
            graphData: [
                { time: "00:00", value: 95 },
                { time: "03:00", value: 98 },
                { time: "06:00", value: 100 },
                { time: "09:00", value: 97 },
                { time: "12:00", value: 99 },
                { time: "15:00", value: 100 },
                { time: "18:00", value: 98 },
                { time: "21:00", value: 100 }
            ],
            status: "excellent"
        }
    },
    {
        id: 'security',
        icon: Shield,
        title: t('expertise.security.title'),
        description: t('expertise.security.description'),
        color: "from-indigo-500 to-purple-500",
        accentColor: "#6366f1",
        metrics: {
            primaryMetric: {
                label: "Auth Rate",
                value: 99.8,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Success Rate", value: "99.8%" },
                { label: "Failed Attempts", value: "0.2%" }
            ],
            graphLabel: "Authentication Rate",
            graphData: [
                { time: "00:00", value: 45 },
                { time: "03:00", value: 30 },
                { time: "06:00", value: 55 },
                { time: "09:00", value: 85 },
                { time: "12:00", value: 92 },
                { time: "15:00", value: 88 },
                { time: "18:00", value: 75 },
                { time: "21:00", value: 60 }
            ],
            status: "excellent"
        }
    },
    {
        id: 'devops',
        icon: Cloud,
        title: t('expertise.devops.title'),
        description: t('expertise.devops.description'),
        color: "from-pink-500 to-rose-500",
        accentColor: "#ec4899",
        metrics: {
            primaryMetric: {
                label: "Pipeline Success",
                value: 96.5,
                unit: "%"
            },
            additionalMetrics: [
                { label: "Deploy Frequency", value: "12/day" },
                { label: "Success Rate", value: "96.5%" }
            ],
            graphLabel: "Pipeline Success Rate",
            graphData: [
                { time: "00:00", value: 92 },
                { time: "03:00", value: 88 },
                { time: "06:00", value: 95 },
                { time: "09:00", value: 75 },
                { time: "12:00", value: 98 },
                { time: "15:00", value: 94 },
                { time: "18:00", value: 90 },
                { time: "21:00", value: 96 }
            ],
            status: "good"
        }
    },
];

export const ExpertiseSection = () => {
    const { t } = useLanguage();
    const expertiseAreas = getExpertiseAreas(t);

    return (
        <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Monitoring Dashboard Section */}
                    <div id="whatido" className="mb-20">
                        <div className="text-center mb-12">
                            {/* Grafana-style Dashboard Header */}
                            <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg mb-6">
                                {/* Top bar */}
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">📊</span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-workflow tracking-tight">
                                            {t('whatido.title')}
                                        </h2>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                        <span>{t('whatido.last_updated')}</span>
                                        <span className="text-foreground">{t('whatido.just_now')}</span>
                                    </div>
                                </div>

                                {/* Status bar */}
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-mono text-green-600 dark:text-green-400">{t('whatido.status')}</span>
                                    </div>
                                    <div className="h-4 w-px bg-border hidden sm:block" />
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                                        <span>{t('whatido.tracking')}</span>
                                        <span className="text-primary font-bold">6</span>
                                        <span>{t('whatido.areas')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monitoring Panels Grid - Equal Height Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                            {expertiseAreas.map((area, idx) => (
                                <MonitoringPanel
                                    key={area.id}
                                    title={area.title}
                                    description={area.description}
                                    icon={area.icon}
                                    color={area.color}
                                    accentColor={area.accentColor}
                                    metrics={area.metrics}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </div>

                    {/* How I Work Section - Themed Cards */}
                    <HowIWorkSection />
                </div>
            </div>
        </section>
    );
};
