// import React, { useState, useEffect } from "react";
// import {
//   ChevronDown,
//   Users,
//   Target,
//   Award,
//   Brain,
//   Search,
//   TrendingUp,
//   Shield,
//   Phone,
//   Mail,
//   MapPin,
//   Globe,
//   Menu,
//   X,
//   CheckCircle,
//   ArrowRight,
//   Languages,
//   User,
//   Building,
//   Heart,
//   Lightbulb,
//   UserCheck,
//   FileCheck,
//   GraduationCap,
//   Clock,
// } from "lucide-react";

// // Custom Social Icons
// const LinkedInIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

// const WhatsAppIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
//   </svg>
// );

// // Translations
// const translations = {
//   en: {
//     navigation: {
//       home: "Home",
//       ourSolutions: "Our Solutions",
//       // methodology: "Methodology",
//       about: "About Us",
//       whyUs: "Why Us",
//       contact: "Contact",
//     },
//     hero: {
//       howCanWeHelp: "How Can We Help?",
//       subtitle:
//         "Empowering individuals and organizations through expert talent solutions and strategic leadership development.",
//       ourSolutions: "Our Solutions",
//     },
//     about: {
//       title: "About Us",
//       subtitle: "Committed to Unlocking Full Potential",
//       description1:
//         "Talent In is a dynamic and forward-thinking talent acquisition firm specializing in executive search and people development. Committed to unlocking the full potential of both individuals and organizations, we focus on empowering Oman market through innovative solutions in leadership and career coaching, strategic hiring, and advanced psychometric tools.",
//       description2:
//         "We unlock growth by placing top talent where they make the most impact, ensuring seamless alignment between exceptional candidates and organizational success.",
//       trustedBy: "Trusted by leading Oman organizations",
//     },
//     solutions: {
//       title: "Our Solutions",
//       subtitle: "What We Do",
//       forYou: "For You",
//       forCorporate: "For Corporate",
//       forYouServices: {
//         careerCounselling: {
//           title: "Career Counselling",
//           description:
//             "Personalized guidance to help you navigate your career path, identify strengths, and make informed decisions for professional growth and fulfillment.",
//         },
//         coaching: {
//           title: "Executive & Leadership Coaching",
//           description:
//             "Personalized coaching sessions aimed at strengthening leadership skills, building executive presence, and driving accelerated career growth.",
//         },
//       },
//       forCorporateServices: {
//         executiveSearch: {
//           title: "Executive Search & Talent Acquisition",
//           description:
//             "We specialize in sourcing top industry talent through tailored headhunting strategies, with a commitment to trust, confidentiality, and integrity.",
//         },
//         coaching: {
//           title: "Executive & Leadership Coaching",
//           description:
//             "We provide personalized coaching to enhance leadership skills, support career planning, and foster long-term professional growth.",
//         },
//         compliance: {
//           title: "Oman Labor Law Compliance",
//           description:
//             "We ensure compliance with Oman labor laws while managing employee relations through fair grievance management and transparent conflict resolution.",
//         },
//         succession: {
//           title: "Succession Planning",
//           description:
//             "It is our business continuity approach that involves identifying organizational talent and developing successors for key business-critical roles.",
//         },
//         advisory: {
//           title: "People & Culture Advisory",
//           description:
//             "Comprehensive advisory services to build strong organizational culture, improve employee engagement, and enhance best practices in Human Resources. ",
//         },
//       },
//     },
//     // methodology: {
//     //   title: "Our Methodology",
//     //   subtitle:
//     //     "A holistic approach to talent management that combines expertise, innovation, and personalized fit-to-purpose",
//     //   steps: [
//     //     {
//     //       title: "Discovery & Client Onboarding",
//     //       description:
//     //         "Talent In handles client onboarding by understanding organizational culture, role expectations, and leadership challenges, while defining clear deliverables and KPIs.",
//     //     },
//     //     {
//     //       title: "Market Research & Talent Mapping",
//     //       description:
//     //         "We perform market analysis to identify target sectors and talent pools, develops longlists of candidates through databases, networking and referrals.",
//     //     },
//     //     {
//     //       title: "Outreach & Engagement",
//     //       description:
//     //         "Engages potential candidates confidentially and conducts preliminary screenings to assess skills, values and career goals.",
//     //     },
//     //     {
//     //       title: "Evaluation & Selection",
//     //       description:
//     //         "We conduct comprehensive interviews and assessments, presents shortlisted candidates with detailed evaluation reports.",
//     //     },
//     //   ],
//     // },
//     whyUs: {
//       title: "Why Partner with Talent In?",
//       subtitle: "We Don’t Just Provide Solutions– We Create an Impact",
//       description1:
//         "At Talent In, we go beyond recruitment to deliver holistic people solutions that drive sustainable growth. From identifying and nurturing top talent to strengthening leadership capabilities, preparing future leaders, ensuring regulatory alignment, and fostering thriving workplace cultures, we empower both organizations and professionals to realize their true potential.",
//       description2:
//         "Guided by trust, expertise, and a proven track record, we ensure the right strategies, people, and culture come together to build long-term excellence.",
//       features: [
//         "Bespoke strategies that strengthen people and performance",
//         "Practical solutions for evolving workforce needs",
//         "Deep Oman market expertise and networks",
//         "Advanced assessment tools",
//       ],
//       excellence: "Excellence in Every Placement",
//       stats: {
//         satisfaction: "Ethical",
//         market: "Market Focus",
//         support: "Years expertise",
//         powered: "Best International Practices",
//       },
//     },
//     contact: {
//       title: "Get In Touch",
//       subtitle:
//         "Ready to unlock your organization's potential? Let's start the conversation.",
//       form: {
//         title: "Send Us a Message",
//         name: "Full Name",
//         email: "Email Address",
//         company: "Company",
//         message: "Message",
//         namePlaceholder: "Enter your full name",
//         emailPlaceholder: "Enter your email address",
//         companyPlaceholder: "Enter your company name",
//         messagePlaceholder: "Tell us about your requirements...",
//         sendMessage: "Send Message",
//         successMessage:
//           "Thank you for your message! We will get back to you soon.",
//       },
//       info: {
//         title: "Contact Information",
//         phone: "Phone",
//         email: "Email",
//         address: "Address",
//         website: "Website",
//         addressValue: "Shatti Al Qurum, Muscat, Oman",
//         websiteValue: "www.talent-in.com",
//       },
//       socialMedia: {
//         title: "Social Media",
//         linkedin: "LinkedIn",
//         whatsapp: "WhatsApp",
//       },
//       map: {
//         title: "Find Us",
//       },
//     },
//     footer: {
//       description:
//         "Empowering Oman organizations through innovative talent acquisition and people development solutions.",
//       location: "Based in Muscat, Oman - Serving the GCC Region",
//       quickLinks: "Quick Links",
//       services: "Our Solutions",
//       copyright: "© 2025 Talent In. All rights reserved. | Muscat, Oman",
//       developedBy: "Developed by",
//       link: "https://sysassist.co/",
//       address: "SysAssist IT Solutions, Indore, India",
//       servicesList: [
//         "Executive Search",
//         "Leadership Coaching",
//         "People Advisory",
//         "Succession Planning",
//       ],
//     },
//     imageSlider: {
//       empowering: "Empowering Oman Organizations",
//     },
//   },
//   ar: {
//     navigation: {
//       home: "الرئيسية",
//       ourSolutions: "حلولنا",
//       // methodology: "منهجيتنا",
//       about: "من نحن",
//       whyUs: "لماذا نحن",
//       contact: "تواصل معنا",
//     },
//     hero: {
//       howCanWeHelp: "كيف يمكننا مساعدتك؟",
//       subtitle:
//         "تمكين الأفراد والمؤسسات من خلال حلول المواهب المتخصصة وتطوير القيادة الاستراتيجية.",
//       ourSolutions: "حلولنا",
//     },
//     about: {
//       title: "من نحن",
//       subtitle: "ملتزمون بإطلاق الإمكانات الكاملة",
//       description1:
//         "تالنت-إن هي شركة ديناميكية ومتطلعة للمستقبل لاكتساب المواهب متخصصة في البحث التنفيذي وتطوير الأشخاص. ملتزمون بإطلاق الإمكانات الكاملة للأفراد والمؤسسات على حد سواء، نركز على تمكين سوق عمان من خلال حلول مبتكرة في القيادة والتدريب المهني والتوظيف الاستراتيجي والأدوات النفسية المتقدمة.",
//       description2:
//         "نفتح النمو من خلال وضع أفضل المواهب حيث تحدث أكبر تأثير، مما يضمن التوافق السلس بين المرشحين الاستثنائيين ونجاح المؤسسة.",
//       trustedBy: "موثوقة من قبل المؤسسات الرائدة في عمان",
//     },
//     solutions: {
//       title: "حلولنا",
//       subtitle: "ما نقدمه",
//       forYou: "لك",
//       forCorporate: "للشركات",
//       forYouServices: {
//         careerCounselling: {
//           title: "الإرشاد المهني",
//           description:
//             "توجيه شخصي لمساعدتك في التنقل في مسارك المهني وتحديد نقاط القوة واتخاذ قرارات مدروسة للنمو المهني والإشباع.",
//         },
//         coaching: {
//           title: "التدريب التنفيذي والقيادي",
//           description:
//             "جلسات تدريب فردية مصممة لتعزيز قدراتك القيادية وتطوير الحضور التنفيذي وتسريع تقدمك المهني.",
//         },
//       },
//       forCorporateServices: {
//         executiveSearch: {
//           title: "البحث التنفيذي واكتساب المواهب",
//           description:
//             "نحن نتخصص في استقطاب أفضل الكفاءات في السوق العُماني من خلال استراتيجيات استهداف مخصصة، مع التزام تام بالثقة والسرية والنزاهة",
//         },
//         coaching: {
//           title: "التدريب التنفيذي والقيادي",
//           description:
//             "نقدم تدريبًا شخصيًا لتعزيز المهارات القيادية ودعم التخطيط المهني وتعزيز النمو المهني طويل الأمد.",
//         },
//         compliance: {
//           title: "الامتثال لقانون العمل العماني",
//           description:
//             "نضمن الامتثال لقوانين العمل العمانية مع إدارة علاقات الموظفين من خلال التعامل العادل مع الشكاوى وحل النزاعات الشفاف.",
//         },
//         succession: {
//           title: "تخطيط الخلافة",
//           description:
//             "التخطيط الاستراتيجي لتحديد وتطوير القادة المستقبليين داخل مؤسستك، مما يضمن استمرارية الأعمال والنمو المستدام.",
//         },
//         advisory: {
//           title: "استشارات الأشخاص والثقافة",
//           description:
//             "خدمات استشارية شاملة لبناء ثقافة تنظيمية قوية وتحسين مشاركة الموظفين وتحسين عمليات الموارد البشرية.",
//         },
//       },
//     },
//     // methodology: {
//     //   title: "منهجيتنا",
//     //   subtitle:
//     //     "نهج شامل لإدارة المواهب يجمع بين الخبرة والابتكار والملاءمة الشخصية للغرض",
//     //   steps: [
//     //     {
//     //       title: "الاستكشاف وإعداد العميل",
//     //       description:
//     //         "تتعامل تالنت إن مع إعداد العميل من خلال فهم الثقافة التنظيمية وتوقعات الدور والتحديات القيادية، مع تحديد المخرجات ومؤشرات الأداء الرئيسية الواضحة.",
//     //     },
//     //     {
//     //       title: "بحوث السوق ورسم خرائط المواهب",
//     //       description:
//     //         "نقوم بتحليل السوق لتحديد القطاعات المستهدفة ومجموعات المواهب، ونطور قوائم طويلة من المرشحين من خلال قواعد البيانات والشبكات والإحالات.",
//     //     },
//     //     {
//     //       title: "التواصل والمشاركة",
//     //       description:
//     //         "يشرك المرشحين المحتملين بسرية ويجري فحصًا أوليًا لتقييم المهارات والقيم والأهداف المهنية.",
//     //     },
//     //     {
//     //       title: "التقييم والاختيار",
//     //       description:
//     //         "نقوم بإجراء مقابلات وتقييمات شاملة، ونقدم المرشحين المدرجين في القائمة المختصرة مع تقارير تقييم مفصلة.",
//     //     },
//     //   ],
//     // },
//     whyUs: {
//       title: "لماذا الشراكة مع تالنت-إن؟",
//       subtitle: "نحن لا نملأ المناصب فقط - نحن نبني النجاح",
//       description1:
//         "في تالنت إن، نتجاوز التوظيف لنربطك بالمواهب الاستثنائية التي تدفع نمو مؤسستك. استراتيجيات البحث المخصصة لدينا وأدوات التقييم المتقدمة والخبرة العميقة في السوق تضمن أن كل تعيين يتماشى بسلاسة مع متطلبات عملك.",
//       description2:
//         "بتوجيه من الثقة والسرية والنتائج المثبتة، نتشارك معك لبناء فرق تلهم النجاح.",
//       features: [
//         "استراتيجيات بحث مخصصة مصممة لاحتياجاتك",
//         "أدوات تقييم متقدمة",
//         "خبرة عميقة في السوق والشبكات في عمان",
//         "سجل حافل مثبت من التعيينات الناجحة",
//       ],
//       excellence: "التميز في كل تعيين",
//       stats: {
//         satisfaction: "رضا العملاء",
//         market: "التركيز على السوق",
//         support: "الدعم",
//         powered: "مدعوم",
//       },
//     },
//     contact: {
//       title: "تواصل معنا",
//       subtitle: "مستعد لإطلاق إمكانات مؤسستك؟ دعنا نبدأ المحادثة.",
//       form: {
//         title: "أرسل لنا رسالة",
//         name: "الاسم الكامل",
//         email: "البريد الإلكتروني",
//         company: "الشركة",
//         message: "الرسالة",
//         namePlaceholder: "أدخل اسمك الكامل",
//         emailPlaceholder: "أدخل بريدك الإلكتروني",
//         companyPlaceholder: "أدخل اسم شركتك",
//         messagePlaceholder: "أخبرنا عن متطلباتك...",
//         sendMessage: "إرسال الرسالة",
//         successMessage: "شكرًا لك على رسالتك! سنعود إليك قريبًا.",
//       },
//       info: {
//         title: "معلومات الاتصال",
//         phone: "الهاتف",
//         email: "البريد الإلكتروني",
//         address: "العنوان",
//         website: "الموقع الإلكتروني",
//         addressValue: "شاطئ القرم، مسقط، عُمان",
//         websiteValue: "www.talent-in.com",
//       },
//       socialMedia: {
//         title: "تابعنا",
//         linkedin: "لينكد إن",
//         whatsapp: "واتساب",
//       },
//       map: {
//         title: "اعثر علينا",
//       },
//     },
//     footer: {
//       description:
//         "تمكين منظمات عمان من خلال حلول اكتساب المواهب المبتكرة وتطوير الأشخاص.",
//       location: "مقرها في مسقط، عُمان - تخدم منطقة دول مجلس التعاون الخليجي",
//       quickLinks: "روابط سريعة",
//       services: "حلولنا",
//       copyright: "© 2025 تالنت-إن. جميع الحقوق محفوظة. | مسقط، عُمان",
//       developedBy: "تم تطويره بواسطة",
//       link: "https://sysassist.co/",
//       address: "سيستم أسيست لتقنية المعلومات، إندور، الهند",
//       servicesList: [
//         "البحث التنفيذي",
//         "التدريب القيادي",
//         "الاستشارات الشخصية",
//         "تخطيط الخلافة",
//       ],
//     },
//     imageSlider: {
//       empowering: "تمكين منظمات عمان",
//     },
//   },
// };

