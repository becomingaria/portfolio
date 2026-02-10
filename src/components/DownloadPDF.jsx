import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function DownloadPDF({ className = '' }) {
  const [showModal, setShowModal] = useState(false);
  const fileURL = process.env.PUBLIC_URL + "/resumePDF/Aria_Software_Developer_Resume.pdf";

  function handleDownload() {
    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = "Aria's_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Also open in new window
    window.open(fileURL, "_blank");
    setShowModal(false);
  }

  function handlePreview() {
    window.open(fileURL, "_blank");
    setShowModal(false);
  }

  function handleClose() {
    setShowModal(false);
  }

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
  };

  const modalTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#333',
    marginBottom: '1.5rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };

  const buttonBaseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const primaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#4a90d9',
    color: '#fff',
  };

  const secondaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#e0e0e0',
    color: '#333',
  };

  const tertiaryButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: 'transparent',
    color: '#666',
    border: '1px solid #ccc',
  };

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`download-resume-btn ${className}`}
      >
        Download PDF
        <motion.span
          className="download-indicator"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
        >
          ↓
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            style={modalOverlayStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              style={modalContentStyle}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={modalTitleStyle}>Would you like to download the resume as a PDF?</h2>
              <div style={buttonContainerStyle}>
                <motion.button
                  style={primaryButtonStyle}
                  whileHover={{ scale: 1.02, backgroundColor: '#3a7bc8' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                >
                  Yes
                </motion.button>
                <motion.button
                  style={secondaryButtonStyle}
                  whileHover={{ scale: 1.02, backgroundColor: '#d0d0d0' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePreview}
                >
                  No, Just Preview
                </motion.button>
                <motion.button
                  style={tertiaryButtonStyle}
                  whileHover={{ scale: 1.02, backgroundColor: '#f5f5f5' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClose}
                >
                  No, take me back
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DownloadPDF;
