import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Star,
  Calendar,
  Code,
  Briefcase,
  User,
  MessageSquare,
  Phone,
  MessageCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
import { useRef } from "react";

import Resume from "../Assets/Resume-Shubham.pdf";
import Profile from "../Assets/Profile.jpg";

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ For mobile menu toggle
  const formRef = useRef(null); // ✅ EmailJS form reference

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // ✅ EmailJS Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hu09ikk", // 🔹 replace with your EmailJS Service ID
        "template_ekm7wdw", // 🔹 replace with your EmailJS Template ID
        formRef.current,
        "XE28dHaX691yzgys3", // 🔹 replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message, try again.");
        },
      );
  };

  const skills = [
    "Wireframing",
    "Team Collaboration",
    "Product Lifecycle Management",
    "Growth Frameworks",
    "Data-Driven Decisions",
    "Product-Led Growth (PLG)",
    "Product Strategy",
    "Stakeholder Management",
    "Financial Acumen",
    "Partnership Development",
    "Vendor Management",
  ];
  const experience = [
    {
      title: "AVP - Product",
      company: "OneVerse (MyTeam11)",
      period: "April 2025 - Present | Jaipur, Rajasthan",
      description:
        "Leading product strategy and execution across diverse game formats including Rummy and Fantasy Sports. Focused on product-led growth, business alignment, and user-centric solutions.",
      achievements: [
        "Shaped product roadmaps aligned with business goals",
        "Implemented data-driven product optimization",
        "Challenged and refined offerings with trend insights",
      ],
    },
    {
      title: "Sr. Product Manager",
      company: "MyTeam11 Fantasy Sports",
      period: "June 2023 - March 2025 | Jaipur, Rajasthan",
      description:
        "Owned end-to-end product lifecycle from roadmap planning to launch across web, Android, and iOS. Led product growth initiatives across Fantasy Sports & Real Money Gaming.",
      achievements: [
        "Increased gameplay conversion by 20% via UX optimizations",
        "Launched new game formats & scaled daily active users",
        "Optimized onboarding, KYC, wallet & retention funnels",
      ],
    },
    {
      title: "Product Manager",
      company: "MyTeam11 Fantasy Sports",
      period: "March 2022 - May 2023 | Jaipur, Rajasthan",
      description:
        "Contributed to end-to-end lifecycle from ideation to launch. Worked cross-functionally to build features aligned with user needs and business goals.",
      achievements: [
        "Defined clear product requirements",
        "Ensured timely execution with tech/design teams",
        "Drove stakeholder alignment for product success",
      ],
    },
    {
      title: "Head of Administration",
      company: "MyTeam11 Fantasy Sports",
      period: "March 2020 - February 2022 | Jaipur, Rajasthan",
      description:
        "Oversaw product operations and collaborated with leadership on strategic plans. Managed cross-functional teams and streamlined workflows.",
      achievements: [
        "Enhanced collaboration across departments",
        "Streamlined backend operational tools",
        "Led 24/7 shift management for smooth execution",
      ],
    },
    {
      title: "Manager of Customer Experience",
      company: "MyTeam11 Fantasy Sports",
      period: "October 2017 - February 2020 | Jaipur, Rajasthan",
      description:
        "Led customer experience and team development initiatives to improve retention and support scalability.",
      achievements: [
        "Developed innovative retention solutions",
        "Mentored & trained new teams",
        "Implemented automation for workflow efficiency",
      ],
    },
    {
      title: "Estate Manager",
      company: "Mahima Group",
      period: "May 2014 - February 2017 | Jaipur, Rajasthan",
      description:
        "Managed large-scale estate operations and events while advising on investment opportunities.",
      achievements: [
        "Planned & executed premium events",
        "Supervised estate maintenance & budgets",
        "Guided property investment strategies",
      ],
    },
    {
      title: "Executive Estate Manager",
      company: "Mahima Group",
      period: "October 2013 - April 2014 | Jaipur, Rajasthan",
      description:
        "Focused on client relations, operational metrics, and customer satisfaction improvements.",
      achievements: [
        "Improved response time via streamlined channels",
        "Strengthened client relations",
        "Analyzed performance metrics",
      ],
    },
    {
      title: "Business Owner",
      company: "Self-Employed (Health Industry)",
      period: "November 2012 - September 2013 | Bandikui",
      description:
        "Operated a family-run hospital, handling growth strategy, compliance, and outreach initiatives.",
      achievements: [
        "Led staff hiring & training",
        "Organized community medical camps",
        "Drove healthcare program compliance",
      ],
    },
    {
      title: "Server Administrator",
      company: "Physivert Solutions Pvt. Ltd.",
      period: "July 2012 - October 2012 | Jaipur",
      description:
        "Maintained Windows server infrastructure ensuring uptime, security, and system stability.",
      achievements: [
        "Performed routine server health checks",
        "Managed user access & configurations",
        "Escalated and resolved system issues",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-foreground overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-grid animate-grid-flow opacity-20 pointer-events-none" />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-2xl md:text-3xl font-orbitron font-bold text-neon-blue cursor-pointer"
              onClick={() => {
                const heroSection = document.getElementById("hero");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              SM
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Experience", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-md font-exo transition-colors duration-300 hover:text-neon-blue hover:text-glow ${
                      activeSection === item.toLowerCase()
                        ? "text-neon-blue font-bold underline"
                        : "text-white/80"
                    }`}
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                className="focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neon-blue text-4xl md:text-5xl" // increased size
                >
                  {isOpen ? "✖" : "☰"}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 border-t border-neon-blue/30 p-6 flex flex-col space-y-6"
            >
              {["About", "Experience", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-lg font-exo transition-colors duration-300 hover:text-white ${
                      activeSection === item.toLowerCase()
                        ? "text-neon-blue font-bold underline"
                        : "text-neon-blue"
                    }`}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-[8rem]"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.1),transparent_60%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple animate-gradient">
                SHUBHAM MALHOTRA
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-3xl font-exo text-neon-cyan mb-4"
            >
              BUSINESS GROWTH & PRODUCT LEADER
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-8"
            >
              Driving innovation in fantasy sports, RMG, and gaming tech with 8+
              years of experience. Passionate about building scalable,
              user-focused products that fuel engagement and growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={Resume}
                download
                className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-exo font-semibold rounded-lg neon-border hover:scale-105 transition-all duration-300 md:inline-block mx-auto md:mx-0"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex space-x-6 mt-12 justify-center md:justify-start"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/avp-shubham/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 hover:animate-glow-pulse"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Email */}
              <a
                href="mailto:hrshtmalhotra9@gmail.com"
                className="p-3 rounded-full border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 hover:animate-glow-pulse"
              >
                <Mail className="w-6 h-6" />
              </a>

              {/* Contact Form Icon */}
              <a
                href="#contact" // this will scroll to your Contact Form section
                className="p-3 rounded-full border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-dark-900 transition-all duration-300 hover:animate-glow-pulse"
              >
                <MessageCircle className="w-6 h-6" />{" "}
                {/* Replace with icon of your choice */}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Modern Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ rotateY: 5, rotateX: 3, scale: 1.03 }}
            className="relative mt-12 md:mt-0"
          >
            {/* Image Card with Subtle Outline */}
            <div className="relative w-72 h-96 bg-dark-800 rounded-2xl overflow-hidden border border-neon-blue/20 shadow-[0_0_40px_rgba(0,255,255,0.1)] flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl border-2 border-neon-blue/10 transition-all duration-500"
              />

              {/* Subtle Neon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-neon-purple/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      >
        {/* Background Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-56 h-56 bg-indigo-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
              <span className="text-neon-cyan">About</span> Me
            </h2>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8">
                {/* About Text */}
                <div className="bg-gray-900 rounded-2xl border border-indigo-400/30 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    I’m a passionate{" "}
                    <span className="text-cyan-400 font-semibold">
                      Business Growth & Product Leader
                    </span>{" "}
                    with 8+ years of expertise in fantasy sports, real-money
                    gaming, and gaming tech. I focus on building scalable,
                    user-centric digital products that enhance{" "}
                    <span className="text-indigo-400 font-semibold">
                      growth
                    </span>{" "}
                    and{" "}
                    <span className="text-emerald-400 font-semibold">
                      engagement
                    </span>
                    .
                  </p>

                  <p className="text-base text-gray-400 leading-relaxed">
                    Currently serving as AVP - Product at OneVerse (MyTeam11),
                    where I lead product strategy, innovation, and execution,
                    achieving{" "}
                    <span className="text-indigo-400 font-semibold">
                      +20% conversion
                    </span>{" "}
                    and{" "}
                    <span className="text-emerald-400 font-semibold">
                      +30% engagement
                    </span>{" "}
                    through data-driven decisions.
                  </p>
                </div>

                {/* Core Skills */}
                <div>
                  <h4 className="text-lg font-orbitron text-emerald-400 mb-3">
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Product Strategy",
                      "Growth Frameworks",
                      "Data-Driven Decisions",
                      "Team Leadership",
                      "Fantasy Sports",
                    ].map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gray-800 text-cyan-400 rounded-full text-xs border border-cyan-400/30 hover:border-cyan-400 hover:shadow-md transition-all"
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="text-lg font-orbitron text-indigo-400 mb-3">
                    Strengths
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>
                      <span className="text-cyan-400 font-semibold">
                        Product-Led Growth (PLG):
                      </span>{" "}
                      Developed strategies to boost business growth, user
                      engagement, and market alignment.
                    </li>
                    <li>
                      <span className="text-cyan-400 font-semibold">
                        Product Lifecycle Management (PLM):
                      </span>{" "}
                      Expertise in end-to-end lifecycle management ensuring
                      efficiency and alignment with market needs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-8">
                {/* Education */}
                <div>
                  <h3 className="text-lg font-orbitron text-indigo-400 mb-3">
                    Education
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative bg-gray-900 border border-indigo-400/30 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="absolute -top-3 left-5 px-3 py-0.5 text-[10px] font-semibold text-gray-900 bg-indigo-400 rounded-full shadow">
                      2008 - 2012
                    </div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      Bachelor of Technology (Computer Science)
                    </h4>
                    <p className="text-cyan-400 text-sm">
                      Mewar College of Engineering
                    </p>
                    <p className="text-gray-400 text-xs">Chittaurgarh, India</p>
                  </motion.div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg font-orbitron text-emerald-400 mb-3">
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Project Management Professional (PMP)",
                      "Google Play Academy - Store Listing",
                      "Operation Management",
                      "Jira Project Management",
                    ].map((cert, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-900 border border-cyan-400/30 rounded-xl p-3 shadow-md hover:shadow-lg transition-all"
                      >
                        <p className="text-gray-300 text-sm">{cert}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-lg font-orbitron text-cyan-400 mb-3">
                    Key Achievements
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-900 border border-indigo-400/30 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="text-base text-white font-semibold mb-1">
                      Gaming Engagement & Experience Optimization
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Successfully launched gaming modules that boosted{" "}
                      <span className="text-emerald-400 font-semibold">
                        active user engagement by 30%
                      </span>{" "}
                      and improved conversions by{" "}
                      <span className="text-indigo-400 font-semibold">
                        20%+
                      </span>
                      .
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
              <span className="text-neon-cyan">WORK</span> EXPERIENCE
            </h2>

            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="glass-effect p-6 rounded-lg neon-border hover:shadow-neon-blue transition-all duration-500 group">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-neon-blue" />
                          <span className="font-mono text-neon-blue">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="font-exo font-bold text-xl mb-1 group-hover:text-neon-cyan transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-neon-green font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="glass-effect p-6 rounded-lg hover:bg-dark-700/50 transition-all duration-500">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-neon-blue flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < experience.length - 1 && (
                    <div className="hidden md:block absolute left-1/3 top-full w-px h-12 bg-gradient-to-b from-neon-blue to-transparent transform -translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-20 bg-dark-900 overflow-hidden"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
            <span className="text-neon-cyan">Core</span> Skills
          </h2>
          <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
            Tools & technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 text-sm rounded-xl border border-indigo-400/40 
      text-cyan-300 font-exo font-medium 
      bg-gradient-to-r from-dark-800 to-dark-700 hover:from-dark-700 hover:to-dark-600 
      shadow-[0_0_15px_rgba(79,70,229,0.25)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] 
      cursor-pointer transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-dark-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-6 sm:mb-8 leading-snug">
              <span className="text-neon-cyan">GET</span> IN TOUCH
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
              Ready to collaborate on the next breakthrough product? Let's
              connect and create something extraordinary together.
            </p>

            {/* ✅ Updated EmailJS Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-5 sm:space-y-6 text-left"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg 
                       focus:border-neon-blue focus:outline-none transition-colors duration-300 font-roboto"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg 
                       focus:border-neon-blue focus:outline-none transition-colors duration-300 font-roboto"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg 
                     focus:border-neon-blue focus:outline-none transition-colors duration-300 font-roboto"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-dark-700 border border-neon-blue/30 rounded-lg 
                     focus:border-neon-blue focus:outline-none transition-colors duration-300 
                     font-roboto resize-none"
              ></textarea>

              {/* ✅ Status message */}
              {status && (
                <p
                  className={`text-sm font-medium ${
                    status === "success" ? "text-neon-cyan" : "text-red-500"
                  }`}
                >
                  {status === "success"
                    ? "✅ Message sent successfully!"
                    : "❌ Failed to send message, try again."}
                </p>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-cyan 
                     text-dark-900 font-exo font-bold rounded-lg neon-border 
                     hover:shadow-neon-blue transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  Send Message
                </span>
              </motion.button>
            </motion.form>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 mt-8 space-y-6 sm:space-y-0">
              {[
                {
                  Icon: Mail,
                  label: "hrshtmalhotra9@gmail.com",
                  href: "mailto:hrshtmalhotra9@gmail.com",
                },
                {
                  Icon: Linkedin,
                  label: "linkedin.com/in/avp-shubham",
                  href: "https://www.linkedin.com/in/avp-shubham",
                },
                {
                  Icon: Phone,
                  label: "+91 7791070904",
                  href: "tel:+917791070904",
                },
              ].map(({ Icon, label, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={Icon === Linkedin ? "_blank" : "_self"}
                  rel={Icon === Linkedin ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 text-neon-blue 
                       hover:text-neon-cyan transition-colors duration-300 group"
                >
                  <div
                    className="p-3 rounded-full border border-neon-blue/50 
                            group-hover:border-neon-cyan group-hover:shadow-glow 
                            transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono break-all text-center">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-900 border-t border-neon-blue/20">
        <div className="container mx-auto px-6 text-center flex flex-col items-center gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="text-3xl md:text-4xl font-orbitron font-bold text-neon-blue cursor-pointer"
          >
            SM
          </motion.div>

          {/* Footer Text */}
          <p className="text-muted-foreground text-sm max-w-md">
            © 2025 Shubham Malhotra. Crafted with passion and powered by
            innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}