// const ImageSlider = ({ language }) => {
//   const images = [
//     "/GCC-img.png",
//     "/GCC-img-1.png",
//     "/GCC-img-2.png",
//     "/GCC-img-3.png",
//     "/GCC-img-4.png",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Preload all images
//   useEffect(() => {
//     images.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const t = translations[language];

//   return (
//     <div className="relative">
//       <div
//         className="w-full h-60 md:h-96 lg:h-96 rounded-2xl flex items-center justify-center bg-cover bg-center transition-all duration-1000"
//         style={{ backgroundImage: `url('${images[currentIndex]}')` }}
//       />
//       <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
//       <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse" />
//       <div className="text-center drop-shadow-lg mt-4">
//         <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           {t.imageSlider.empowering}
//         </p>
//       </div>
//     </div>
//   );
// };

// const Navigation = ({
//   language,
//   isMenuOpen,
//   activeSection,
//   onToggleLanguage,
//   onToggleMenu,
//   onScrollToSection,
// }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";

//   const navigationItems = [
//     { label: t.navigation.home, id: "home" },
//     { label: t.navigation.ourSolutions, id: "solutions" },
//     // { label: t.navigation.methodology, id: "methodology" },
//     { label: t.navigation.about, id: "about" },
//     { label: t.navigation.whyUs, id: "why-us" },
//     { label: t.navigation.contact, id: "contact" },
//   ];

