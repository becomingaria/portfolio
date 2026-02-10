import React from 'react';
import { motion } from 'framer-motion';
import ClipboardListItem from "../components/ClipboardListItem";
import TypeOut from "../components/TypeOut";
import contactItems from "../data/contactData";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Transform contact items for rendering
  const renderableContactItems = contactItems.map(item => ({
    label: item.label,
    content: item.label === "Name" || item.label === "Email" ?
      <ClipboardListItem text={item.content} /> :
      (item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.icon && <img src={item.icon} alt={item.label} />}
        {!item.icon && item.content}
      </a> : item.content),
    icon: item.icon
  }));

  return (
    <section className="contact">
      <h2><TypeOut inputString="Let's Connect" typeSpeed={50} /></h2>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {renderableContactItems.map((item, index) => (
          <motion.li
            key={item.label}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="contact-label">{item.label}:</span> {item.content}
          </motion.li>
        ))}
      </motion.main>

    </section>
  );
};

export default Contact;
