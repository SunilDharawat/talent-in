import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  Target,
  Award,
  Brain,
  Search,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  MapPin,
  Globe,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Languages,
} from "lucide-react";

// Translations
const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      methodology: "Methodology",
      whyUs: "Why Us",
      contact: "Contact",
    },
    hero: {
      unlock: "Unlock",
      potential: "Potential",
      build: "Build",
      success: "Success",
      description:
        "Dynamic talent acquisition firm specializing in executive search and people development for the GCC market. We empower organizations through innovative solutions in leadership coaching, strategic hiring, and advanced psychometric tools.",
      getStarted: "Get Started",
      ourServices: "Our Services",
    },
    about: {
      title: "About Talent-In",
      subtitle: "Committed to Unlocking Full Potential",
      description1:
        "Talent-In is a dynamic and forward-thinking talent acquisition firm specializing in executive search and people development. Committed to unlocking the full potential of both individuals and organizations, we focus on empowering GCC market through innovative solutions in leadership and career coaching, strategic hiring, and advanced psychometric tools.",
      description2:
        "We unlock growth by placing top talent where they make the most impact, ensuring seamless alignment between exceptional candidates and organizational success.",
      trustedBy: "Trusted by leading GCC organizations",
      values: {
        precision: "Precision Matching",
        excellence: "Excellence Driven",
        trust: "Trust & Integrity",
        innovation: "AI Innovation",
      },
    },
    services: {
      title: "Our Services",
      subtitle:
        "Comprehensive talent solutions designed to drive organizational success in the GCC market",
      items: [
        {
          title: "Executive Search & Talent Acquisition",
          description:
            "We specialize in sourcing top industry talent through tailored headhunting strategies, with a commitment to trust, confidentiality, and integrity.",
        },
        {
          title: "Leadership and Career Coaching",
          description:
            "We provide personalized coaching to enhance leadership skills, support career planning, and foster long-term professional growth.",
        },
        {
          title: "People Advisory & Compliance",
          description:
            "We ensure compliance with Oman labor laws while managing employee relations through fair grievance handling and transparent conflict resolution.",
        },
        {
          title: "Smart Hiring: Behavioral Insights & AI Integration",
          description:
            "We utilize advanced assessments and AI-driven tools to evaluate candidate personality, skills, and potential, ensuring accurate role fit, faster hiring, and reduced bias.",
        },
      ],
    },
    methodology: {
      title: "Our Methodology",
      subtitle:
        "A holistic approach to talent management that combines expertise, innovation, and personalized fit-to-purpose",
      steps: [
        {
          title: "Discovery & Client Onboarding",
          description:
            "Talent In handles client onboarding by understanding organizational culture, role expectations, and leadership challenges, while defining clear deliverables and KPIs.",
        },
        {
          title: "Market Research & Talent Mapping",
          description:
            "We perform market analysis to identify target sectors and talent pools, develops longlists of candidates through databases, networking and referrals.",
        },
        {
          title: "Outreach & Engagement",
          description:
            "Engages potential candidates confidentially and conducts preliminary screenings to assess skills, values and career goals.",
        },
        {
          title: "Evaluation & Selection",
          description:
            "We conduct comprehensive interviews and assessments, presents shortlisted candidates with detailed evaluation reports.",
        },
      ],
    },
    whyUs: {
      title: "Why Partner with Talent-In?",
      subtitle: "We Don't Just Fill Positions - We Build Success",
      description1:
        "At Talent In, we go beyond recruitment to connect you with exceptional talent that propels your organization's growth. Our bespoke search strategies, advanced assessment tools and deep market expertise ensure every placement aligns seamlessly with your business requirements.",
      description2:
        "Guided by trust, confidentiality and proven results, we partner with you to build teams that inspire success.",
      features: [
        "Bespoke search strategies tailored to your needs",
        "Advanced assessment tools and AI integration",
        "Deep GCC market expertise and networks",
        "Proven track record of successful placements",
      ],
      excellence: "Excellence in Every Placement",
      stats: {
        satisfaction: "Client Satisfaction",
        market: "Market Focus",
        support: "Support",
        powered: "Powered",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to unlock your organization's potential? Let's start the conversation.",
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        message: "Message",
        namePlaceholder: "Enter your full name",
        emailPlaceholder: "Enter your email address",
        companyPlaceholder: "Enter your company name",
        messagePlaceholder: "Tell us about your requirements...",
        sendMessage: "Send Message",
        successMessage:
          "Thank you for your message! We will get back to you soon.",
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        address: "Address",
        website: "Website",
        addressValue: "Shatti Al Qurum, Muscat, Oman",
        websiteValue: "www.talent-in.com",
      },
      cta: {
        title: "Ready to Transform Your Team?",
        description:
          "Let's discuss how we can help you find the perfect talent for your organization's success.",
        schedule: "Schedule a Consultation",
      },
    },
    footer: {
      description:
        "Empowering GCC organizations through innovative talent acquisition and people development solutions.",
      location: "Based in Muscat, Oman - Serving the GCC Region",
      quickLinks: "Quick Links",
      services: "Our Services",
      copyright: "© 2025 Talent-In. All rights reserved. | Muscat, Oman",
      developedBy: "Developed by",
      link: "https://sysassist.co/",
      address: "SysAssist IT Solutions, Indore, India",
      servicesList: [
        "Executive Search",
        "Leadership Coaching",
        "People Advisory",
        "AI-Powered Hiring",
      ],
    },
    imageSlider: {
      empowering: "Empowering GCC Organizations",
    },
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      methodology: "منهجيتنا",
      whyUs: "لماذا نحن",
      contact: "تواصل معنا",
    },
    hero: {
      unlock: "اكتشف",
      potential: "الإمكانات",
      build: "ابني",
      success: "النجاح",
      description:
        "شركة ديناميكية لاكتساب المواهب متخصصة في البحث التنفيذي وتطوير الأشخاص لسوق دول مجلس التعاون الخليجي. نمكن المؤسسات من خلال حلول مبتكرة في التدريب القيادي والتوظيف الاستراتيجي والأدوات النفسية المتقدمة.",
      getStarted: "ابدأ الآن",
      ourServices: "خدماتنا",
    },
    about: {
      title: "حول تالنت-إن",
      subtitle: "ملتزمون بإطلاق الإمكانات الكاملة",
      description1:
        "تالنت-إن هي شركة ديناميكية ومتطلعة للمستقبل لاكتساب المواهب متخصصة في البحث التنفيذي وتطوير الأشخاص. ملتزمون بإطلاق الإمكانات الكاملة للأفراد والمؤسسات على حد سواء، نركز على تمكين سوق دول مجلس التعاون الخليجي من خلال حلول مبتكرة في القيادة والتدريب المهني والتوظيف الاستراتيجي والأدوات النفسية المتقدمة.",
      description2:
        "نفتح النمو من خلال وضع أفضل المواهب حيث تحدث أكبر تأثير، مما يضمن التوافق السلس بين المرشحين الاستثنائيين ونجاح المؤسسة.",
      trustedBy: "موثوقة من قبل المؤسسات الرائدة في دول مجلس التعاون الخليجي",
      values: {
        precision: "المطابقة الدقيقة",
        excellence: "مدفوع بالتميز",
        trust: "الثقة والنزاهة",
        innovation: "الابتكار بالذكاء الاصطناعي",
      },
    },
    services: {
      title: "خدماتنا",
      subtitle:
        "حلول مواهب شاملة مصممة لدفع النجاح التنظيمي في سوق دول مجلس التعاون الخليجي",
      items: [
        {
          title: "البحث التنفيذي واكتساب المواهب",
          description:
            "نتخصص في توفير أفضل مواهب الصناعة من خلال استراتيجيات البحث المخصصة، مع الالتزام بالثقة والسرية والنزاهة.",
        },
        {
          title: "التدريب القيادي والمهني",
          description:
            "نقدم تدريبًا شخصيًا لتعزيز المهارات القيادية ودعم التخطيط المهني وتعزيز النمو المهني طويل الأمد.",
        },
        {
          title: "الاستشارات الشخصية والامتثال",
          description:
            "نضمن الامتثال لقوانين العمل العمانية مع إدارة علاقات الموظفين من خلال التعامل العادل مع الشكاوى وحل النزاعات الشفاف.",
        },
        {
          title: "التوظيف الذكي: الرؤى السلوكية وتكامل الذكاء الاصطناعي",
          description:
            "نستخدم التقييمات المتقدمة والأدوات المدفوعة بالذكاء الاصطناعي لتقييم شخصية المرشح ومهاراته وإمكاناته، مما يضمن الملاءمة الدقيقة للدور والتوظيف الأسرع وتقليل التحيز.",
        },
      ],
    },
    methodology: {
      title: "منهجيتنا",
      subtitle:
        "نهج شامل لإدارة المواهب يجمع بين الخبرة والابتكار والملاءمة الشخصية للغرض",
      steps: [
        {
          title: "الاستكشاف وإعداد العميل",
          description:
            "تتعامل تالنت إن مع إعداد العميل من خلال فهم الثقافة التنظيمية وتوقعات الدور والتحديات القيادية، مع تحديد المخرجات ومؤشرات الأداء الرئيسية الواضحة.",
        },
        {
          title: "بحوث السوق ورسم خرائط المواهب",
          description:
            "نقوم بتحليل السوق لتحديد القطاعات المستهدفة ومجموعات المواهب، ونطور قوائم طويلة من المرشحين من خلال قواعد البيانات والشبكات والإحالات.",
        },
        {
          title: "التواصل والمشاركة",
          description:
            "يشرك المرشحين المحتملين بسرية ويجري فحصًا أوليًا لتقييم المهارات والقيم والأهداف المهنية.",
        },
        {
          title: "التقييم والاختيار",
          description:
            "نقوم بإجراء مقابلات وتقييمات شاملة، ونقدم المرشحين المدرجين في القائمة المختصرة مع تقارير تقييم مفصلة.",
        },
      ],
    },
    whyUs: {
      title: "لماذا الشراكة مع تالنت-إن؟",
      subtitle: "نحن لا نملأ المناصب فقط - نحن نبني النجاح",
      description1:
        "في تالنت إن، نتجاوز التوظيف لنربطك بالمواهب الاستثنائية التي تدفع نمو مؤسستك. استراتيجيات البحث المخصصة لدينا وأدوات التقييم المتقدمة والخبرة العميقة في السوق تضمن أن كل تعيين يتماشى بسلاسة مع متطلبات عملك.",
      description2:
        "بتوجيه من الثقة والسرية والنتائج المثبتة، نتشارك معك لبناء فرق تلهم النجاح.",
      features: [
        "استراتيجيات بحث مخصصة مصممة لاحتياجاتك",
        "أدوات تقييم متقدمة وتكامل الذكاء الاصطناعي",
        "خبرة عميقة في السوق والشبكات في دول مجلس التعاون الخليجي",
        "سجل حافل مثبت من التعيينات الناجحة",
      ],
      excellence: "التميز في كل تعيين",
      stats: {
        satisfaction: "رضا العملاء",
        market: "التركيز على السوق",
        support: "الدعم",
        powered: "مدعوم",
      },
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "مستعد لإطلاق إمكانات مؤسستك؟ دعنا نبدأ المحادثة.",
      form: {
        title: "أرسل لنا رسالة",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        company: "الشركة",
        message: "الرسالة",
        namePlaceholder: "أدخل اسمك الكامل",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        companyPlaceholder: "أدخل اسم شركتك",
        messagePlaceholder: "أخبرنا عن متطلباتك...",
        sendMessage: "إرسال الرسالة",
        successMessage: "شكرًا لك على رسالتك! سنعود إليك قريبًا.",
      },
      info: {
        title: "معلومات الاتصال",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        website: "الموقع الإلكتروني",
        addressValue: "شاطئ القرم، مسقط، عُمان",
        websiteValue: "www.talent-in.com",
      },
      cta: {
        title: "مستعد لتحويل فريقك؟",
        description:
          "دعنا نناقش كيف يمكننا مساعدتك في العثور على المواهب المثالية لنجاح مؤسستك.",
        schedule: "جدولة استشارة",
      },
    },
    footer: {
      description:
        "تمكين منظمات دول مجلس التعاون الخليجي من خلال حلول اكتساب المواهب المبتكرة وتطوير الأشخاص.",
      location: "مقرها في مسقط، عُمان - تخدم منطقة دول مجلس التعاون الخليجي",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      copyright: "© 2025 تالنت-إن. جميع الحقوق محفوظة. | مسقط، عُمان",
      developedBy: "تم تطويره بواسطة",
      link: "https://sysassist.co/",
      address: "سيستم أسيست لتقنية المعلومات، إندور، الهند",
      servicesList: [
        "البحث التنفيذي",
        "التدريب القيادي",
        "الاستشارات الشخصية",
        "التوظيف بالذكاء الاصطناعي",
      ],
    },
    imageSlider: {
      empowering: "تمكين منظمات دول مجلس التعاون الخليجي",
    },
  },
};