//   return (
//     <nav className="fixed w-full bg-white/99 00f423 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-18">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="/Talentin_Logo.jpg"
//               alt="Talent In Logo"
//               className="h-18 rounded-lg object-cover"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div
//               className={`ml-10 flex items-baseline space-x-4 ${
//                 isRTL ? "space-x-reverse" : ""
//               }`}
//             >
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => onScrollToSection(item.id)}
//                   className={`px-3 py-2 text-md font-bold transition-colors duration-200 cursor-pointer ${
//                     activeSection === item.id
//                       ? "text-blue-600 border-b-2 border-blue-600"
//                       : "text-gray-700 hover:text-blue-600"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Language Toggle & Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={onToggleLanguage}
//               className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//             >
//               <Languages className="w-4 h-4" />
//               <span>{language === "en" ? "العربية" : "English"}</span>
//             </button>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={onToggleMenu}
//                 className="text-gray-700 hover:text-blue-600"
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navigationItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => onScrollToSection(item.id)}
//                 className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// // Hero Section Component - Redesigned
// const HeroSection = ({ language, onScrollToSection }) => {
//   const t = translations[language];

//   return (
//     <section
//       id="home"
//       className="pt-16 min-h-screen flex items-center bg-cover bg-center relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/GCC-img.png')`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
//         <div className="animate-fade-in-up">
//           <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//             {t.hero.howCanWeHelp}
//           </h1>
//           <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
//             {t.hero.subtitle}
//           </p>
//           <div className="flex justify-center">
//             <button
//               onClick={() => onScrollToSection("solutions")}
//               className="px-8 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//             >
//               {t.hero.ourSolutions}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Solutions Section Component - Redesigned
// const SolutionsSection = ({ language }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";
//   const [activeTab, setActiveTab] = useState("forCorporate");
//   const [expandedService, setExpandedService] = useState(null);

//   const toggleService = (serviceKey) => {
//     setExpandedService(expandedService === serviceKey ? null : serviceKey);
//   };

//   const forYouServices = [
//     {
//       key: "careerCounselling",
//       icon: GraduationCap,
//       title: t.solutions.forYouServices.careerCounselling.title,
//       description: t.solutions.forYouServices.careerCounselling.description,
//       gradient: "from-pink-500 to-rose-500",
//     },
//     {
//       key: "coaching",
//       icon: TrendingUp,
//       title: t.solutions.forYouServices.coaching.title,
//       description: t.solutions.forYouServices.coaching.description,
//       gradient: "from-purple-500 to-indigo-500",
//     },
//   ];

