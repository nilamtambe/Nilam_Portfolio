import React, { useState, useEffect, useCallback, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import nilam from "./assets/nilam2.jpeg";
import ecom from "./assets/e2.jpeg";
import content from "./assets/f4.jpeg";
import landing from "./assets/l1.jpeg";
import content2 from "./assets/e1.jpeg";
import frontend from "./assets/w4.jpeg";
import wordpress from "./assets/w.jpeg";
import img1 from "./assets/l2.jpeg";
import img2 from "./assets/f1.jpeg";
import img3 from "./assets/f5.jpeg";
import img4 from "./assets/w3.jpeg";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  PenTool,
  Layout,
  Search,
  Globe,
  ChevronRight,
  Sparkles,
  Briefcase,
  Phone,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20">
            NT
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-brand-primary/20"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT (UPDATED ANIMATION) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex flex-col justify-center"
          >

            {/* Top line */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-[1px] bg-brand-primary" />
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand-primary">
                Available for projects
              </h4>
            </motion.div>

            {/* Name section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-2 mb-8"
            >
              <h4 className="text-xl text-slate-500 font-medium">Hello, I'm</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Nilam Tambe
              </h2>
              <h4 className="text-xl md:text-2xl font-semibold text-slate-700">
                <span className="text-brand-primary">Frontend Developer</span> &{" "}
                <span className="text-brand-secondary">Content Writer</span>
              </h4>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
            >
              I am a dedicated Frontend Developer and Content Writer who builds
              seamless digital experiences by combining clean code with
              strategic storytelling.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand-primary/25 flex items-center gap-2"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-brand-secondary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand-secondary/25 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-center"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl max-w-[240px] md:max-w-[310px] z-10 border-4 border-white">
                <img
                  src={nilam}
                  alt="Nilam Tambe"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Button - Top Right */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 12, 0],
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{
                  opacity: { delay: 0.8 },
                  x: { delay: 0.8 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-6 -right-8 glass p-5 shadow-2xl z-20 border-r-4 border-brand-primary text-right group"
              >
                <div className="flex items-center justify-end gap-3 mb-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Expertise
                  </p>
                  <Sparkles size={14} className="text-brand-primary animate-pulse" />
                </div>
                <p className="text-base font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                  Creative Developer
                </p>
              </motion.button>

              {/* Floating Button - Bottom Left */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -12, 0],
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{
                  opacity: { delay: 1 },
                  x: { delay: 1 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                className="absolute -bottom-8 -left-8 glass p-5 shadow-2xl z-20 border-l-4 border-brand-secondary text-left group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Briefcase size={14} className="text-brand-secondary" />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Status
                  </p>
                </div>
                <p className="text-base font-bold text-slate-900 group-hover:text-brand-secondary transition-colors">
                  Available for Work
                </p>
              </motion.button>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 -z-10 rounded-full blur-2xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and high-performance web applications using React, JavaScript, and modern CSS frameworks. Focused on creating clean, user-friendly interfaces with optimized performance and seamless user experience across all devices.",
      icon: <Layout className="text-brand-primary" />,
      color: "bg-brand-primary/10",
    },
    {
      title: "Content Writing",
      description:
        "Crafting SEO-friendly and engaging content for websites and blogs, helping businesses clearly communicate their message and connect with their target audience. Focused on improving readability, search visibility, and user engagement.",
      icon: <PenTool className="text-brand-accent" />,
      color: "bg-brand-accent/10",
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress development and theme customization to build flexible, scalable, and user-friendly websites. Focused on creating responsive designs, easy content management, and performance-optimized solutions tailored to business needs.",
      icon: <Globe className="text-brand-secondary" />,
      color: "bg-brand-secondary/10",
    },
    {
      title: "Content & SEO Strategy",
      description:
        "Optimizing website content and structure to improve search engine visibility and enhance user experience. Focused on keyword optimization, content clarity, and structured layouts to achieve better search rankings and long-term growth.",
      icon: <Search className="text-brand-primary" />,
      color: "bg-brand-primary/10",
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
            What I Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Services</h3>
          <div className="w-20 h-1 bg-brand-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              <h4 className="text-xl font-bold mb-4">{service.title}</h4>

              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="#about"
                className="text-brand-primary font-bold text-sm flex items-center gap-2 group"
              >
                Learn More{" "}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Modern E-commerce UI",
      category: "frontend",
      image: ecom,
      link: "https://e-shop-kappa-orpin.vercel.app/",
      desc: "A modern, responsive e-commerce interface with smooth navigation and user-friendly product browsing",
      tech: ["React", "Tailwind", "UI/UX"],
    },
    {
      title: "IT Solutions Business Website",
      category: "content",
      image: content,
      link: "https://hybric-tech-website.vercel.app/",
      desc: "Professional IT solutions website showcasing system integration and support with a clean, responsive UI",
      tech: ["React", "Tailwind", "Animations"],
    },
    {
      title: "React Landing Page",
      category: "frontend",
      image: landing,
      link: "https://landing-page-j3ee-git-master-nilamtambes-projects.vercel.app/",
      desc: "Clean and modern landing page built with React, optimized for responsiveness and high conversion user flow.",
      tech: ["React", "CSS", "Responsive"],
    },
    {
      title: "User-Focused SaaS Copy",
      category: "content",
      image: content2,
      link: "https://e-shop-kappa-orpin.vercel.app/",
      desc: "Engaging SaaS content crafted to enhance user understanding, improve engagement, and drive conversions effectively.",
      tech: ["Copywriting", "UX Writing"],
    },
    {
      title: "Portfolio for Creative Agency",
      category: "frontend",
      image: frontend,
      link: "https://assignment-service-manager.vercel.app/",
      desc: "Creative agency portfolio with visually appealing layout, smooth interactions, and modern UI design approach.",
      tech: ["HTML", "JavaScript", "Design"],
    },
    {
      title: "WordPress Themes",
      category: "frontend",
      image: wordpress,
      link: "http://nilamtambewebsite.rf.gd/",
      desc: "Custom-built WordPress themes with responsive design, flexible layouts, and easy content management features.",
      tech: ["WordPress", "CMS"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
              My Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">Work Highlights</h3>
          </div>

          <div className="flex gap-4">
            {["all", "frontend", "content"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // ✅ STAGGER ADDED
                key={project.title}
                className="group relative rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* GLASS BLUR OVERLAY */}
                <div className="absolute inset-0 backdrop-blur-md bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>

                  <h4 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h4>

                  <p className="text-white/90 text-sm mb-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-900 hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>

                    <a
                      href="https://github.com/nilamtambe?tab=repositories"
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-900 hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [showMsg, setShowMsg] = useState(false);

  const handleDownload = () => {
    window.open("/Frontend-Developer-Nilamt.pdf", "_blank");
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className="section-padding bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT WITH STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4"
          >
            About Me
          </motion.h2>

          <motion.h5
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Building Digital Experiences with Code & Content
          </motion.h5>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-slate-400 text-lg leading-relaxed mb-6"
          >
            I am a Frontend Developer with a background in Computer Science,
            skilled in HTML, CSS, JavaScript, WordPress, React, and modern UI
            design.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-slate-400 text-lg leading-relaxed mb-8"
          >
            Along with development, I create SEO-friendly and user-focused
            content for websites and blogs, helping businesses communicate
            better with their audience. I believe that a great product is not
            just about the code, but also about the story it tells.
          </motion.p>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-2 gap-8 mb-10"
          >
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <p className="text-3xl font-bold text-brand-primary mb-2">
                {statsInView ? (
                  <CountUp end={2.5} decimals={1} duration={2} />
                ) : (
                  "0"
                )}
                +
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                Years Experience
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <p className="text-3xl font-bold text-brand-secondary mb-2">
                {statsInView ? <CountUp end={10} duration={2} /> : "0"}+
              </p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">
                Projects Done
              </p>
            </motion.div>
          </motion.div>

          <motion.button
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            onClick={handleDownload}
            className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition"
          >
            Download CV
          </motion.button>

          {showMsg && (
            <div className="mt-3 bg-green-50 text-green-700 px-4 py-2 rounded-md text-sm inline-block shadow-sm">
              Download successfully
            </div>
          )}
        </motion.div>

        {/* IMAGE GRID WITH STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="h-48 rounded-2xl overflow-hidden"
            >
              <img src={img1} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="h-64 rounded-2xl overflow-hidden"
            >
              <img src={img2} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="space-y-4 pt-8">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="h-64 rounded-2xl overflow-hidden"
            >
              <img src={img3} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="h-48 rounded-2xl overflow-hidden"
            >
              <img src={img4} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyHireMe = () => {
  const points = [
    {
      title: "Clean & Modern UI",
      desc: "I design visually appealing, user-friendly interfaces that create a strong first impression and enhance user experience.",
      icon: "✨",
    },
    {
      title: "Responsive Design",
      desc: "All websites are fully responsive and optimized for mobile, tablet, and desktop for seamless performance.",
      icon: "📱",
    },
    {
      title: "Fast & Optimized",
      desc: "I build lightweight and optimized websites ensuring fast loading speed and better performance.",
      icon: "⚡",
    },
    {
      title: "Client-Focused Approach",
      desc: "I understand client needs and deliver solutions that help grow their business and online presence.",
      icon: "🎯",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
            Why Choose Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">Why Work With Me</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            I create modern, high-performing websites that not only look great
            but also help businesses grow and convert users into customers.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h4 className="text-xl font-bold mb-3">{item.title}</h4>

              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_iawj73q",
        "template_aqv6ydh",
        form,
        "Ta7tXenMmcBRwbFio",
      )
      .then(
        () => {
          setSubmitted(true);
          form.reset();
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Try again.");
        },
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT SIDE WITH STAGGER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="h-full"
          >
            <div className="bg-slate-50 p-10 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-8">Contact Information</h4>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail size={24} />,
                      title: "Email Me",
                      value: "nilamtambe9615@gmail.com",
                      color: "text-brand-primary",
                    },
                    {
                      icon: <Phone size={24} />,
                      title: "Mobile",
                      value: "+919623269148",
                      color: "text-brand-secondary",
                    },
                    {
                      icon: <Phone size={24} />,
                      title: "WhatsApp",
                      value: "Chat on WhatsApp",
                      link: "https://wa.me/919623269148",
                      color: "text-green-500",
                    },
                    {
                      icon: <Linkedin size={24} />,
                      title: "LinkedIn",
                      value: "linkedin.com/in/nilamtambe",
                      link: "https://www.linkedin.com/in/nilam-tambe-95a118211/",
                      color: "text-brand-accent",
                    },
                    {
                      icon: <Github size={24} />,
                      title: "GitHub",
                      value: "github.com/nilamtambe",
                      link: "https://github.com/nilamtambe",
                      color: "text-slate-700",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="flex items-center gap-6"
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.title}</p>
                        <p className="font-bold">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM WITH STAGGER */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-6 h-full flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/20"
              >
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mb-4">
                  <Sparkles size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input name="user_name" required type="text" placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-brand-primary outline-none" />

                    <input name="user_email" required type="email" placeholder="Your Email"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-brand-primary outline-none" />
                  </div>

                  <input name="subject" required type="text" placeholder="Project Subject"
                    className="w-full mt-6 px-6 py-4 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-brand-primary outline-none" />

                  <textarea name="message" required rows={5} placeholder="Tell me about your project..."
                    className="w-full mt-6 px-6 py-4 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-brand-primary outline-none resize-none"></textarea>
                </motion.div>

                <motion.button
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-brand-primary/25"
                >
                  Send Message
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};





const Footer = () => {
  const [activeSection, setActiveSection] = useState<
    "privacy" | "terms" | null
  >(null);

  return (
    <>
      <AnimatePresence>
        {activeSection === "privacy" && (
          <PrivacyPolicy onClose={() => setActiveSection(null)} />
        )}
        {activeSection === "terms" && (
          <Terms onClose={() => setActiveSection(null)} />
        )}
      </AnimatePresence>

      <footer className="border-t border-slate-100 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-6"
        >
          <div className="grid md:grid-cols-3 items-center gap-6 text-center md:text-left">

            {/* LEFT - SHORT INFO + SOCIAL */}
            <div>
              <h3 className="font-semibold">Nilam Tambe</h3>
              <p className="text-sm text-slate-500 mt-1">
                Frontend Dev & Content Writer
              </p>

              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/nilamtambe"
                  target="_blank"
                  className="text-slate-600 hover:text-brand-primary"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://www.linkedin.com/in/nilam-tambe-95a118211/"
                  target="_blank"
                  className="text-slate-600 hover:text-brand-primary"
                >
                  <Linkedin size={18} />
                </motion.a>
              </div>
            </div>

            {/* CENTER - NAV LINKS */}
            <div className="flex justify-center gap-6 text-sm">
              <a href="#home" className="text-slate-500 hover:text-brand-primary">Home</a>
              <a href="#services" className="text-slate-500 hover:text-brand-primary">Services</a>
              <a href="#portfolio" className="text-slate-500 hover:text-brand-primary">Work</a>
              <a href="#contact" className="text-slate-500 hover:text-brand-primary">Contact</a>
            </div>

            {/* RIGHT - LEGAL + BACK TO TOP */}
            <div className="flex items-center justify-center md:justify-end gap-4 text-sm">
              <button
                onClick={() =>
                  setActiveSection(
                    activeSection === "privacy" ? null : "privacy"
                  )
                }
                className="text-slate-500 hover:text-brand-primary"
              >
                Privacy
              </button>

              <button
                onClick={() =>
                  setActiveSection(
                    activeSection === "terms" ? null : "terms"
                  )
                }
                className="text-slate-500 hover:text-brand-primary"
              >
                Terms
              </button>

              {/* ARROW BUTTON */}
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-brand-primary text-lg"
              >
                ↑
              </motion.button>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="text-center text-xs text-slate-400 mt-4">
            © {new Date().getFullYear()} Nilam Tambe
          </div>
        </motion.div>
      </footer>
    </>
  );
};
// Common wrapper for animated sections with scroll
const SlideInSection = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-16 bg-slate-50 border-t border-slate-100 relative"
    >
      {/* Premium Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-800 hover:bg-brand-primary hover:text-white transition-colors"
      >
        <X size={20} />
      </button>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </motion.section>
  );
};

// Privacy Policy Section
const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => (
  <SlideInSection onClose={onClose}>
    <>
      <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Your privacy is important to me. Any personal information you provide,
        such as your name, email address, or message through the contact form,
        will only be used to respond to your inquiry.
      </p>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        I do not share, sell, or distribute your information to third parties.
        This website may use basic analytics or cookies to improve user
        experience.
      </p>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        By using this website, you agree to this policy.
      </p>
    </>
  </SlideInSection>
);

// Terms Section
const Terms = ({ onClose }: { onClose: () => void }) => (
  <SlideInSection onClose={onClose}>
    <>
      <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        By using this website, you agree to use the content and services for
        lawful purposes only. All designs, content, and projects displayed are
        the intellectual property of the owner.
      </p>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        You may not copy, reproduce, or reuse any content without permission.
      </p>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        I am not responsible for any issues, damages, or losses arising from the
        use of this website or any third-party links.
      </p>
    </>
  </SlideInSection>
);

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
      
          <Hero />
       

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <Portfolio />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <WhyHireMe />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>

        {/* <PrivacyPolicy />
         <Terms /> */}
      </main>
      <Footer />
    </div>
  );
}
