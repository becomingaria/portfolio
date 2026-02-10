import React, { useEffect, useState } from 'react';
import { downloadResumePDF } from '../components/ResumePDF';
import '../styles/Resume.css';
import '../styles/ResumePrint.css';
import '../App.css';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useWipeNavigate } from '../components/WipeTransition';

const Resume = () => {
  // State to hold resume data
  const [resumeData, setResumeData] = useState(null);
  // State to track errors
  const [error, setError] = useState(null);
  // State to track print-friendly mode
  const [isPrintFriendly, setIsPrintFriendly] = useState(false);

  // Get current location to determine if this is a standalone resume page
  const location = useLocation();
  const wipeNavigate = useWipeNavigate();
  const isStandalonePage = location.pathname === '/resume';

  // Set print-friendly mode when opened as standalone page
  useEffect(() => {
    if (isStandalonePage && resumeData) {
      setIsPrintFriendly(true);
    }
  }, [isStandalonePage, resumeData]);

  // Handle download action
  const handleDownload = async () => {
    await downloadResumePDF();
  };

  // Fetch projects and skills data when component mounts
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Add a small timeout to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 300));

        // Import resume data without the query parameter that's causing issues
        const resumeModule = await import('../data/resumeData');

        if (!resumeModule || !resumeModule.default) {
          throw new Error("Resume data module is empty or invalid");
        }

        // Get the latest contact data
        const contactDataModule = await import('../data/contactData');

        if (!contactDataModule || !contactDataModule.default) {
          console.warn("Contact data module is empty or invalid, using resume data as is");
        }

        // Create a copy of the resume data
        const updatedResumeData = { ...resumeModule.default };

        // Validate that required sections exist in the data
        if (!updatedResumeData.technicalSkills || !updatedResumeData.projects) {
          console.warn("Resume data is missing required sections, using default data");
        }

        // Update the email from contact data if available
        if (contactDataModule && contactDataModule.default) {
          const contactItems = contactDataModule.default;
          const emailItem = contactItems.find(item => item.label === "Email");

          if (emailItem && emailItem.content) {
            updatedResumeData.contact.email = emailItem.content;
          }
        }

        setResumeData(updatedResumeData);
      } catch (error) {
        console.error("Error loading resume data:", error);
        setError("Failed to load resume data. Please try refreshing.");
      }
    };

    fetchResumeData();
  }, []);

  if (error) {
    return (
      <div className="resume-error">
        <div>
          <p>Error: {error}</p>
          <button
            className="refresh-resume-btn"
            onClick={() => {
              setError(null);
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="resume-loading">
        <div>
          <p>Loading resume data...</p>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Fixed Navigation Bar - shown on standalone page */}
      {isStandalonePage && (
        <nav className="fixed-nav" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <ul>
            <li onClick={() => wipeNavigate('/', 'right')}>Home</li>
            <li onClick={() => wipeNavigate('/?section=about', 'right')}>About</li>
            <li onClick={() => wipeNavigate('/?section=skills', 'right')}>Skills</li>
            <li onClick={() => wipeNavigate('/?section=projects', 'right')}>Projects</li>
            <li onClick={() => wipeNavigate('/?section=contact', 'right')}>Contact</li>
            <li className="active">Resume</li>
          </ul>
        </nav>
      )}

      <div className={`resume-container light-mode ${isPrintFriendly ? 'print-friendly' : ''}`} style={{
        '--text-color': '#333',
        '--background-color': '#fff',
        '--card-background': '#f9f9f9',
        '--secondary-color': '#555',
        color: '#333',
        backgroundColor: '#fff'
      }}>
        <div className="resume-header-branding">
          {/* A | H Symbol in a circle */}
          <div style={{
            width: '4.4em',
            height: '4.4em',
            borderRadius: '50%',
            background: '#fff',
            color: '#222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '2.2em',
            letterSpacing: '0.1em',
            marginRight: '1em',
            border: '2px solid #888',
            boxShadow: '0 1px 4px #0001',
          }}>
            <span style={{ fontWeight: 700, color: '#111' }}>A</span>
            <span style={{ color: '#111', fontWeight: 700, margin: '0 0.2em' }}>|</span>
            <span style={{ fontWeight: 700, color: '#444' }}>H</span>
          </div>
          {/* Name to the right of the circle */}
          <div className="resume-header" style={{ marginBottom: 0, flex: 1 }}>
            <h1 style={{ marginBottom: 0, fontSize: '1.7em', fontWeight: 700 }}>{resumeData.name}</h1>
          </div>
        </div>
        <div className="resume-columns">
          {/* Sidebar */}
          <div className="resume-column sidebar">
            <section className="resume-title-contact">
              <h3 style={{ marginTop: 0 }}>Title & Contact</h3>
              <div style={{ fontWeight: 600, fontSize: '12pt', marginBottom: '0.5em' }}>{resumeData.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em' }}>
                <img src={require('../images/phone.png')} alt="Phone" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
                {resumeData.contact.phone}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em' }}>
                <img src={require('../images/email.png')} alt="Email" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
                {resumeData.contact.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
                <img src={require('../images/github.png')} alt="GitHub" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
                github.com/becomingaria
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
                <img src={require('../images/LinkedIn.png')} alt="LinkedIn" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
                in/zakariah-om/
              </div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '10.5pt', marginBottom: '0.2em', wordBreak: 'break-all' }}>
                <img src={require('../images/portfolio.png')} alt="Portfolio" style={{ width: '1.7em', height: '1.7em', marginRight: '0.7em', filter: 'drop-shadow(0 0 1px #2222)' }} />
                ariahallow.dev
              </div>
            </section>
            <section className="resume-skills">
              <h3>Technical Skills</h3>
              <div className="skills-category">
                <h4>Languages</h4>
                <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.technicalSkills.languages.join(', ')}</div>
              </div>
              <div className="skills-category">
                <h4>Tools & Frameworks</h4>
                <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.technicalSkills.tools.join(', ')}</div>
              </div>
            </section>
            <section className="resume-expertise">
              <h3>Expertise</h3>
              <div className="expertise-category">
                <h4>Professional</h4>
                <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.expertise.professional.join(', ')}</div>
              </div>
              <div className="expertise-category">
                <h4>Technical</h4>
                <div style={{ fontSize: '10pt', marginBottom: '0.3em' }}>{resumeData.expertise.technical.join(', ')}</div>
              </div>
            </section>
            <div className="pdf-page-break" style={{ paddingTop: '0.5in' }} />
            <section className="resume-education">
              <h3>Education</h3>
              <ul className="education-list">
                {resumeData.education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.name}</strong>
                    <span style={{ float: 'right' }}>{edu.year || edu.years}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="resume-interests">
              <h3>Interests</h3>
              <div style={{ fontSize: '10pt' }}>{resumeData.interests.join(', ')}</div>
            </section>
          </div>
          {/* Main Content */}
          <div className="resume-column">
            <section className="resume-summary">
              <h3>Professional Summary</h3>
              <p style={{ fontSize: '10.5pt' }}>{resumeData.summary}</p>
            </section>
            <section className="resume-experience">
              <h3>Professional Experience</h3>
              {resumeData.professionalExperience.map((job, index) => (
                job.company !== 'Starbucks' && (
                  <React.Fragment key={index}>
                    <div className="resume-job">
                      <div className="job-header">
                        <p className="job-company" style={{ fontWeight: 600, marginBottom: 0 }}>{job.company} — {job.location}</p>
                        <span className="job-years" style={{ fontSize: '10pt', color: '#555' }}>{job.years}</span>
                      </div>
                      <ul style={{ margin: '0.3em 0', paddingLeft: '1.2em' }}>
                        {job.achievements.map((achievement, i) => (
                          <li key={i} style={{ fontSize: '10.5pt', marginBottom: '0.1em' }}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                )
              ))}
            </section>
            <section className="resume-projects">
              <h3>Projects</h3>
              <div className="projects-grid">
                {/* Show 6 projects in vertical format */}
                {resumeData.projects.slice(0, 6).map((project, index) => (
                  <div className="resume-project" key={index} style={{ marginBottom: '0.25em' }}>
                    <div className="project-header">
                      <h4>{project.name}</h4>
                      <span className={`project-type ${project.type.toLowerCase()}`}>{project.type}</span>
                    </div>
                    <ul style={{ margin: '0.2em 0' }}>
                      {project.description.map((desc, i) => (
                        <li key={i} style={{ marginBottom: '0.05em', fontSize: '9.5pt' }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Download Resume Button - shown on standalone page */}
        {isStandalonePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 0',
              marginTop: '1rem',
            }}
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="download-resume-btn"
            >
              Download Resume
              <span style={{ fontSize: '1.2rem' }}>↓</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Resume;