//   const forCorporateServices = [
//     {
//       key: "executiveSearch",
//       icon: Search,
//       title: t.solutions.forCorporateServices.executiveSearch.title,
//       description: t.solutions.forCorporateServices.executiveSearch.description,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       key: "coaching",
//       icon: TrendingUp,
//       title: t.solutions.forCorporateServices.coaching.title,
//       description: t.solutions.forCorporateServices.coaching.description,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       key: "compliance",
//       icon: Shield,
//       title: t.solutions.forCorporateServices.compliance.title,
//       description: t.solutions.forCorporateServices.compliance.description,
//       gradient: "from-green-500 to-teal-500",
//     },
//     {
//       key: "succession",
//       icon: Users,
//       title: t.solutions.forCorporateServices.succession.title,
//       description: t.solutions.forCorporateServices.succession.description,
//       gradient: "from-orange-500 to-amber-500",
//     },
//     {
//       key: "advisory",
//       icon: Lightbulb,
//       title: t.solutions.forCorporateServices.advisory.title,
//       description: t.solutions.forCorporateServices.advisory.description,
//       gradient: "from-violet-500 to-purple-500",
//     },
//   ];

//   return (
//     <section id="solutions" className="py-20 bg-amber-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {t.solutions.title}
//           </h2>
//           <h3 className="text-2xl font-semibold text-gray-700 mb-8">
//             {t.solutions.subtitle}
//           </h3>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="flex bg-white rounded-full p-2 shadow-lg">
//             <button
//               onClick={() => setActiveTab("forCorporate")}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ml-2 cursor-pointer ${
//                 activeTab === "forCorporate"
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               <Building className="w-5 h-5" />
//               <span>{t.solutions.forCorporate}</span>
//             </button>
//             <button
//               onClick={() => setActiveTab("forYou")}
//               className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
//                 activeTab === "forYou"
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               <User className="w-5 h-5" />
//               <span>{t.solutions.forYou}</span>
//             </button>
//           </div>
//         </div>

//         {/* Services Content */}
//         <div className="max-w-4xl mx-auto">
//           {activeTab === "forYou" && (
//             <div className="space-y-4">
//               {forYouServices.map((service) => {
//                 const IconComponent = service.icon;
//                 const isExpanded = expandedService === service.key;

//                 return (
//                   <div
//                     key={service.key}
//                     className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//                   >
//                     <button
//                       onClick={() => toggleService(service.key)}
//                       className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div
//                           className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}
//                         >
//                           <IconComponent className="w-6 h-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           {service.title}
//                         </h3>
//                       </div>
//                       <ChevronDown
//                         className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
//                           isExpanded ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {isExpanded && (
//                       <div className="px-6 pb-6 pt-0">
//                         <p className="text-gray-600 leading-relaxed ml-16">
//                           {service.description}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {activeTab === "forCorporate" && (
//             <div className="space-y-4">
//               {forCorporateServices.map((service) => {
//                 const IconComponent = service.icon;
//                 const isExpanded = expandedService === service.key;

//                 return (
//                   <div
//                     key={service.key}
//                     className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//                   >
//                     <button
//                       onClick={() => toggleService(service.key)}
//                       className="w-full cursor-pointer p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div
//                           className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}
//                         >
//                           <IconComponent className="w-6 h-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">
//                           {service.title}
//                         </h3>
//                       </div>
//                       <ChevronDown
//                         className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
//                           isExpanded ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {isExpanded && (
//                       <div className="px-6 pb-6 pt-0">
//                         <p className="text-gray-600 leading-relaxed ml-16">
//                           {service.description}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // About Section Component
// const AboutSection = ({ language }) => {
//   const t = translations[language];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {t.about.title}
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               {t.about.subtitle}
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               {t.about.description1}
//             </p>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               {t.about.description2}
//             </p>
//             <div className="flex items-center space-x-4">
//               <CheckCircle className="w-6 h-6 text-green-500" />
//               <span className="text-gray-700">{t.about.trustedBy}</span>
//             </div>
//           </div>

//           <div className="relative">
//             <ImageSlider language={language} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Methodology Section Component
// // const MethodologySection = ({ language }) => {
// //   const t = translations[language];
// //   const isRTL = language === "ar";

// //   return (
// //     <section id="methodology" className="py-20 bg-amber-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             {t.methodology.title}
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             {t.methodology.subtitle}
// //           </p>
// //           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
// //         </div>

// //         <div className="space-y-8">
// //           {t.methodology.steps.map((step, index) => (
// //             <div
// //               key={index}
// //               className={`flex items-start group ${
// //                 isRTL ? "space-x-reverse" : ""
// //               } space-x-6`}
// //             >
// //               <div className="flex-shrink-0">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
// //                   {String(index + 1).padStart(2, "0")}
// //                 </div>
// //               </div>
// //               <div className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow duration-300">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// //                   {step.title}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed text-lg">
// //                   {step.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // Why Us Section Component
// const WhyUsSection = ({ language }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";

//   return (
//     <section
//       id="why-us"
//       className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">{t.whyUs.title}</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold mb-6">{t.whyUs.subtitle}</h3>
//             <p className="text-lg mb-6 leading-relaxed opacity-90">
//               {t.whyUs.description1}
//             </p>
//             <p className="text-lg mb-8 leading-relaxed opacity-90">
//               {t.whyUs.description2}
//             </p>
//             <div className="space-y-4">
//               {t.whyUs.features.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center ${
//                     isRTL ? "space-x-reverse" : ""
//                   } space-x-3`}
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Circle Diagram */}
//           <div className="relative w-full flex justify-center items-center min-h-[400px]">
//             {/* Outer Circular Container */}
//             <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-white/20 flex items-center justify-center">
//               {/* Center Logo Circle */}
//               <div className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
//                 <img
//                   src="/Talentin_Logo.jpg"
//                   alt="Talent In Logo"
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>

//               {/* Top Item - Ethical */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">Ethical</p>
//                 </div>
//               </div>

//               {/* Right Item - Oman Market */}
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <MapPin className="w-5 h-5 text-pink-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">
//                     <span className="font-bold">Oman</span> Market Focus
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Item - 20+ Years */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">
//                     <span className="font-bold">20+</span> Years Expertise
//                   </p>
//                 </div>
//               </div>

