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

// Custom Social Icons (since Lucide doesn't have all brand icons)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

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
      socialMedia: {
        title: "Follow Us",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      map: {
        title: "Find Us",
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
      socialMedia: {
        title: "تابعنا",
        linkedin: "لينكد إن",
        whatsapp: "واتساب",
        instagram: "إنستغرام",
        facebook: "فيسبوك",
      },
      map: {
        title: "اعثر علينا",
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
              className={`ml-10 flex items-baseline space-x-4 ${isRTL ? "space-x-reverse" : ""
                }`}
            >
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${activeSection === item.id
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
              className={`flex items-start group ${isRTL ? "space-x-reverse" : ""
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
                <p className="text-gray-600 leading-relaxed text-lg">
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
                  className={`flex items-center ${isRTL ? "space-x-reverse" : ""
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
// const ContactSection = ({
//   language,
//   formData,
//   onFormChange,
//   onFormSubmit,
//   onScrollToSection,
// }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {t.contact.title}
//           </h2>
//           <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               {t.contact.form.title}
//             </h3>
//             <form onSubmit={onFormSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   {t.contact.form.name} *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) =>
//                     onFormChange({ ...formData, name: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                   placeholder={t.contact.form.namePlaceholder}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   {t.contact.form.email} *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) =>
//                     onFormChange({ ...formData, email: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                   placeholder={t.contact.form.emailPlaceholder}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   {t.contact.form.company}
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.company}
//                   onChange={(e) =>
//                     onFormChange({ ...formData, company: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                   placeholder={t.contact.form.companyPlaceholder}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   {t.contact.form.message} *
//                 </label>
//                 <textarea
//                   required
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) =>
//                     onFormChange({ ...formData, message: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
//                   placeholder={t.contact.form.messagePlaceholder}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 {t.contact.form.sendMessage}
//               </button>
//             </form>
//             {/* Interactive Map */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 {t.contact.map.title}
//               </h3>
//               <div className="relative h-64 rounded-xl overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3926636536755!2d58.47841731498063!3d23.595857884681675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f7e1c5c5c5c5%3A0x5f5f5f5f5f5f5f5f!2sShatti%20Al%20Qurum%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="rounded-xl"
//                   title="Talent-In Location"
//                 ></iframe>
//                 <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
//                   <MapPin className="w-5 h-5 text-blue-600" />
//                 </div>
//               </div>
//               <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
//                 <p className="text-sm text-gray-600 mb-2">
//                   <span className="font-semibold text-gray-900">
//                     {t.contact.info.address}:
//                   </span>{" "}
//                   {t.contact.info.addressValue}
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   Click on the map to get directions
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 {t.contact.info.title}
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: Phone,
//                     label: t.contact.info.phone,
//                     value: "+968 97511711",
//                     gradient: "from-blue-500 to-cyan-500",
//                   },
//                   {
//                     icon: Mail,
//                     label: t.contact.info.email,
//                     value: "muaath@talent-in.com",
//                     gradient: "from-purple-500 to-pink-500",
//                   },
//                   {
//                     icon: MapPin,
//                     label: t.contact.info.address,
//                     value: t.contact.info.addressValue,
//                     gradient: "from-green-500 to-teal-500",
//                   },
//                   {
//                     icon: Globe,
//                     label: t.contact.info.website,
//                     value: t.contact.info.websiteValue,
//                     gradient: "from-orange-500 to-red-500",
//                   },
//                 ].map((item, index) => {
//                   const IconComponent = item.icon;
//                   return (
//                     <div
//                       key={index}
//                       className={`flex items-center ${
//                         isRTL ? "space-x-reverse" : ""
//                       } space-x-4`}
//                     >
//                       <div
//                         className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center`}
//                       >
//                         <IconComponent className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">
//                           {item.label}
//                         </p>
//                         <p className="text-gray-600">{item.value}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 {t.contact.socialMedia.title}
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   {
//                     icon: LinkedInIcon,
//                     label: t.contact.socialMedia.linkedin,
//                     url: "https://linkedin.com/",
//                     gradient: "from-blue-600 to-blue-700",
//                     hoverColor: "hover:text-blue-600",
//                   },
//                   {
//                     icon: WhatsAppIcon,
//                     label: t.contact.socialMedia.whatsapp,
//                     url: "https://wa.me/96897511711",
//                     gradient: "from-green-500 to-green-600",
//                     hoverColor: "hover:text-green-600",
//                   },
//                   {
//                     icon: InstagramIcon,
//                     label: t.contact.socialMedia.instagram,
//                     url: "https://instagram.com/",
//                     gradient: "from-pink-500 to-purple-600",
//                     hoverColor: "hover:text-pink-600",
//                   },
//                   {
//                     icon: FacebookIcon,
//                     label: t.contact.socialMedia.facebook,
//                     url: "https://facebook.com/",
//                     gradient: "from-blue-500 to-blue-600",
//                     hoverColor: "hover:text-blue-500",
//                   },
//                 ].map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group flex items-center p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <IconComponent />
//                         <span className="font-medium">{social.label}</span>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//               <h3 className="text-xl font-bold mb-4">{t.contact.cta.title}</h3>
//               <p className="mb-6 opacity-90">{t.contact.cta.description}</p>
//               <button
//                 onClick={() => onScrollToSection("home")}
//                 className={`flex items-center text-white hover:text-cyan-300 transition-colors duration-200 ${
//                   isRTL ? "space-x-reverse" : ""
//                 } space-x-2`}
//               >
//                 <span>{t.contact.cta.schedule}</span>
//                 <ArrowRight
//                   className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information */}
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
                      className={`flex items-center ${isRTL ? "space-x-reverse" : ""
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

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.socialMedia.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: LinkedInIcon,
                    label: t.contact.socialMedia.linkedin,
                    url: "https://linkedin.com/",
                    gradient: "from-blue-600 to-blue-700",
                    hoverColor: "hover:text-blue-600",
                  },
                  {
                    icon: WhatsAppIcon,
                    label: t.contact.socialMedia.whatsapp,
                    url: "https://wa.me/96897511711",
                    gradient: "from-green-500 to-green-600",
                    hoverColor: "hover:text-green-600",
                  },
                  {
                    icon: InstagramIcon,
                    label: t.contact.socialMedia.instagram,
                    url: "https://instagram.com/",
                    gradient: "from-pink-500 to-purple-600",
                    hoverColor: "hover:text-pink-600",
                  },
                  {
                    icon: FacebookIcon,
                    label: t.contact.socialMedia.facebook,
                    url: "https://facebook.com/",
                    gradient: "from-blue-500 to-blue-600",
                    hoverColor: "hover:text-blue-500",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent />
                        <span className="font-medium">{social.label}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.map.title}
              </h3>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3926636536755!2d58.47841731498063!3d23.595857884681675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f7e1c5c5c5c5%3A0x5f5f5f5f5f5f5f5f!2sShatti%20Al%20Qurum%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Talent-In Location"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">
                    {t.contact.info.address}:
                  </span>{" "}
                  {t.contact.info.addressValue} ( Click on the map to get directions )
                </p>
              </div>
            </div>

            {/* CTA with Image */}
            <div className=" h-60 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">{t.contact.cta.title}</h3>
                <p className="mb-6 opacity-90">{t.contact.cta.description}</p>
                <button
                  onClick={() => onScrollToSection("home")}
                  className={`flex items-center text-white hover:text-cyan-300 transition-colors duration-200 ${isRTL ? "space-x-reverse" : ""
                    } space-x-2`}
                >
                  <span>{t.contact.cta.schedule}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-full object-cover opacity-50">
                <img
                  src="/GCC-img-2.png"
                  alt="GCC"
                  className="w-full h-full object-cover rounded-bl-2xl"
                />
              </div>
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
