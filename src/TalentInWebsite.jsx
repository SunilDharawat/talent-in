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
} from "lucide-react";

export const TalentInWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Executive Search & Talent Acquisition",
      description:
        "We specialize in sourcing top industry talent through tailored headhunting strategies, with a commitment to trust, confidentiality, and integrity.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Leadership and Career Coaching",
      description:
        "We provide personalized coaching to enhance leadership skills, support career planning, and foster long-term professional growth.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "People Advisory & Compliance",
      description:
        "We ensure compliance with Oman labor laws while managing employee relations through fair grievance handling and transparent conflict resolution.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Hiring: Behavioral Insights & AI Integration",
      description:
        "We utilize advanced assessments and AI-driven tools to evaluate candidate personality, skills, and potential, ensuring accurate role fit, faster hiring, and reduced bias.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Client Onboarding",
      description:
        "Talent In handles client onboarding by understanding organizational culture, role expectations, and leadership challenges, while defining clear deliverables and KPIs.",
    },
    {
      step: "02",
      title: "Market Research & Talent Mapping",
      description:
        "We perform market analysis to identify target sectors and talent pools, develops longlists of candidates through databases, networking and referrals.",
    },
    {
      step: "03",
      title: "Outreach & Engagement",
      description:
        "Engages potential candidates confidentially and conducts preliminary screenings to assess skills, values and career goals.",
    },
    {
      step: "04",
      title: "Evaluation & Selection",
      description:
        "We conduct comprehensive interviews and assessments, presents shortlisted candidates with detailed evaluation reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <img
                  src="/src/assets/website-logos.png"
                  alt="Talent-In Logo"
                  className="w-18 h-18 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Methodology",
                  "Why Us",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.toLowerCase().replace(" ", "-")
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Services",
                "Methodology",
                "Why Us",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Potential
                </span>
                <br />
                Build
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Success
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dynamic talent acquisition firm specializing in executive search
                and people development for the GCC market. We empower
                organizations through innovative solutions in leadership
                coaching, strategic hiring, and advanced psychometric tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/src/assets/GCC-img.png"
                    alt="Logo"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold text-gray-700">
                    Empowering GCC Organizations
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Talent-In
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Committed to Unlocking Full Potential
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Talent-In is a dynamic and forward-thinking talent acquisition
                firm specializing in executive search and people development.
                Committed to unlocking the full potential of both individuals
                and organizations, we focus on empowering GCC market through
                innovative solutions in leadership and career coaching,
                strategic hiring, and advanced psychometric tools.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We unlock growth by placing top talent where they make the most
                impact, ensuring seamless alignment between exceptional
                candidates and organizational success.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">
                  Trusted by leading GCC organizations
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Precision Matching
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Excellence Driven
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Trust & Integrity
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      AI Innovation
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive talent solutions designed to drive organizational
              success in the GCC market
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A holistic approach to talent management that combines expertise,
              innovation, and personalized fit-to-purpose
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
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

      {/* Why Partner Section */}
      <section
        id="why-us"
        className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Partner with Talent-In?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                We Don't Just Fill Positions - We Build Success
              </h3>
              <p className="text-lg mb-6 leading-relaxed opacity-90">
                At Talent In, we go beyond recruitment to connect you with
                exceptional talent that propels your organization's growth. Our
                bespoke search strategies, advanced assessment tools and deep
                market expertise ensure every placement aligns seamlessly with
                your business requirements.
              </p>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Guided by trust, confidentiality and proven results, we partner
                with you to build teams that inspire success.
              </p>
              <div className="space-y-4">
                {[
                  "Bespoke search strategies tailored to your needs",
                  "Advanced assessment tools and AI integration",
                  "Deep GCC market expertise and networks",
                  "Proven track record of successful placements",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
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
                  <h4 className="text-xl font-bold">
                    Excellence in Every Placement
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      100%
                    </div>
                    <div className="text-sm opacity-80">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      GCC
                    </div>
                    <div className="text-sm opacity-80">Market Focus</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      24/7
                    </div>
                    <div className="text-sm opacity-80">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      AI
                    </div>
                    <div className="text-sm opacity-80">Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to unlock your organization's potential? Let's start the
              conversation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+968 97511711</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">muaath@talent-in.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Shatti Al Qurum, Muscat, Oman
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Website</p>
                      <p className="text-gray-600">www.talent-in.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Transform Your Team?
                </h3>
                <p className="mb-6 opacity-90">
                  Let's discuss how we can help you find the perfect talent for
                  your organization's success.
                </p>
                <button
                  onClick={() => scrollToSection("home")}
                  className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors duration-200"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex-shrink-0 ">
                <img
                  src="/src/assets/website-logos.png"
                  alt="Talent-In Logo"
                  className="w-18 h-18 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Empowering GCC organizations through innovative talent
                acquisition and people development solutions.
              </p>
              <p className="text-gray-400">
                Based in Muscat, Oman - Serving the GCC Region
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About Us", "Services", "Methodology", "Contact"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() =>
                        scrollToSection(link.toLowerCase().replace(" ", "-"))
                      }
                      className="block text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Executive Search</p>
                <p>Leadership Coaching</p>
                <p>People Advisory</p>
                <p>AI-Powered Hiring</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Talent-In. All rights reserved. | Muscat, Oman</p>
          </div>
        </div>
      </footer>

      <style jsx>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }

          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.1);
          }

          .group:hover .group-hover\\:shadow-lg {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom gradient text */
          .bg-clip-text {
            background-clip: text;
            -webkit-background-clip: text;
          }

          /* Custom backdrop blur */
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }

          /* Hover animations */
          .hover\\:shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          .hover\\:-translate-y-1:hover {
            transform: translateY(-0.25rem);
          }

          .hover\\:-translate-y-2:hover {
            transform: translateY(-0.5rem);
          }

          /* Focus styles for accessibility */
          .focus\\:ring-2:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            box-shadow: var(--tw-ring-inset) 0 0 0
              calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          }

          .focus\\:ring-blue-500:focus {
            --tw-ring-color: rgb(59 130 246);
          }

          .focus\\:border-transparent:focus {
            border-color: transparent;
          }

          /* Transition utilities */
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          .transition-colors {
            transition-property: color, background-color, border-color,
              text-decoration-color, fill, stroke;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          .transition-transform {
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          .transition-shadow {
            transition-property: box-shadow;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          .duration-200 {
            transition-duration: 200ms;
          }

          .duration-300 {
            transition-duration: 300ms;
          }

          /* Mobile responsiveness enhancements */
          @media (max-width: 640px) {
            .text-5xl {
              font-size: 2.5rem;
              line-height: 1.1;
            }

            .text-6xl {
              font-size: 3rem;
              line-height: 1.1;
            }

            .px-8 {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }

            .py-4 {
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
          }

          /* Loading animation for form submission */
          .loading {
            position: relative;
            overflow: hidden;
          }

          .loading::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            animation: loading 1.5s infinite;
          }

          @keyframes loading {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }

          /* Interactive elements */
          .interactive-card {
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .interactive-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          /* Gradient backgrounds */
          .gradient-bg-1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .gradient-bg-2 {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          }

          .gradient-bg-3 {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }

          .gradient-bg-4 {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          }

          /* Text animations */
          .text-animation {
            background: linear-gradient(
              -45deg,
              #667eea,
              #764ba2,
              #f093fb,
              #f5576c
            );
            background-size: 400% 400%;
            animation: gradient-shift 4s ease infinite;
          }

          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Button hover effects */
          .btn-primary {
            position: relative;
            overflow: hidden;
            z-index: 1;
          }

          .btn-primary::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.5s;
            z-index: -1;
          }

          .btn-primary:hover::before {
            left: 100%;
          }

          /* Form field animations */
          .form-field {
            position: relative;
          }

          .form-field input:focus + label,
          .form-field textarea:focus + label,
          .form-field input:not(:placeholder-shown) + label,
          .form-field textarea:not(:placeholder-shown) + label {
            transform: translateY(-1.5rem) scale(0.8);
            color: #667eea;
          }

          /* Navigation active state */
          .nav-active {
            position: relative;
          }

          .nav-active::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transform: scaleX(1);
            transition: transform 0.3s ease;
          }

          /* Hero section particles */
          .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          .particle {
            position: absolute;
            background: radial-gradient(
              circle,
              rgba(102, 126, 234, 0.1) 0%,
              transparent 70%
            );
            border-radius: 50%;
            animation: float-particles 6s ease-in-out infinite;
          }

          @keyframes float-particles {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translateY(-10px) rotate(180deg);
            }
            75% {
              transform: translateY(-30px) rotate(270deg);
            }
          }

          /* Section reveal animations */
          .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }

          /* Loading states */
          .skeleton {
            background: linear-gradient(
              90deg,
              #f0f0f0 25%,
              #e0e0e0 50%,
              #f0f0f0 75%
            );
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
          }

          @keyframes skeleton-loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          /* Success/Error states */
          .success-state {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
          }

          .error-state {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
          }

          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            .dark-mode {
              background-color: #1f2937;
              color: #f9fafb;
            }
          }

          /* Print styles */
          @media print {
            .no-print {
              display: none !important;
            }

            * {
              background: white !important;
              color: black !important;
            }
          }

          /* Accessibility improvements */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }

          /* Focus visible for keyboard navigation */
          .focus-visible:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .high-contrast {
              border: 2px solid currentColor;
            }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  );
};