//               {/* Left Item - Best Practices */}
//               <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <Globe className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white text-sm">
//                     Best International Practices
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactSection = ({ language, onScrollToSection }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";

//   return (
//     <section id="contact" className="py-20 bg-amber-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {t.contact.title}
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left Column */}
//           <div className="space-y-8">
//             {/* Contact Information */}
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
//                     link: "mailto:muaath@talent-in.com",
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
//                     link: t.contact.info.websiteValue.startsWith("http")
//                       ? t.contact.info.websiteValue
//                       : `https://talent-in.netlify.app/`,
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
//                         {item.link ? (
//                           <a
//                             href={item.link}
//                             target={item.icon === Globe ? "_blank" : "_self"}
//                             rel="noopener noreferrer"
//                             className="text-blue-600 hover:underline"
//                           >
//                             {item.value}
//                           </a>
//                         ) : (
//                           <p className="text-gray-600">{item.value}</p>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {/* Social Media Links */}
//                 {/* <div className="bg-white rounded-2xl p-8 shadow-lg"> */}
//                 <h3 className="text-xl font-bold text-gray-900 ">
//                   {t.contact.socialMedia.title}
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     {
//                       icon: LinkedInIcon,
//                       label: t.contact.socialMedia.linkedin,
//                       url: "https://www.linkedin.com/company/talent-in-om/",
//                       gradient: "from-blue-600 to-blue-700",
//                       hoverColor: "hover:text-blue-600",
//                     },
//                     {
//                       icon: WhatsAppIcon,
//                       label: t.contact.socialMedia.whatsapp,
//                       url: "http://wa.me/96897511711",
//                       gradient: "from-green-500 to-green-600",
//                       hoverColor: "hover:text-green-600",
//                     },
//                   ].map((social, index) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <a
//                         key={index}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`group flex items-center p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
//                       >
//                         <div className="flex items-center space-x-3">
//                           <IconComponent />
//                           <span className="font-medium">{social.label}</span>
//                         </div>
//                       </a>
//                     );
//                   })}
//                   {/* </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* Interactive Map */}
//             <div className="bg-white rounded-2xl p-4 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 {t.contact.map.title}
//               </h3>
//               <div className="relative h-90 rounded-xl overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3926636536755!2d58.47841731498063!3d23.595857884681675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f7e1c5c5c5c5%3A0x5f5f5f5f5f5f5f5f!2sShatti%20Al%20Qurum%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="rounded-xl"
//                   title="Talent In Location"
//                 ></iframe>
//                 <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg">
//                   <MapPin className="w-5 h-5 text-blue-600" />
//                 </div>
//               </div>
//               <div className="mt-4 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
//                 <p className="text-sm text-gray-600 mb-2">
//                   <span className="font-semibold text-gray-900">
//                     {t.contact.info.address}:
//                   </span>{" "}
//                   {t.contact.info.addressValue} ( Click on the map to get
//                   directions )
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer Component
// const FooterSection = ({ language, onScrollToSection }) => {
//   const t = translations[language];

//   const quickLinks = [
//     { name: t.navigation.ourSolutions, id: "solutions" },
//     // { name: t.navigation.methodology, id: "methodology" },
//     { name: t.navigation.about, id: "about" },
//     { name: t.navigation.whyUs, id: "why-us" },
//     { name: t.navigation.contact, id: "contact" },
//   ];

//   return (
//     <footer className="bg-gray-950 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <img
//               src="/Talentin_Logo.jpg"
//               alt="Talent In Logo"
//               className="h-16 rounded-lg object-cover mb-4"
//             />
//             <p className="text-gray-400 mb-4">{t.footer.description}</p>
//             <p className="text-gray-400">{t.footer.location}</p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">
//               {t.footer.quickLinks}
//             </h4>
//             <div className="space-y-2">
//               {quickLinks.map((link) => (
//                 <button
//                   key={link.name}
//                   onClick={() => onScrollToSection(link.id)}
//                   className="block text-gray-400 hover:text-white transition-colors duration-200"
//                 >
//                   {link.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
//             <div className="space-y-2 text-gray-400">
//               {t.footer.servicesList.map((service, index) => (
//                 <p key={index}>{service}</p>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-between border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>{t.footer.copyright}</p>
//           <p className="mt-2 text-sm">
//             {t.footer.developedBy}{" "}
//             <a
//               href={t.footer.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-semibold text-blue-100 hover:underline"
//             >
//               {t.footer.address}
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Main Component
// export const TalentInWebsite = () => {
//   const [language, setLanguage] = useState("en");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const isRTL = language === "ar";

//   // Set document direction and language
//   useEffect(() => {
//     document.dir = isRTL ? "rtl" : "ltr";
//     document.documentElement.lang = language;
//   }, [language, isRTL]);

//   // Handle scroll to update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         "home",
//         "solutions",
//         // "methodology",
//         "about",
//         "why-us",
//         "contact",
//       ];
//       const currentSection = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handlers
//   const toggleLanguage = () => {
//     setLanguage(language === "en" ? "ar" : "en");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <div
//       className={`min-h-screen bg-amber-50 ${isRTL ? "font-arabic" : ""}`}
//       dir={isRTL ? "rtl" : "ltr"}
//     >
//       <Navigation
//         language={language}
//         isMenuOpen={isMenuOpen}
//         activeSection={activeSection}
//         onToggleLanguage={toggleLanguage}
//         onToggleMenu={toggleMenu}
//         onScrollToSection={scrollToSection}
//       />

//       <HeroSection language={language} onScrollToSection={scrollToSection} />
//       <SolutionsSection language={language} />
//       {/* <MethodologySection language={language} /> */}
//       <AboutSection language={language} />
//       <WhyUsSection language={language} />
//       <ContactSection language={language} onScrollToSection={scrollToSection} />
//       <FooterSection language={language} onScrollToSection={scrollToSection} />
//     </div>
//   );
// };

// export default TalentInWebsite;

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
  User,
  Building,
  Heart,
  Lightbulb,
  UserCheck,
  FileCheck,
  GraduationCap,
  Clock,
} from "lucide-react";

// Custom Social Icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

