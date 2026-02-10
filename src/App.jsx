import './App.css';
import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWipeNavigate } from './components/WipeTransition';

// Components
import Loading from './components/Loading';
import Header from './components/Header';

// Lazy-loaded pages for better performance
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const wipeNavigate = useWipeNavigate();

  // Handle scrolling to section from query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section) {
      // Small delay to ensure refs are ready
      setTimeout(() => {
        const sectionRefs = {
          home: headerRef,
          about: aboutRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        };

        const targetRef = sectionRefs[section];
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.search]);

  // Track sections with Intersection Observer
  useEffect(() => {
    const sections = [
      { id: 'home', ref: headerRef },
      { id: 'about', ref: aboutRef },
      { id: 'skills', ref: skillsRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const observerOptions = {
      root: null, // viewport
      rootMargin: '-20% 0px -70% 0px', // trigger when section is in top 30% of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId && sectionId !== activeSectionRef.current) {
            activeSectionRef.current = sectionId;
            setActiveSection(sectionId);
            // Use clean URL for home, query param for others
            if (sectionId === 'home') {
              window.history.replaceState(null, '', '/');
            } else {
              window.history.replaceState(null, '', `/?section=${sectionId}`);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section function and update URL
  const scrollToSection = (sectionRef, sectionId) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      navigate('/', { replace: true });
    } else {
      navigate(`/?section=${sectionId}`, { replace: true });
    }
  };

  // Navigate to resume page with wipe transition
  const navigateToResume = () => {
    wipeNavigate('/resume', 'left');
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', ref: headerRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
    { id: 'resume', label: 'Resume', isResumeDownload: true }
  ];

  return (
    <div className="smooth-scroll-container">
      {/* Navigation Bar */}
      <nav className="fixed-nav">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                if (item.isResumeDownload) {
                  navigateToResume();
                } else {
                  scrollToSection(item.ref, item.id);
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Consolidated Header Component */}
      <div ref={headerRef} data-section="home" className="portfolio header-section">
        <Header />
      </div>


      {/* Main Content */}
      <div className="sections-container">
        {/* About Section */}
        <motion.section
          ref={aboutRef}
          data-section="about"
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <About key={location.key} />
          </Suspense>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          data-section="skills"
          className="section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Skills />
          </Suspense>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          data-section="projects"
          className="section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          data-section="contact"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </motion.section>

      </div>
    </div>
  );
}

export default App;
