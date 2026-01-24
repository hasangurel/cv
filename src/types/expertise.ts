import { LucideIcon } from "lucide-react";

export interface ExpertiseArea {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    accentColor: string;
    metrics: {
        primaryMetric: {
            label: string;
            value: number;
            unit: string;
        };
        additionalMetrics: {
            label: string;
            value: string;
        }[];
        graphLabel: string;
        graphData: { time: string; value: number }[];
        status: 'excellent' | 'good' | 'normal';
    };
}
