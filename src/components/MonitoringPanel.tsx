import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect, memo } from "react";
import { Badge } from "./ui/badge";

interface MetricData {
    primaryMetric: {
        label: string;
        value: number;
        unit: string;
    };
    additionalMetrics: {
        label: string;
        value: string;
    }[];
    graphData: { time: string; value: number }[];
    graphLabel: string;
    status: 'excellent' | 'good' | 'normal';
}

interface MonitoringPanelProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    accentColor: string;
    metrics: MetricData;
    index: number;
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label, accentColor }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-popover/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
                <p className="text-xs text-muted-foreground mb-1 font-mono">{label}</p>
                <p className="text-sm font-bold font-mono tabular-nums" style={{ color: accentColor }}>
                    {payload[0].value.toFixed(0)}
                </p>
            </div>
        );
    }
    return null;
};

// Memoized Area Chart component
const MemoizedAreaChart = memo(({
    graphData,
    index,
    accentColor
}: {
    graphData: { time: string; value: number }[],
    index: number,
    accentColor: string
}) => (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={graphData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <defs>
                <linearGradient id={`areaGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={accentColor} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={accentColor} stopOpacity={0.05} />
                </linearGradient>
            </defs>
            <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={9}
                tickLine={false}
                axisLine={false}
                dy={5}
                interval="preserveStartEnd"
                fontFamily="JetBrains Mono, monospace"
            />
            <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={9}
                tickLine={false}
                axisLine={false}
                dx={-5}
                tickFormatter={(value) => `${value}`}
                width={35}
                fontFamily="JetBrains Mono, monospace"
            />
            <Tooltip content={<CustomTooltip accentColor={accentColor} />} />
            <Area
                type="monotone"
                dataKey="value"
                stroke={accentColor}
                strokeWidth={2}
                fill={`url(#areaGradient-${index})`}
                isAnimationActive={false}
            />
        </AreaChart>
    </ResponsiveContainer>
));

MemoizedAreaChart.displayName = 'MemoizedAreaChart';

export const MonitoringPanel = memo(({
    title,
    description,
    icon: Icon,
    color,
    accentColor,
    metrics,
    index
}: MonitoringPanelProps) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    // Animate progress bar on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValue(metrics.primaryMetric.value);
        }, 300 + index * 150);
        return () => clearTimeout(timer);
    }, [metrics.primaryMetric.value, index]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="will-change-transform h-full"
        >
            <Card
                className="flex flex-col h-full overflow-hidden border border-border/50 shadow-lg
                           hover:shadow-2xl hover:scale-[1.01] hover:border-primary/30
                           transition-all duration-300 ease-out will-change-transform
                           bg-card/80 backdrop-blur-sm rounded-xl"
            >
                {/* Header - Fixed height 72px */}
                <div className={`h-[72px] p-4 bg-gradient-to-r ${color} relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />

                    <div className="relative flex items-center justify-between h-full">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg flex-shrink-0">
                                <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                            </div>
                            {/* Title with heading font */}
                            <h3 className="text-white font-bold text-base tracking-tight uppercase truncate font-heading">
                                {title}
                            </h3>
                        </div>

                        {/* Fixed Badge - Visible in both light and dark mode */}
                        <Badge
                            className="text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wide
                                       bg-white/90 text-gray-900 
                                       dark:bg-white/20 dark:text-white 
                                       shadow-sm border-0 flex-shrink-0"
                        >
                            {metrics.status.toUpperCase()}
                        </Badge>
                    </div>
                </div>

                {/* Content - Flex-1 to fill remaining space */}
                <CardContent className="flex-1 flex flex-col p-5">
                    {/* Graph Label - Fixed height 24px with mono font */}
                    <p className="text-xs font-medium text-muted-foreground h-[24px] flex-shrink-0 truncate font-mono uppercase tracking-wider">
                        {metrics.graphLabel}
                    </p>

                    {/* Area Chart - Fixed height 120px mobile, 140px desktop */}
                    <div className="h-[120px] md:h-[140px] mt-2 flex-shrink-0">
                        <MemoizedAreaChart
                            graphData={metrics.graphData}
                            index={index}
                            accentColor={accentColor}
                        />
                    </div>

                    {/* Primary Metric with Progress Bar - Fixed height 56px */}
                    <div className="h-[56px] mt-4 flex-shrink-0">
                        <div
                            className="flex items-center justify-between text-sm px-3 py-2 rounded-lg"
                            style={{ backgroundColor: `${accentColor}15` }}
                        >
                            {/* Label with accent color */}
                            <span className="font-medium text-xs font-sans" style={{ color: accentColor }}>
                                {metrics.primaryMetric.label}
                            </span>
                            {/* Value with mono font and tabular-nums */}
                            <span className="font-bold text-lg text-foreground font-mono tabular-nums">
                                {animatedValue.toFixed(1)}{metrics.primaryMetric.unit}
                            </span>
                        </div>
                        <div className="relative h-2 rounded-full overflow-hidden bg-muted mt-2">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{ backgroundColor: accentColor }}
                                initial={{ width: 0 }}
                                animate={{ width: `${animatedValue}%` }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            />
                        </div>
                    </div>

                    {/* Description - Fixed height 72px with line-clamp-4 */}
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4 h-[72px] line-clamp-4 flex-shrink-0 font-sans">
                        {description}
                    </p>

                    {/* Additional Metrics - Fixed height 64px, ALWAYS VISIBLE */}
                    <div className="h-[64px] mt-4 flex items-center text-xs bg-muted/40 rounded-lg p-3 flex-shrink-0">
                        <div className="flex-1 min-w-0">
                            {/* Label with sans font */}
                            <div className="text-muted-foreground mb-1 truncate font-sans">
                                {metrics.additionalMetrics[0]?.label}
                            </div>
                            {/* Value with mono font */}
                            <div className="text-foreground font-semibold truncate font-mono tabular-nums">
                                {metrics.additionalMetrics[0]?.value}
                            </div>
                        </div>

                        {metrics.additionalMetrics[1] && (
                            <>
                                <div className="h-10 w-px bg-border mx-3 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-muted-foreground mb-1 truncate font-sans">
                                        {metrics.additionalMetrics[1].label}
                                    </div>
                                    <div className="text-foreground font-semibold truncate font-mono tabular-nums">
                                        {metrics.additionalMetrics[1].value}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
});

MonitoringPanel.displayName = 'MonitoringPanel';
