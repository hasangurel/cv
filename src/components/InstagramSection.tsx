import { Instagram, Play, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    containerVariants,
    cardVariants,
    iconFloatVariants,
    buttonVariants,
    tagVariants,
    statsCardVariants,
} from "@/lib/animations/variants";

const getStats = (t: (key: string) => string) => [
    {
        icon: Users,
        label: t("instagram.stats.followers"),
        value: t("instagram.stats.followers.value"),
    },
    {
        icon: Play,
        label: t("instagram.stats.content"),
        value: t("instagram.stats.content.value"),
    },
    {
        icon: BookOpen,
        label: t("instagram.stats.topic"),
        value: t("instagram.stats.topic.value"),
    },
];

const getTopics = (t: (key: string) => string) => [
    t("topic.java"),
    t("topic.spring"),
    t("topic.microservices"),
    t("topic.rest"),
    t("topic.patterns"),
    t("topic.clean"),
    t("topic.database"),
    t("topic.git"),
];

const socialMediaPlatforms = [
    {
        name: "Instagram",
        username: "@mrhasangurel1",
        url: "https://www.instagram.com/mrhasangurel1/",
        icon: Instagram,
        gradient: "from-purple-600 via-pink-600 to-orange-600",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
        description: "Java & Backend Development Tips",
    },
    {
        name: "TikTok",
        username: "@mrhasangureltiktok",
        url: "https://www.tiktok.com/@mrhasangureltiktok",
        icon: Play,
        gradient: "from-black via-gray-800 to-black",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]",
        description: "Quick Tech Tips & Code Snippets",
    },
    {
        name: "YouTube",
        username: "@hasangrl-34",
        url: "https://www.youtube.com/@hasangrl-34",
        icon: Play,
        gradient: "from-red-600 via-red-500 to-red-600",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]",
        description: "In-Depth Programming Tutorials",
    },
];

export const InstagramSection = () => {
    const { t } = useLanguage();
    const stats = getStats(t);
    const topics = getTopics(t);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            id="instagram"
            ref={sectionRef}
            className="py-20 relative overflow-hidden gradient-mesh-bg"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <motion.div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center glow-pulse"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Instagram className="h-8 w-8 text-white" />
                        </motion.div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                        Social Media
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto rounded-full mb-6" />

                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Follow me on social media for tech content, tutorials, and programming tips
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Stats Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} variants={statsCardVariants}>
                                <Card className="border-2 hover:border-primary/50 transition-all glassmorphism group">
                                    <CardContent className="pt-8 pb-6 text-center">
                                        <motion.div
                                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mx-auto mb-4"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <stat.icon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                                        </motion.div>
                                        <p className="text-sm text-muted-foreground mb-2 font-medium">
                                            {stat.label}
                                        </p>
                                        <p className="text-xl font-bold text-foreground">{stat.value}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Media Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-3 gap-8 mb-12"
                    >
                        {socialMediaPlatforms.map((platform, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <Card className="border-2 overflow-hidden group glassmorphism hover:border-transparent transition-all duration-300 relative">
                                    {/* Animated gradient border */}
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} opacity-20 blur-xl`} />
                                    </div>

                                    <div className={`h-2 bg-gradient-to-r ${platform.gradient} relative z-10`} />

                                    <CardContent className="p-8 relative z-10">
                                        <div className="text-center mb-6">
                                            <motion.div
                                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg mx-auto mb-4 ${platform.hoverGlow} transition-shadow duration-300`}
                                                variants={iconFloatVariants}
                                                initial="initial"
                                                whileHover="hover"
                                            >
                                                <platform.icon className="h-10 w-10 text-white" />
                                            </motion.div>

                                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                                {platform.name}
                                            </h3>

                                            <p className="text-sm text-muted-foreground mb-2 font-medium">
                                                {platform.username}
                                            </p>

                                            <p className="text-xs text-muted-foreground/80 mb-6 leading-relaxed">
                                                {platform.description}
                                            </p>
                                        </div>

                                        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                            <Button
                                                asChild
                                                className={`w-full bg-gradient-to-r ${platform.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base py-6`}
                                            >
                                                <a
                                                    href={platform.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="gap-2"
                                                >
                                                    <platform.icon className="h-5 w-5" />
                                                    Follow on {platform.name}
                                                </a>
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Topics Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Card className="border-2 glassmorphism">
                            <CardContent className="p-8">
                                <p className="text-base font-semibold text-foreground mb-6 text-center">
                                    {t("instagram.topics.title")}
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {topics.map((topic, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={tagVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            <Badge
                                                variant="outline"
                                                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800 px-4 py-2 text-sm font-medium cursor-pointer"
                                            >
                                                {topic}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