// Image Slider Component
const ImageSlider = ({ language }) => {
  const images = [
    "/GCC-img.png",
    "/GCC-img-1.png",
    "/GCC-img-2.png",
    "/GCC-img-3.png",
    "/GCC-img-4.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const t = translations[language];

  return (
    <div className="relative">
      <div
        className="w-full h-96 rounded-2xl flex items-center justify-center bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      />
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse" />
      <div className="text-center drop-shadow-lg mt-4">
        <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t.imageSlider.empowering}
        </p>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({
  language,
  isMenuOpen,
  activeSection,
  onToggleLanguage,
  onToggleMenu,
  onScrollToSection,
}) => {
  const t = translations[language];
  const isRTL = language === "ar";

  const navigationItems = [
    { label: t.navigation.home, id: "home" },
    { label: t.navigation.about, id: "about" },
    { label: t.navigation.services, id: "services" },
    { label: t.navigation.methodology, id: "methodology" },
    { label: t.navigation.whyUs, id: "why-us" },
    { label: t.navigation.contact, id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Talentin_Logo.jpg"
              alt="Talent-In Logo"
              className="h-10 rounded-lg object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className={`ml-10 flex items-baseline space-x-4 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Languages className="w-4 h-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={onToggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ language, onScrollToSection }) => {
  const t = translations[language];

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.unlock}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {t.hero.potential}
              </span>
              <br />
              {t.hero.build}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                {t.hero.success}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onScrollToSection("contact")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {t.hero.getStarted}
              </button>
              <button
                onClick={() => onScrollToSection("services")}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {t.hero.ourServices}
              </button>
            </div>
          </div>
          <ImageSlider language={language} />
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ language }) => {
  const t = translations[language];

  const values = [
    {
      icon: Target,
      title: t.about.values.precision,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: t.about.values.excellence,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: t.about.values.trust,
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Brain,
      title: t.about.values.innovation,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.about.subtitle}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.description2}
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-gray-700">{t.about.trustedBy}</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mx-auto mb-3`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {value.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = ({ language }) => {
  const t = translations[language];

  const services = [
    { icon: Search, gradient: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, gradient: "from-purple-500 to-pink-500" },
    { icon: Shield, gradient: "from-green-500 to-teal-500" },
    { icon: Brain, gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const IconComponent = services[index].icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${services[index].gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Methodology Section Component
const MethodologySection = ({ language }) => {
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.methodology.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.methodology.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
        </div>

        <div className="space-y-8">
          {t.methodology.steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start group ${
                isRTL ? "space-x-reverse" : ""
              } space-x-6`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Us Section Component
const WhyUsSection = ({ language }) => {
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.whyUs.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t.whyUs.subtitle}</h3>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              {t.whyUs.description1}
            </p>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              {t.whyUs.description2}
            </p>
            <div className="space-y-4">
              {t.whyUs.features.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    isRTL ? "space-x-reverse" : ""
                  } space-x-3`}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold">{t.whyUs.excellence}</h4>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm opacity-80">
                    {t.whyUs.stats.satisfaction}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    GCC
                  </div>
                  <div className="text-sm opacity-80">
                    {t.whyUs.stats.market}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm opacity-80">
                    {t.whyUs.stats.support}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    AI
                  </div>
                  <div className="text-sm opacity-80">
                    {t.whyUs.stats.powered}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({
  language,
  formData,
  onFormChange,
  onFormSubmit,
  onScrollToSection,
}) => {
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.contact.form.title}
            </h3>
            <form onSubmit={onFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    onFormChange({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    onFormChange({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    onFormChange({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder={t.contact.form.companyPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    onFormChange({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {t.contact.form.sendMessage}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: t.contact.info.phone,
                    value: "+968 97511711",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Mail,
                    label: t.contact.info.email,
                    value: "muaath@talent-in.com",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: MapPin,
                    label: t.contact.info.address,
                    value: t.contact.info.addressValue,
                    gradient: "from-green-500 to-teal-500",
                  },
                  {
                    icon: Globe,
                    label: t.contact.info.website,
                    value: t.contact.info.websiteValue,
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center ${
                        isRTL ? "space-x-reverse" : ""
                      } space-x-4`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.label}
                        </p>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{t.contact.cta.title}</h3>
              <p className="mb-6 opacity-90">{t.contact.cta.description}</p>
              <button
                onClick={() => onScrollToSection("home")}
                className={`flex items-center text-white hover:text-cyan-300 transition-colors duration-200 ${
                  isRTL ? "space-x-reverse" : ""
                } space-x-2`}
              >
                <span>{t.contact.cta.schedule}</span>
                <ArrowRight
                  className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const FooterSection = ({ language, onScrollToSection }) => {
  const t = translations[language];

  const quickLinks = [
    { name: t.navigation.about, id: "about" },
    { name: t.navigation.services, id: "services" },
    { name: t.navigation.methodology, id: "methodology" },
    { name: t.navigation.contact, id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/Talentin_Logo.jpg"
              alt="Talent-In Logo"
              className="h-10 rounded-lg object-cover mb-4"
            />
            <p className="text-gray-400 mb-4">{t.footer.description}</p>
            <p className="text-gray-400">{t.footer.location}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onScrollToSection(link.id)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <div className="space-y-2 text-gray-400">
              {t.footer.servicesList.map((service, index) => (
                <p key={index}>{service}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 text-sm">
            {t.footer.developedBy}{" "}
            <a
              href={t.footer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-100 hover:underline"
            >
              {t.footer.address}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Component
export const TalentInWebsite = () => {
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const isRTL = language === "ar";

  // Set document direction and language
  useEffect(() => {
    document.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "methodology",
        "why-us",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(translations[language].contact.form.successMessage);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? "font-arabic" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Navigation
        language={language}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        onToggleLanguage={toggleLanguage}
        onToggleMenu={toggleMenu}
        onScrollToSection={scrollToSection}
      />

      <HeroSection language={language} onScrollToSection={scrollToSection} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <MethodologySection language={language} />
      <WhyUsSection language={language} />
      <ContactSection
        language={language}
        formData={formData}
        onFormChange={setFormData}
        onFormSubmit={handleFormSubmit}
        onScrollToSection={scrollToSection}
      />
      <FooterSection language={language} onScrollToSection={scrollToSection} />
    </div>
  );
};

export default TalentInWebsite;
