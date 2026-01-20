import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.expertise': 'Expertise',
        'nav.timeline': 'Timeline',
        'nav.knowme': 'Get to Know Me',
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.instagram': 'Instagram',
        'nav.contact': 'Contact',

        // Instagram Section
        'instagram.title': 'Educational Content',
        'instagram.subtitle': 'I create educational content about software development on Instagram. Sharing practical knowledge about Java, Spring Boot, and backend technologies.',
        'instagram.stats.followers': 'Followers',
        'instagram.stats.followers.value': 'Active Community',
        'instagram.stats.content': 'Content',
        'instagram.stats.content.value': 'Educational Videos',
        'instagram.stats.topic': 'Topic',
        'instagram.stats.topic.value': 'Java & Backend',
        'instagram.username': '@mrhasangurel1',
        'instagram.description': 'Practical and understandable content for those who want to learn software development. I share educational videos on a wide range of topics from basic concepts to advanced topics.',
        'instagram.topics.title': 'Covered Topics:',
        'instagram.cta': 'Follow on Instagram',
        'instagram.note': '💡 I share new content every week. Stay tuned!',

        // Topics
        'topic.java': 'Java Fundamentals',
        'topic.spring': 'Spring Boot',
        'topic.microservices': 'Microservices',
        'topic.rest': 'REST API',
        'topic.patterns': 'Design Patterns',
        'topic.clean': 'Clean Code',
        'topic.database': 'Database',
        'topic.git': 'Git & GitHub',

        // Get to Know Me Section
        'knowme.title': 'Get to Know Me',
        'knowme.intro.title': 'Who is Hasan?',
        'knowme.intro.text': 'Hasan is a software developer and content creator who has transformed his passion for technology into his career and creativity. A graduate of Eskişehir Technical University Computer Engineering, Hasan has specialized in Java Backend Development with over 2 years of professional experience.',

        'knowme.journey.title': 'Professional Journey',
        'knowme.journey.text': 'With deep expertise in Spring Boot and microservices architecture, Hasan has hands-on experience with REST API development, authentication systems like JWT, OAuth2, and LDAP. While he has developed full-stack projects with Next.js, his true passion lies in backend development. IBM certifications and international internship experience in Dubai have enhanced not only his technical skills but also his global perspective.\n\nAt Workeb, as a FullStack Developer, he worked on user authorization systems, product management applications, and microservices architecture. He gained experience with various databases including PostgreSQL, MySQL, and MongoDB, and has knowledge of containerization with Docker and Kubernetes.',

        'knowme.creator.title': 'Content Creator Identity',
        'knowme.creator.text': 'Hasan is not just a developer who writes code, but also an educator who loves sharing knowledge. On his "Hasan ile..." YouTube channel, he creates content for Turkish audiences. He produces both YouTube Shorts and long-format videos on AI tools, web development tutorials, and technology education.\n\nWith series like "Websites That Will Really Help You," he aims to make complex technology topics understandable in simple Turkish. He also shares his thoughts on topics like AI\'s impact on software development careers and the future of developers. His goal is to make the technology world accessible to everyone.',

        'knowme.personality.title': 'Personality and Approach',
        'knowme.personality.text': 'What sets Hasan apart is his passion for continuous learning and diverse interests. While coding, he develops trading strategies, plays League of Legends, and tries to learn Japanese. This diversity fuels his creative problem-solving skills.\n\nHe has a goal-oriented yet realistic approach. He set a goal to produce 144 videos for 2026, makes weight loss plans, tries to deepen his knowledge in Java design patterns - but while doing all this, he constantly thinks "how can I optimize, how can I be more efficient?" Strategic planning and process improvement are his natural talents.\n\nHe has a sincere and genuine communication style. He can be professional when needed and relaxed when appropriate. He moves forward without taking everything too seriously but giving due care to everything he does.',

        'knowme.philosophy.title': 'Sharing Philosophy',
        'knowme.philosophy.text': 'For Hasan, teaching is as important as learning. He doesn\'t hoard knowledge but shares it. Every new technology he learns, every tool he discovers, every problem he solves is potential content material. This approach both keeps him constantly updated and enriches the Turkish technology content ecosystem.\n\nHe has a perfectionist side - constantly optimizing his CV, planning his content in detail, approaching every project to get the best results. But this perfectionism doesn\'t paralyze him; instead, it motivates him to be better.',

        'knowme.future.title': 'Present and Future',
        'knowme.future.text': 'Currently actively seeking new opportunities, Hasan is open to remote work and ready to participate in international projects. He aims to further develop himself in backend development and be part of large-scale projects.\n\nHe also continues his content creation journey at full speed. With the goals he set for 2026, he invests in both professional and personal development.\n\nHasan is someone who loves technology, is open to learning, enjoys sharing, and constantly improves himself. Not just a developer who writes code, but a professional who aims to be an active part of the technology ecosystem.',

        // What I Do Section
        'whatido.title': 'What I Do',
        'whatido.subtitle': 'Areas where I can add value to your projects with my backend development expertise',

        'expertise.backend.title': 'Backend Architecture',
        'expertise.backend.description': 'Designing scalable, maintainable backend systems using microservices architecture and modern design patterns.',

        'expertise.database.title': 'Database Design',
        'expertise.database.description': 'Expert in relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases, data modeling, and optimization.',

        'expertise.api.title': 'API Development',
        'expertise.api.description': 'Building robust RESTful APIs with comprehensive documentation, versioning, and best practices.',

        'expertise.microservices.title': 'Microservices',
        'expertise.microservices.description': 'Developing distributed systems with Spring Boot, service discovery, and inter-service communication.',

        'expertise.security.title': 'Security & Auth',
        'expertise.security.description': 'Implementing secure authentication and authorization with JWT, OAuth2, LDAP, and Spring Security.',

        'expertise.devops.title': 'DevOps & CI/CD',
        'expertise.devops.description': 'Containerization with Docker, deployment automation, and continuous integration pipelines.',

        // How I Work Section
        'howiwork.title': 'How I Work',
        'howiwork.subtitle': 'My systematic approach to building high-quality backend solutions',

        'howiwork.analyze.title': 'Analyze & Plan',
        'howiwork.analyze.description': 'Understanding requirements, identifying challenges, and creating a solid technical architecture plan.',

        'howiwork.develop.title': 'Clean Development',
        'howiwork.develop.description': 'Writing clean, maintainable code following SOLID principles and design patterns.',

        'howiwork.test.title': 'Test & Validate',
        'howiwork.test.description': 'Comprehensive testing with unit tests, integration tests, and ensuring code quality.',

        'howiwork.deploy.title': 'Deploy & Monitor',
        'howiwork.deploy.description': 'Smooth deployments with CI/CD pipelines and continuous monitoring of system health.',

        'howiwork.optimize.title': 'Optimize & Scale',
        'howiwork.optimize.description': 'Performance optimization, code refactoring, and ensuring scalability for growth.',

        'howiwork.collaborate.title': 'Collaborate & Grow',
        'howiwork.collaborate.description': 'Active communication with team members, code reviews, and continuous learning.',

        'howiwork.philosophy.title': 'My Development Philosophy',
        'howiwork.philosophy.description': 'I believe in writing code that not only works but is also clean, tested, and maintainable. Every line of code is an investment in the future. I prioritize quality over speed, but never compromise on delivery. Continuous learning and improvement are at the core of my development process.',

    },
    tr: {
        // Navigation
        'nav.about': 'Hakkımda',
        'nav.expertise': 'Uzmanlık',
        'nav.timeline': 'Zaman Çizelgesi',
        'nav.knowme': 'Hasan Kimdir?',
        'nav.education': 'Eğitim',
        'nav.projects': 'Projeler',
        'nav.instagram': 'Instagram',
        'nav.contact': 'İletişim',

        // Instagram Section
        'instagram.title': 'Eğitim İçerikleri',
        'instagram.subtitle': 'Instagram\'da yazılım dünyasına dair eğitim içerikleri üretiyorum. Java, Spring Boot ve backend teknolojileri hakkında pratik bilgiler paylaşıyorum.',
        'instagram.stats.followers': 'Takipçi',
        'instagram.stats.followers.value': 'Aktif Topluluk',
        'instagram.stats.content': 'İçerik',
        'instagram.stats.content.value': 'Eğitim Videoları',
        'instagram.stats.topic': 'Konu',
        'instagram.stats.topic.value': 'Java & Backend',
        'instagram.username': '@mrhasangurel1',
        'instagram.description': 'Yazılım öğrenmek isteyenler için pratik ve anlaşılır içerikler. Temel kavramlardan ileri seviye konulara kadar geniş bir yelpazede eğitim videoları paylaşıyorum.',
        'instagram.topics.title': 'Kapsanan Konular:',
        'instagram.cta': 'Instagram\'da Takip Et',
        'instagram.note': '💡 Her hafta yeni içerikler paylaşıyorum. Kaçırmamak için takipte kalın!',

        // Topics
        'topic.java': 'Java Temelleri',
        'topic.spring': 'Spring Boot',
        'topic.microservices': 'Mikroservisler',
        'topic.rest': 'REST API',
        'topic.patterns': 'Tasarım Kalıpları',
        'topic.clean': 'Temiz Kod',
        'topic.database': 'Veritabanı',
        'topic.git': 'Git & GitHub',

        // Get to Know Me Section
        'knowme.title': 'Hasan Kimdir?',
        'knowme.intro.title': 'Hasan Kimdir?',
        'knowme.intro.text': 'Hasan, teknoloji merakını kariyerine ve yaratıcılığına dönüştürmüş bir yazılım geliştiricisi ve içerik üreticisi. Eskişehir Teknik Üniversitesi Bilgisayar Mühendisliği mezunu olan Hasan, 2+ yıllık profesyonel deneyiminde Java Backend Development alanında uzmanlaşmış durumda.',

        'knowme.journey.title': 'Profesyonel Yolculuk',
        'knowme.journey.text': 'Spring Boot ve microservices mimarisi konusunda derinlemişmiş bir uzmanlığa sahip. REST API geliştirme, JWT, OAuth2 ve LDAP gibi authentication sistemleriyle çalışma deneyimi var. Full-stack tarafında Next.js ile de projeler geliştirmiş olsa da gerçek tutkusu backend development. IBM sertifikaları ve Dubai\'de yaptığı uluslararası staj deneyimi, onun sadece teknik becerilerini değil, global perspektifini de geliştirmiş.\n\nWorkeb\'de FullStack Developer olarak kullanıcı yetkilendirme sistemleri, ürün yönetim uygulamaları ve microservices mimarisi üzerinde çalıştı. PostgreSQL, MySQL, MongoDB gibi farklı veritabanlarıyla deneyim kazandı. Docker ve Kubernetes ile containerization konusunda da bilgi sahibi.',

        'knowme.creator.title': 'İçerik Üreticisi Kimliği',
        'knowme.creator.text': 'Hasan, sadece kod yazan bir geliştirici değil, aynı zamanda bilgiyi paylaşmayı seven bir eğitmen. "Hasan ile..." YouTube kanalında Türk kitleye hitap eden içerikler üretiyor. AI araçları, web development tutorialları ve teknoloji eğitimleri konusunda hem YouTube Shorts hem de uzun format videolar hazırlıyor.\n\n"Gerçekten İşinize Yarayacak Web Siteleri" gibi serilerle, karmaşık teknoloji konularını sade bir Türkçe ile anlaşılır kılmayı hedefliyor. AI\'ın yazılım geliştirme kariyerlerine etkisi, geliştiricilerin geleceği gibi konularda da düşüncelerini paylaşıyor. Amacı, teknoloji dünyasını herkes için erişilebilir kılmak.',

        'knowme.personality.title': 'Kişilik ve Yaklaşım',
        'knowme.personality.text': 'Hasan\'ı öne çıkaran şey, sürekli öğrenme tutkusu ve çok yönlü ilgi alanları. Kod yazarken bir yandan trading stratejileri geliştiriyor, bir yandan League of Legends oynuyor, bir yandan da Japonca öğrenmeye çalışıyor. Bu çeşitlilik, onun yaratıcı problem çözme becerisini besliyor.\n\nHedef odaklı ama aynı zamanda realist bir yaklaşımı var. 2026 için 144 video üretme hedefi koymuş, kilo verme planları yapıyor, Java design patterns konusunda derinleşmeye çalışıyor - ama tüm bunları yaparken sürekli "nasıl optimize edebilirim, nasıl daha verimli olabilirim" diye düşünüyor. Stratejik planlama ve süreç iyileştirme onun doğal yetenekleri.\n\nSamimi ve içten bir iletişim tarzı var. Profesyonel olması gerektiğinde profesyonel, rahat olması gerektiğinde rahat olabiliyor. Her şeyi çok ciddiye almadan ama aynı zamanda yaptığı her işe gereken özeni göstererek ilerliyor.',

        'knowme.philosophy.title': 'Paylaşma Felsefesi',
        'knowme.philosophy.text': 'Hasan için öğrenmek kadar öğretmek de önemli. Bilgiyi saklayan değil, paylaşan biri. Öğrendiği her yeni teknoloji, keşfettiği her araç, çözdüğü her problem potansiyel bir içerik malzemesi. Bu yaklaşım hem kendisinin sürekli güncel kalmasını sağlıyor hem de Türkçe teknoloji içerik ekosistemini zenginleştiriyor.\n\nMükemmeliyetçi bir tarafı da var - CV\'sini sürekli optimize ediyor, içeriklerini detaylı planlıyor, her projeye en iyi sonucu almak için yaklaşıyor. Ama bu mükemmeliyetçilik onu felç etmiyor, aksine daha iyi olmak için motive ediyor.',

        'knowme.future.title': 'Şimdi ve Gelecek',
        'knowme.future.text': 'Şu an aktif olarak yeni fırsatlar arayan Hasan, remote çalışmaya açık ve uluslararası projelerde yer almaya hazır. Backend development alanında kendini daha da geliştirmeyi, büyük ölçekli projelerde yer almayı hedefliyor.\n\nAynı zamanda içerik üretimi yolculuğuna da hız kesmeden devam ediyor. 2026 yılı için belirlediği hedeflerle hem profesyonel hem kişisel gelişimine yatırım yapıyor.\n\nHasan, teknolojiyi seven, öğrenmeye açık, paylaşmayı seven ve sürekli kendini geliştiren biri. Kod yazan bir geliştirici değil, teknoloji ekosisteminin aktif bir parçası olmayı hedefleyen bir profesyonel.',

        // What I Do Section
        'whatido.title': 'Neler Yapıyorum',
        'whatido.subtitle': 'Backend geliştirme uzmanlığımla projelerinize değer katabileceğim alanlar',

        'expertise.backend.title': 'Backend Mimarisi',
        'expertise.backend.description': 'Mikroservis mimarisi ve modern tasarım kalıpları kullanarak ölçeklenebilir, sürdürülebilir backend sistemleri tasarlıyorum.',

        'expertise.database.title': 'Veritabanı Tasarımı',
        'expertise.database.description': 'İlişkisel (PostgreSQL, MySQL) ve NoSQL (MongoDB) veritabanlarında uzmanım. Veri modelleme ve optimizasyon konularında deneyimliyim.',

        'expertise.api.title': 'API Geliştirme',
        'expertise.api.description': 'Kapsamlı dokümantasyon, versiyonlama ve en iyi uygulamalarla güçlü RESTful API\'ler geliştiriyorum.',

        'expertise.microservices.title': 'Mikroservisler',
        'expertise.microservices.description': 'Spring Boot ile dağıtık sistemler, servis keşfi ve servisler arası iletişim geliştiriyorum.',

        'expertise.security.title': 'Güvenlik & Yetkilendirme',
        'expertise.security.description': 'JWT, OAuth2, LDAP ve Spring Security ile güvenli kimlik doğrulama ve yetkilendirme sistemleri uyguluyorum.',

        'expertise.devops.title': 'DevOps & CI/CD',
        'expertise.devops.description': 'Docker ile konteynerizasyon, otomatik deployment ve sürekli entegrasyon pipeline\'ları kuruyorum.',

        // How I Work Section
        'howiwork.title': 'Nasıl Çalışıyorum',
        'howiwork.subtitle': 'Yüksek kaliteli backend çözümleri geliştirmek için sistematik yaklaşımım',

        'howiwork.analyze.title': 'Analiz & Planlama',
        'howiwork.analyze.description': 'Gereksinimleri anlama, zorlukları belirleme ve sağlam bir teknik mimari planı oluşturma.',

        'howiwork.develop.title': 'Temiz Geliştirme',
        'howiwork.develop.description': 'SOLID prensipleri ve tasarım kalıplarını takip ederek temiz, sürdürülebilir kod yazma.',

        'howiwork.test.title': 'Test & Doğrulama',
        'howiwork.test.description': 'Unit testler, entegrasyon testleri ile kapsamlı test yapma ve kod kalitesini sağlama.',

        'howiwork.deploy.title': 'Deploy & İzleme',
        'howiwork.deploy.description': 'CI/CD pipeline\'ları ile sorunsuz deployment\'lar ve sistem sağlığını sürekli izleme.',

        'howiwork.optimize.title': 'Optimize & Ölçeklendirme',
        'howiwork.optimize.description': 'Performans optimizasyonu, kod refactoring ve büyüme için ölçeklenebilirliği sağlama.',

        'howiwork.collaborate.title': 'İşbirliği & Gelişim',
        'howiwork.collaborate.description': 'Ekip üyeleriyle aktif iletişim, kod inceleme ve sürekli öğrenme.',

        'howiwork.philosophy.title': 'Geliştirme Felsefem',
        'howiwork.philosophy.description': 'Sadece çalışan değil, aynı zamanda temiz, test edilmiş ve sürdürülebilir kod yazmaya inanıyorum. Her kod satırı geleceğe bir yatırımdır. Kaliteyi hıza tercih ederim ama teslimat konusunda asla ödün vermem. Sürekli öğrenme ve gelişim, geliştirme sürecimin temelindedir.',
    },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