// Translations
const translations = {
  en: {
    navigation: {
      home: "Home",
      ourSolutions: "Our Solutions",
      about: "About Us",
      whyUs: "Why Us",
      contact: "Contact",
    },
    hero: {
      howCanWeHelp: "How Can We Help?",
      subtitle:
        "Empowering individuals and organizations through expert talent solutions and strategic leadership development.",
      ourSolutions: "Our Solutions",
    },
    about: {
      title: "About Us",
      subtitle: "Committed to Unlocking Full Potential",
      description1:
        "Talent In is a dynamic and forward-thinking talent acquisition firm specializing in executive search and people development. Committed to unlocking the full potential of both individuals and organizations, we focus on empowering Oman market through innovative solutions in leadership and career coaching, strategic hiring, and advanced psychometric tools.",
      description2:
        "We unlock growth by placing top talent where they make the most impact, ensuring seamless alignment between exceptional candidates and organizational success.",
      trustedBy: "Trusted by leading Oman organizations",
    },
    solutions: {
      title: "Our Solutions",
      subtitle: "What We Do",
      forYou: "For You",
      forCorporate: "For Corporate",
      forYouServices: {
        careerCounselling: {
          title: "Career Counselling",
          description:
            "Personalized guidance to help you navigate your career path, identify strengths, and make informed decisions for professional growth and fulfillment.",
        },
        coaching: {
          title: "Executive & Leadership Coaching",
          description:
            "Personalized coaching sessions aimed at strengthening leadership skills, building executive presence, and driving accelerated career growth.",
        },
      },
      forCorporateServices: {
        executiveSearch: {
          title: "Executive Search & Talent Acquisition",
          description:
            "We specialize in sourcing top talent in the Omani industry through tailored headhunting strategies, with a commitment to trust, confidentiality, and integrity.",
        },
        coaching: {
          title: "Executive & Leadership Coaching",
          description:
            "We provide personalized coaching to enhance leadership skills, support career planning, and foster long-term professional growth.",
        },
        compliance: {
          title: "Oman Labor Law Compliance",
          description:
            "We ensure compliance with Oman labor laws while managing employee relations through fair grievance management and transparent conflict resolution.",
        },
        succession: {
          title: "Succession Planning",
          description:
            "It is our business continuity approach that involves identifying organizational talent and developing successors for key business-critical roles.",
        },
        advisory: {
          title: "People & Culture Advisory",
          description:
            "Comprehensive advisory services to build strong organizational culture, improve employee engagement, and enhance best practices in Human Resources.",
        },
      },
    },
    whyUs: {
      title: "Why Partner with Talent In?",
      subtitle: "We Don't Just Provide Solutions– We Create an Impact",
      description1:
        "At Talent In, we go beyond recruitment to deliver holistic people solutions that drive sustainable growth. From identifying and nurturing top talent to strengthening leadership capabilities, preparing future leaders, ensuring regulatory alignment, and fostering thriving workplace cultures, we empower both organizations and professionals to realize their true potential.",
      description2:
        "Guided by trust, expertise, and a proven track record, we ensure the right strategies, people, and culture come together to build long-term excellence.",
      features: [
        "Bespoke strategies that strengthen people and performance",
        "Practical solutions for evolving workforce needs",
        "Deep Oman market expertise and networks",
        "Advanced assessment tools",
      ],
      excellence: "Excellence in Every Placement",
      diagram: {
        ethical: "Ethical",
        omanFocus: "Oman Market Focus",
        experience: "20+ Years Expertise",
        practices: "Best International Practices",
      },
      stats: {
        satisfaction: "Ethical",
        market: "Market Focus",
        support: "Years expertise",
        powered: "Best International Practices",
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
        title: "Social Media",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
      map: {
        title: "Find Us",
      },
    },
    footer: {
      description:
        "Empowering Oman organizations through innovative talent acquisition and people development solutions.",
      location: "Based in Muscat, Oman - Serving the GCC Region",
      quickLinks: "Quick Links",
      services: "Our Solutions",
      copyright: "© 2025 Talent In. All rights reserved. | Muscat, Oman",
      developedBy: "Developed by",
      link: "https://sysassist.co/",
      address: "SysAssist IT Solutions, Indore, India",
      servicesList: [
        "Executive Search",
        "Leadership Coaching",
        "People Advisory",
        "Succession Planning",
      ],
    },
    imageSlider: {
      empowering: "Empowering Oman Organizations",
    },
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      ourSolutions: "خدماتنا",
      about: "من نحن",
      whyUs: "لماذا نحن",
      contact: "تواصل معنا",
    },
    hero: {
      howCanWeHelp: "كيف نقدر نساعدك؟",
      subtitle:
        "تمكين الأفراد والمؤسسات من خلال حلول المواهب المتخصصة وتطوير القيادة الاستراتيجية.",
      ourSolutions: "خدماتنا",
    },
    about: {
      title: "من نحن",
      subtitle: "ملتزمون بإطلاق الإمكانات الكاملة",
      description1:
        "تالنت إن هي شركة رائدة في استقطاب الكفاءات، تتميز برؤية مبتكرة ونهج استراتيجي في البحث التنفيذي وتطوير الأفراد. نلتزم بإطلاق الإمكانات الحقيقية للأفراد والمؤسسات، ونعمل على تمكين السوق العُماني من خلال حلول متقدمة في مجال القيادة والتوجيه المهني، التوظيف الاستراتيجي، وأدوات القياس النفسي الحديثة.",
      description2:
        "نُسهم في تحقيق النمو عبر اختيار أفضل الكفاءات ووضعها في المواقع الأكثر تأثيرًا، بما يضمن التوافق المثالي بين المواهب المتميزة ونجاح المؤسسات",
      trustedBy: "موثوقة من قبل المؤسسات الرائدة في عمان",
    },
    solutions: {
      title: "خدماتنا",
      subtitle: "ما نقدمه",
      forYou: "لك",
      forCorporate: "للشركات",
      forYouServices: {
        careerCounselling: {
          title: "الإرشاد المهني",
          description:
            "توجيه شخصي لمساعدتك في التنقل في مسارك المهني وتحديد نقاط القوة واتخاذ قرارات مدروسة للنمو المهني والإشباع.",
        },
        coaching: {
          title: "التدريب التنفيذي والقيادي",
          description:
            "جلسات تدريب شخصية تهدف إلى تعزيز مهارات القيادة، وبناء الحضور التنفيذي، ودفع مسار التطور المهني بوتيرة متسارعة",
        },
      },
      forCorporateServices: {
        executiveSearch: {
          title: "إستقطاب المواهب",
          description:
            "نحن نتخصص في استقطاب أفضل الكفاءات في السوق العُماني من خلال استراتيجيات استهداف مخصصة، مع التزام تام بالثقة والسرية والنزاهة",
        },
        coaching: {
          title: "التدريب التنفيذي والقيادي",
          description:
            "نقدم تدريبًا شخصيًا لتعزيز المهارات القيادية ودعم التخطيط المهني وتعزيز النمو المهني طويل الأمد.",
        },
        compliance: {
          title: "الامتثال لقانون العمل العماني",
          description:
            "نضمن الالتزام بقوانين العمل في سلطنة عمان مع إدارة علاقات الموظفين من خلال معالجة الشكاوى بشكل عادل وحل النزاعات بشفافية",
        },
        succession: {
          title: "تخطيط الخلافة",
          description:
            "هذا نهجنا لاستمرارية الأعمال، والذي يشمل تحديد المواهب داخل المؤسسة وتطوير البدائل لشغل المناصب الحيوية الأساسية",
        },
        advisory: {
          title: "استشارات الأشخاص والثقافة",
          description:
            "خدمات استشارية شاملة لبناء ثقافة مؤسسية قوية، وتعزيز مشاركة الموظفين، وتحسين أفضل الممارسات في إدارة الموارد البشرية",
        },
      },
    },
    whyUs: {
      title: "لماذا الشراكة مع تالنت إن؟",
      subtitle: "نحن لا نقدم الحلول فحسب – بل نحدث فرقاً",
      description1:
        "في تالنت إن، نتجاوز حدود التوظيف لنقدم حلولاً شاملة لإدارة المواهب تدعم النمو المستدام. بدءاً من اكتشاف ورعاية أفضل الكفاءات، وتعزيز قدرات القيادة، وإعداد القادة المستقبليين، وضمان الامتثال التنظيمي، وصولاً إلى تعزيز ثقافات العمل المزدهرة، نمكّن المؤسسات والمحترفين على حد سواء من تحقيق إمكاناتهم الحقيقية.",
      description2:
        "بفضل الثقة والخبرة والسجل المثبت من النجاحات، نضمن التوافق الأمثل بين الاستراتيجيات الصحيحة، والمواهب المناسبة، وثقافة العمل المتميزة لبناء التميز طويل الأمد.",
      features: [
        "استراتيجيات مخصصة تعزز الأفراد والأداء",
        "حلول عملية لتلبية احتياجات القوى العاملة المتطورة",
        "خبرة واسعة وشبكات عميقة في سوق عمان",
        "أدوات تقييم متقدمة",
      ],
      excellence: "التميز في كل تعيين",
      diagram: {
        ethical: "أخلاقي",
        omanFocus: "التركيز على السوق العُماني",
        experience: "خبرة +20 سنة",
        practices: "أفضل الممارسات الدولية",
      },
      stats: {
        satisfaction: "أخلاقي",
        market: "التركيز على السوق العُماني",
        support: "خبرة +20 سنة",
        powered: "أفضل الممارسات الدولية",
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
      },
      map: {
        title: "اعثر علينا",
      },
    },
    footer: {
      description:
        "تمكين منظمات عمان من خلال حلول اكتساب المواهب المبتكرة وتطوير الأشخاص.",
      location: "مقرها في مسقط، عُمان - تخدم منطقة دول مجلس التعاون الخليجي",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      copyright: "© 2025 تالنت إن. جميع الحقوق محفوظة. | مسقط، عُمان",
      developedBy: "تم تطويره بواسطة",
      link: "https://sysassist.co/",
      address: "سيستم أسيست لتقنية المعلومات، إندور، الهند",
      servicesList: [
        "البحث التنفيذي",
        "التدريب القيادي",
        "الاستشارات الشخصية",
        "تخطيط الخلافة",
      ],
    },
    imageSlider: {
      empowering: "تمكين منظمات عمان",
    },
  },
};

