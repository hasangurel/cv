import { Instagram, Play, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getStats = (t: (key: string) => string) => [
    {
        icon: Users,
        label: t('instagram.stats.followers'),
        value: t('instagram.stats.followers.value'),
    },
    {
        icon: Play,
        label: t('instagram.stats.content'),
        value: t('instagram.stats.content.value'),
    },
    {
        icon: BookOpen,
        label: t('instagram.stats.topic'),
        value: t('instagram.stats.topic.value'),
    },
];

const getTopics = (t: (key: string) => string) => [
    t('topic.java'),
    t('topic.spring'),
    t('topic.microservices'),
    t('topic.rest'),
    t('topic.patterns'),
    t('topic.clean'),
    t('topic.database'),
    t('topic.git'),
];

export const InstagramSection = () => {
    const { t } = useLanguage();
    const stats = getStats(t);
    const topics = getTopics(t);

    return (
        <section id="instagram" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center">
                            <Instagram className="h-6 w-6 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('instagram.title')}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mx-auto rounded-full" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        {t('instagram.subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {stats.map((stat, idx) => (
                            <Card key={idx} className="border-2 hover:border-primary/50 transition-all">
                                <CardContent className="pt-6 text-center">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mx-auto mb-3">
                                        <stat.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                                    <p className="font-semibold text-foreground">{stat.value}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Main Content Card */}
                    <Card className="border-2 hover:shadow-xl transition-all overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600" />
                        <CardContent className="p-8">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="hidden md:block">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center shadow-lg">
                                        <Instagram className="h-10 w-10 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                                        {t('instagram.username')}
                                        <Badge variant="secondary" className="gap-1">
                                            <TrendingUp className="h-3 w-3" />
                                            Active
                                        </Badge>
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {t('instagram.description')}
                                    </p>

                                    {/* Topics */}
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold text-foreground mb-3">
                                            {t('instagram.topics.title')}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {topics.map((topic, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="outline"
                                                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800"
                                                >
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full md:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <a
                                            href="https://www.instagram.com/mrhasangurel1/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gap-2"
                                        >
                                            <Instagram className="h-5 w-5" />
                                            {t('instagram.cta')}
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Bottom Note */}
                            <div className="mt-6 pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground text-center">
                                    {t('instagram.note')}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
