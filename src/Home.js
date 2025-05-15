import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faTools, faEnvelope, faPhone, faEnvelopeOpen, faEye  } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      <div className="header-container">
    <img
      src="/document/AJ.png"
     
      alt="Ajay Pandena"
      className="profile-image"
    />
    <h1 className="gradient-name">Ajay Pandena</h1>
  </div>
      
      <p>A passionate web developer!</p>

      {/* Document Section */}
      <div className="document-section">
        <button onClick={openModal} className="view-document-button">
          <FontAwesomeIcon icon={faEye} style={{ marginRight: '6px' }} />
          Resume
        </button>

        {/* Modal for document */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={closeModal} className="close-modal-button">Close</button>
              <iframe
                src="/documents/resume.pdf"
                width="100%"
                height="500px"
                title="Document"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href="https://github.com/ajaypandena"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark me-2"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ajay-pandena-907013302/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Skills Section */}
      <h2 className="skills">
        <FontAwesomeIcon icon={faTools} className="icon" /> Skills
      </h2>
      <div className="skills-list">
        <span>ReactJS</span>
        <span>.NET(C#)</span>
        <span>ADF</span>
        <span>SQL</span>
        <span>ASP.NET MVC</span>
      </div>

      {/* Projects Section */}
      <h3 className="Projects">
        <FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Projects
      </h3>
      <div className="project-list">
        <div className="project-card">
          <h4>Portfolio Website</h4>
          <p>A personal website built with ASP.NET MVC showcasing skills, projects, and contact info.</p>
          <a
            href="https://github.com/ajaypandena/MyPortfolioMVC.git"
            target="_blank"
            rel="noopener noreferrer"
            className="view-project-button"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h4>Task Manager App</h4>
          <p>A task management app built with React and .NET.</p>
          <a
            href="#"
            className="view-project-button unauthorized-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Unauthorized to view this project.');
            }}
          >
            View Project
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <h5 className="Contact">
        <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
      </h5>
      <div className="contact-info" style={{ fontSize: '1rem' }}>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} className="contact-icon" />
          <a href="mailto:ajaypandena19@gmail.com" style={{ fontSize: '1rem' }}>
  ajaypandena19@gmail.com
</a>
          {/*Email: <a href="mailto:ajaypandena19@gmail.com">ajaypandena19@gmail.com</a>*/}
        </p>
        <p className="phone-container" style={{ fontSize: '1rem' }}>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span className="hidden-phone">Phone</span>
          <span className="phone-number">+91-8500664243</span>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ajay Pandena. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