const ImageSlider = ({ language }) => {
  const images = [
    "/GCC-img.png",
    "/GCC-img-1.png",
    "/GCC-img-2.png",
    "/GCC-img-3.png",
    "/GCC-img-4.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
        className="w-full h-60 md:h-96 lg:h-96 rounded-2xl flex items-center justify-center bg-cover bg-center transition-all duration-1000"
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
    { label: t.navigation.ourSolutions, id: "solutions" },
    { label: t.navigation.about, id: "about" },
    { label: t.navigation.whyUs, id: "why-us" },
    { label: t.navigation.contact, id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/99 00f423 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Talentin_Logo.jpg"
              alt="Talent In Logo"
              className="h-20 rounded-lg object-cover"
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
                  className={`px-3 py-2 text-md font-bold transition-colors duration-200 cursor-pointer ${
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
      className="pt-20 min-h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/GCC-img.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.howCanWeHelp}
          </h1>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => onScrollToSection("solutions")}
              className="px-8 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t.hero.ourSolutions}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Solutions Section Component - Updated tab order
const SolutionsSection = ({ language }) => {
  const t = translations[language];
  const isRTL = language === "ar";
  const [activeTab, setActiveTab] = useState("forCorporate");
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceKey) => {
    setExpandedService(expandedService === serviceKey ? null : serviceKey);
  };

  const forYouServices = [
    {
      key: "careerCounselling",
      icon: GraduationCap,
      title: t.solutions.forYouServices.careerCounselling.title,
      description: t.solutions.forYouServices.careerCounselling.description,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      key: "coaching",
      icon: TrendingUp,
      title: t.solutions.forYouServices.coaching.title,
      description: t.solutions.forYouServices.coaching.description,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const forCorporateServices = [
    {
      key: "executiveSearch",
      icon: Search,
      title: t.solutions.forCorporateServices.executiveSearch.title,
      description: t.solutions.forCorporateServices.executiveSearch.description,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      key: "coaching",
      icon: TrendingUp,
      title: t.solutions.forCorporateServices.coaching.title,
      description: t.solutions.forCorporateServices.coaching.description,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      key: "compliance",
      icon: Shield,
      title: t.solutions.forCorporateServices.compliance.title,
      description: t.solutions.forCorporateServices.compliance.description,
      gradient: "from-green-500 to-teal-500",
    },
    {
      key: "succession",
      icon: Users,
      title: t.solutions.forCorporateServices.succession.title,
      description: t.solutions.forCorporateServices.succession.description,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      key: "advisory",
      icon: Lightbulb,
      title: t.solutions.forCorporateServices.advisory.title,
      description: t.solutions.forCorporateServices.advisory.description,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.solutions.title}
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            {t.solutions.subtitle}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        {/* Tab Navigation - For Corporate on left, For You on right */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("forCorporate")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                activeTab === "forCorporate"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Building className="w-5 h-5" />
              <span>{t.solutions.forCorporate}</span>
            </button>
            <button
              onClick={() => setActiveTab("forYou")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ml-2 cursor-pointer ${
                activeTab === "forYou"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <User className="w-5 h-5" />
              <span>{t.solutions.forYou}</span>
            </button>
          </div>
        </div>

        {/* Services Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "forCorporate" && (
            <div className="space-y-4">
              {forCorporateServices.map((service) => {
                const IconComponent = service.icon;
                const isExpanded = expandedService === service.key;

                return (
                  <div
                    key={service.key}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <button
                      onClick={() => toggleService(service.key)}
                      className="w-full cursor-pointer p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed ml-16">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "forYou" && (
            <div className="space-y-4">
              {forYouServices.map((service) => {
                const IconComponent = service.icon;
                const isExpanded = expandedService === service.key;

                return (
                  <div
                    key={service.key}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <button
                      onClick={() => toggleService(service.key)}
                      className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed ml-16">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ language }) => {
  const t = translations[language];

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
            <ImageSlider language={language} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Us Section Component - Updated with circular diagram
// const WhyUsSection = ({ language }) => {
//   const t = translations[language];
//   const isRTL = language === "ar";

//   return (
//     <section
//       id="why-us"
//       className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">{t.whyUs.title}</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto" />
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold mb-6">{t.whyUs.subtitle}</h3>
//             <p className="text-lg mb-6 leading-relaxed opacity-90">
//               {t.whyUs.description1}
//             </p>
//             <p className="text-lg mb-8 leading-relaxed opacity-90">
//               {t.whyUs.description2}
//             </p>
//             <div className="space-y-4">
//               {t.whyUs.features.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center ${
//                     isRTL ? "space-x-reverse" : ""
//                   } space-x-3`}
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Circular Diagram */}
//           <div className="relative w-full flex justify-center items-center min-h-[400px]">
//             {/* Outer Circular Container */}
//             <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-white/20 flex items-center justify-center">
//               {/* Center Logo Circle */}
//               <div className="absolute w-24 h-24  bg-white rounded-full flex items-center justify-center shadow-lg z-10">
//                 <img
//                   src="/Talentin_Logo.jpg"
//                   alt="Talent In Logo"
//                   className="w-10 h-10  rounded-lg object-cover"
//                 />
//               </div>

//               {/* Top Item - Ethical */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">Ethical</p>
//                 </div>
//               </div>

//               {/* Right Item - Oman Market */}
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <MapPin className="w-5 h-5 text-pink-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">
//                     <span className="font-bold">Oman</span> Market Focus
//                   </p>
//                 </div>
//               </div>

//               {/* Bottom Item - 20+ Years */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white">
//                     <span className="font-bold">20+</span> Years Expertise
//                   </p>
//                 </div>
//               </div>

//               {/* Left Item - Best Practices */}
//               <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
//                 <div className="bg-white/10 p-3 rounded-xl text-center w-40 shadow backdrop-blur-md">
//                   <Globe className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
//                   <p className="font-semibold text-white text-sm">
//                     Best International Practices
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Enhanced Why Us Section Component with improved layout and multilingual support
const WhyUsSection = ({ language }) => {
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {t.whyUs.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-2 rounded-full opacity-60" />
        </div>

        {/* Updated grid with more space for content */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content - Now spans 2 columns for more width */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-6 text-cyan-300">
                {t.whyUs.subtitle}
              </h3>

              <div className="space-y-6 mb-8">
                <p className="text-lg leading-relaxed opacity-90 text-blue-100">
                  {t.whyUs.description1}
                </p>
                <p className="text-lg leading-relaxed opacity-90 text-blue-100">
                  {t.whyUs.description2}
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {t.whyUs.features.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      isRTL ? "space-x-reverse" : ""
                    } space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span>{t.whyUs.cta || "Learn More About Us"}</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Diagram - Now takes 1 column */}
          <div className="relative w-full flex justify-center items-center min-h-[500px]">
            {/* Animated Outer Rings */}
            <div className="absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
            <div className="absolute w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] rounded-full border border-purple-400/20 animate-reverse-spin"></div>

            {/* Main Circular Container */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
              {/* Center Logo Circle with Enhanced Styling */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50 z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src="/Talentin_Logo.jpg"
                  alt="Talent In Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md"
                />
              </div>

              {/* Dynamic Diagram Items */}
              {diagram.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                const displayTitle =
                  language === "ar" ? item.titleAr : item.title;

                return (
                  <div
                    key={index}
                    className={`${getPositionClasses(
                      item.position
                    )} group hover:scale-105 transition-all duration-300`}
                  >
                    <div
                      className={`${item.bgColor} backdrop-blur-md p-4 rounded-2xl text-center min-w-[140px] shadow-xl border border-white/20 hover:border-white/40 transform group-hover:-translate-y-1`}
                    >
                      <div
                        className={`w-8 h-8 ${item.color} mx-auto mb-2 p-1 rounded-lg bg-white/20`}
                      >
                        <IconComponent className="w-full h-full" />
                      </div>
                      <p
                        className={`font-bold text-white text-sm leading-tight ${
                          isRTL ? "font-arabic" : ""
                        }`}
                      >
                        {displayTitle}
                      </p>
                    </div>

                    {/* Connecting Lines */}
                    <div
                      className={`absolute w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent ${
                        item.position === "top"
                          ? "top-full left-1/2 -translate-x-1/2"
                          : item.position === "right"
                          ? "right-full top-1/2 -translate-y-1/2 rotate-90"
                          : item.position === "bottom"
                          ? "bottom-full left-1/2 -translate-x-1/2"
                          : "left-full top-1/2 -translate-y-1/2 rotate-90"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }

        .font-arabic {
          font-family: "Cairo", "Amiri", Arial, sans-serif;
        }
      `}</style>
    </section>
  );
};
const ContactSection = ({ language, onScrollToSection }) => {
  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information with Social Media */}
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
                    link: "mailto:muaath@talent-in.com",
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
                    link: t.contact.info.websiteValue.startsWith("http")
                      ? t.contact.info.websiteValue
                      : `https://talent-in.netlify.app/`,
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
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.icon === Globe ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Social Media Links - Inside the same white box */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {t.contact.socialMedia.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: LinkedInIcon,
                        label: t.contact.socialMedia.linkedin,
                        url: "https://www.linkedin.com/company/talent-in-om/",
                        gradient: "from-blue-600 to-blue-700",
                      },
                      {
                        icon: WhatsAppIcon,
                        label: t.contact.socialMedia.whatsapp,
                        url: "http://wa.me/96897511711",
                        gradient: "from-green-500 to-green-600",
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
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.map.title}
              </h3>
              <div className="relative h-90 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3926636536755!2d58.47841731498063!3d23.595857884681675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f7e1c5c5c5c5%3A0x5f5f5f5f5f5f5f5f!2sShatti%20Al%20Qurum%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Talent In Location"
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
                  {t.contact.info.addressValue} ( Click on the map to get
                  directions )
                </p>
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
    { name: t.navigation.ourSolutions, id: "solutions" },
    { name: t.navigation.about, id: "about" },
    { name: t.navigation.whyUs, id: "why-us" },
    { name: t.navigation.contact, id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/Talentin_Logo.jpg"
              alt="Talent In Logo"
              className="h-16 rounded-lg object-cover mb-4"
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

  const isRTL = language === "ar";

  // Set document direction and language
  useEffect(() => {
    document.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "about", "why-us", "contact"];
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

  return (
    <div
      className={`min-h-screen bg-amber-50 ${isRTL ? "font-arabic" : ""}`}
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
      <SolutionsSection language={language} />
      <AboutSection language={language} />
      <WhyUsSection language={language} />
      <ContactSection language={language} onScrollToSection={scrollToSection} />
      <FooterSection language={language} onScrollToSection={scrollToSection} />
    </div>
  );
};

export default TalentInWebsite;
