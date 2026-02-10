import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, pdf } from '@react-pdf/renderer';
import resumeData from '../data/resumeData';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  contactItem: {
    fontSize: 9,
    color: '#555',
    marginRight: 15,
  },
  contactLink: {
    fontSize: 9,
    color: '#0066cc',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 3,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#333',
    textAlign: 'justify',
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#444',
    marginBottom: 2,
  },
  skillList: {
    fontSize: 9,
    color: '#555',
    lineHeight: 1.3,
  },
  job: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#222',
  },
  jobYears: {
    fontSize: 9,
    color: '#666',
  },
  jobCompany: {
    fontSize: 9,
    color: '#444',
    marginBottom: 3,
  },
  bulletList: {
    paddingLeft: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 9,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#333',
    lineHeight: 1.3,
  },
  project: {
    marginBottom: 6,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#222',
  },
  projectType: {
    fontSize: 8,
    color: '#666',
    backgroundColor: '#f0f0f0',
    padding: '2 6',
    borderRadius: 3,
  },
  projectDescription: {
    fontSize: 9,
    color: '#444',
    lineHeight: 1.3,
  },
  educationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  educationName: {
    fontSize: 9,
    color: '#333',
  },
  educationYear: {
    fontSize: 9,
    color: '#666',
  },
  interestsList: {
    fontSize: 9,
    color: '#555',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    fontSize: 8,
    color: '#999',
  },
});

// Resume PDF Document Component
const ResumePDFDocument = () => {
  // Get first 4 projects for the resume
  const displayProjects = resumeData.projects.slice(0, 4);

  return (
    <Document>
      {/* Page 1 */}
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name}</Text>
          <Text style={styles.title}>{resumeData.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{resumeData.contact.phone}</Text>
            <Link style={styles.contactLink} src={`mailto:${resumeData.contact.email}`}>
              {resumeData.contact.email}
            </Link>
            <Link style={styles.contactLink} src={resumeData.contact.linkedin}>
              LinkedIn
            </Link>
            <Link style={styles.contactLink} src={resumeData.contact.github}>
              GitHub
            </Link>
            <Link style={styles.contactLink} src={resumeData.contact.portfolio}>
              Portfolio
            </Link>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{resumeData.summary}</Text>
        </View>

        {/* Skills - Two Column Layout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <View style={styles.skillCategory}>
                <Text style={styles.skillLabel}>Languages:</Text>
                <Text style={styles.skillList}>
                  {resumeData.technicalSkills.languages.join(', ')}
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillLabel}>Professional:</Text>
                <Text style={styles.skillList}>
                  {resumeData.expertise.professional.join(', ')}
                </Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.skillCategory}>
                <Text style={styles.skillLabel}>Tools & Frameworks:</Text>
                <Text style={styles.skillList}>
                  {resumeData.technicalSkills.tools.join(', ')}
                </Text>
              </View>
              <View style={styles.skillCategory}>
                <Text style={styles.skillLabel}>Technical:</Text>
                <Text style={styles.skillList}>
                  {resumeData.expertise.technical.join(', ')}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {resumeData.professionalExperience.map((job, index) => (
            <View key={index} style={styles.job}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobYears}>{job.years}</Text>
              </View>
              <Text style={styles.jobCompany}>{job.company} — {job.location}</Text>
              <View style={styles.bulletList}>
                {job.achievements.map((achievement, i) => (
                  <View key={i} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{achievement}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.pageNumber}>1</Text>
      </Page>

      {/* Page 2 */}
      <Page size="LETTER" style={styles.page}>
        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {displayProjects.map((project, index) => (
            <View key={index} style={styles.project}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectType}>{project.type}</Text>
              </View>
              <View style={styles.bulletList}>
                {project.description.map((desc, i) => (
                  <View key={i} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{desc}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education & Certifications</Text>
          {resumeData.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationName}>{edu.name}</Text>
              <Text style={styles.educationYear}>{edu.year || edu.years}</Text>
            </View>
          ))}
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.interestsList}>
            {resumeData.interests.join(' • ')}
          </Text>
        </View>

        <Text style={styles.pageNumber}>2</Text>
      </Page>
    </Document>
  );
};

// Function to generate and download the PDF
export const downloadResumePDF = async () => {
  try {
    const blob = await pdf(<ResumePDFDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Aria_Hallow_Resume_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};

export default ResumePDFDocument;
