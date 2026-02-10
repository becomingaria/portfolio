import React, { useState, useEffect } from 'react';
import TypeOut from '../components/TypeOut';
import { motion } from 'framer-motion';

// Import local images
import jsImage from '../images/javascript.png';
import tsImage from '../images/typescript.png';
import htmlImage from '../images/html.png';
import cssImage from '../images/css.png';
import pythonImage from '../images/python.png';
import phpImage from '../images/php.png';

import reactImage from '../images/react.png';
import nodeImage from '../images/node.png';
import expressImage from '../images/express.png';
import nextjsImage from '../images/nextjs.png';
import djangoImage from '../images/django.png';
import flaskImage from '../images/flask.png';
import tailwindImage from '../images/tailwind.png';
import bulmaImage from '../images/bulma.png';
import framerMotionImage from '../images/framer-motion.png';
import electronImage from '../images/electron.png';
import viteImage from '../images/vite.png';

import mongodbImage from '../images/mongodb.png';
import postgresqlImage from '../images/postgresql.png';
import rdsImage from '../images/rds.png';
import sqlImage from '../images/sql.png';
import timestreamImage from '../images/timestream.png';
import auroraImage from '../images/aurora.png';
import sqliteImage from '../images/sqlite.png';
import ddbImage from '../images/ddb.png';

import gitImage from '../images/git.png';
import githubImage from '../images/github.png';
import netlifyImage from '../images/netlify.png';
import herokuImage from '../images/heroku.png';
import vercelImage from '../images/vercel.png';
import s3Image from '../images/s3.png';
import cloudfrontImage from '../images/cloudfront.png';
import koyebImage from '../images/koyeb.png';
import railwayImage from '../images/railway.png';
import route53Image from '../images/route-53.png';
import elbImage from '../images/elastic-beanstalk.png';

import vscodeImage from '../images/vs-code.png';
import npmImage from '../images/node.png';
import postmanImage from '../images/postman.png';
import canvaImage from '../images/canva.png';
import jiraImage from '../images/jira.png';
import slackImage from '../images/slack.png';
import trelloImage from '../images/trello.png';
import notionImage from '../images/notion.png';
import discordImage from '../images/discord.png';
import bashImage from '../images/bash.png';
import miroImage from '../images/miro.png';
import office365Image from '../images/office-365.png';
import bitbucketPipelinesImage from '../images/bitbucket-pipelines.png';

// AWS Images
import awsCdkImage from '../images/aws-cdk.png';
import lambdaImage from '../images/lambda.png';
import apiGatewayImage from '../images/api-gateway.png';
import iamImage from '../images/iam.png';
import cloudWatchImage from '../images/cloudwatch.png';
import cloudFormationImage from '../images/cloudformation.png';
import secretsManagerImage from '../images/secrets-manager.png';
import snsImage from '../images/sns.png';
import sqsImage from '../images/sqs.png';
import ec2Image from '../images/ec2.png';
import ecsImage from '../images/ecs.png';
import cloudPractitionerImage from '../images/cloud-practicioner.png';
import awsCliImage from '../images/aws-cli.png';
import awsSolutionsArchitectImage from '../images/aws-solutions-architect.png';
import iotCoreImage from '../images/iot-core.png';
import glueImage from '../images/glue.png';
import sssmImage from '../images/ssm.png';
import codeBuildImage from '../images/codebuild.png';
import codeCommitImage from '../images/codecommit.png';
import codeDeployImage from '../images/codedeploy.png';
import codePipelineImage from '../images/codepipeline.png';
import gaGraduateImage from '../images/ga-graduate.png';
import lorawanImage from '../images/lorawan.png';
import stepFunctionsImage from '../images/step-functions.png';
import quicksightImage from '../images/quicksight.png';

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Add progressive loading of skill categories
  useEffect(() => {
    const categories = ['languages', 'frameworks', 'databases', 'deployment', 'tools', 'aws', 'certifications', 'other'];

    // Create a staggered loading effect for categories
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < categories.length) {
        setVisibleCategories(prev => [...prev, categories[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for skills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Skill categories with local images and reference URLs
  // These are exported for use in the Resume component via skillsData.js
  const languages = [
    { name: "JavaScript", icon: jsImage, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: tsImage, url: "https://www.typescriptlang.org/" },
    { name: "HTML5", icon: htmlImage, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: cssImage, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Python", icon: pythonImage, url: "https://www.python.org/" },
    { name: "PHP", icon: phpImage, url: "https://www.php.net/" },
    { name: "SQL", icon: sqlImage, url: "https://www.w3schools.com/sql/" },
  ];

  const frameworks = [
    { name: "React", icon: reactImage, url: "https://reactjs.org/" },
    { name: "Node.js", icon: nodeImage, url: "https://nodejs.org/" },
    { name: "Express", icon: expressImage, url: "https://expressjs.com/" },
    { name: "Next.js", icon: nextjsImage, url: "https://nextjs.org/" },
    { name: "Django", icon: djangoImage, url: "https://www.djangoproject.com/" },
    { name: "Flask", icon: flaskImage, url: "https://flask.palletsprojects.com/" },
    { name: "Tailwind CSS", icon: tailwindImage, url: "https://tailwindcss.com/" },
    { name: "Bulma CSS", icon: bulmaImage, url: "https://bulma.io/" },
    { name: "Framer Motion", icon: framerMotionImage, url: "https://www.framer.com/motion/" },
    { name: "Electron", icon: electronImage, url: "https://www.electronjs.org/" },
    { name: "Vite", icon: viteImage, url: "https://vitejs.dev/" },
  ];

  const databases = [
    { name: "MongoDB", icon: mongodbImage, url: "https://www.mongodb.com/" },
    { name: "PostgreSQL", icon: postgresqlImage, url: "https://www.postgresql.org/" },
    { name: "SQLite", icon: sqliteImage, url: "https://www.sqlite.org/" },
    { name: "DynamoDB", icon: ddbImage, url: "https://aws.amazon.com/dynamodb/" },
    { name: "Amazon RDS", icon: rdsImage, url: "https://aws.amazon.com/rds/" },
    { name: "Amazon Aurora", icon: auroraImage, url: "https://aws.amazon.com/rds/aurora/" },
    { name: "Amazon Timestream", icon: timestreamImage, url: "https://aws.amazon.com/timestream/" },
  ];

  const deployment = [
    { name: "Git", icon: gitImage, url: "https://git-scm.com/" },
    { name: "GitHub", icon: githubImage, url: "https://github.com/" },
    { name: "Netlify", icon: netlifyImage, url: "https://www.netlify.com/" },
    { name: "Heroku", icon: herokuImage, url: "https://www.heroku.com/" },
    { name: "Vercel", icon: vercelImage, url: "https://vercel.com/" },
    { name: "Amazon S3", icon: s3Image, url: "https://aws.amazon.com/s3/" },
    { name: "Amazon CloudFront", icon: cloudfrontImage, url: "https://aws.amazon.com/cloudfront/" },
    { name: "Koyeb", icon: koyebImage, url: "https://www.koyeb.com/" },
    { name: "Railway", icon: railwayImage, url: "https://railway.app/" },
    { name: "Route 53", icon: route53Image, url: "https://aws.amazon.com/route53/" },
    { name: "Elastic Beanstalk", icon: elbImage, url: "https://aws.amazon.com/elasticbeanstalk/" },
  ];

  const tools = [
    { name: "VS Code", icon: vscodeImage, url: "https://code.visualstudio.com/" },
    { name: "npm", icon: npmImage, url: "https://www.npmjs.com/" },
    { name: "Postman", icon: postmanImage, url: "https://www.postman.com/" },
    { name: "Canva", icon: canvaImage, url: "https://www.canva.com/" },
    { name: "Jira", icon: jiraImage, url: "https://www.atlassian.com/software/jira" },
    { name: "Slack", icon: slackImage, url: "https://slack.com/" },
    { name: "Trello", icon: trelloImage, url: "https://trello.com/" },
    { name: "Notion", icon: notionImage, url: "https://www.notion.so/" },
    { name: "Discord", icon: discordImage, url: "https://discord.com/" },
    { name: "Bash", icon: bashImage, url: "https://www.gnu.org/software/bash/" },
    { name: "Miro", icon: miroImage, url: "https://miro.com/" },
    { name: "Office 365", icon: office365Image, url: "https://www.office.com/" },
    { name: "Bitbucket Pipelines", icon: bitbucketPipelinesImage, url: "https://bitbucket.org/product/features/pipelines" },
  ];

  const aws = [
    { name: "AWS CDK", icon: awsCdkImage, url: "https://aws.amazon.com/cdk/" },
    { name: "Lambda", icon: lambdaImage, url: "https://aws.amazon.com/lambda/" },
    { name: "API Gateway", icon: apiGatewayImage, url: "https://aws.amazon.com/api-gateway/" },
    { name: "IAM", icon: iamImage, url: "https://aws.amazon.com/iam/" },
    { name: "CloudWatch", icon: cloudWatchImage, url: "https://aws.amazon.com/cloudwatch/" },
    { name: "CloudFormation", icon: cloudFormationImage, url: "https://aws.amazon.com/cloudformation/" },
    { name: "Secrets Manager", icon: secretsManagerImage, url: "https://aws.amazon.com/secrets-manager/" },
    { name: "SNS", icon: snsImage, url: "https://aws.amazon.com/sns/" },
    { name: "SQS", icon: sqsImage, url: "https://aws.amazon.com/sqs/" },
    { name: "EC2", icon: ec2Image, url: "https://aws.amazon.com/ec2/" },
    { name: "ECS", icon: ecsImage, url: "https://aws.amazon.com/ecs/" },
    { name: "AWS CLI", icon: awsCliImage, url: "https://aws.amazon.com/cli/" },
    { name: "IoT Core", icon: iotCoreImage, url: "https://aws.amazon.com/iot-core/" },
    { name: "Glue", icon: glueImage, url: "https://aws.amazon.com/glue/" },
    { name: "Systems Manager", icon: sssmImage, url: "https://aws.amazon.com/systems-manager/" },
    { name: "CodeBuild", icon: codeBuildImage, url: "https://aws.amazon.com/codebuild/" },
    { name: "CodeCommit", icon: codeCommitImage, url: "https://aws.amazon.com/codecommit/" },
    { name: "CodeDeploy", icon: codeDeployImage, url: "https://aws.amazon.com/codedeploy/" },
    { name: "CodePipeline", icon: codePipelineImage, url: "https://aws.amazon.com/codepipeline/" },
    { name: "Step Functions", icon: stepFunctionsImage, url: "https://aws.amazon.com/step-functions/" },
    { name: "QuickSight", icon: quicksightImage, url: "https://aws.amazon.com/quicksight/" },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", icon: cloudPractitionerImage, url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
    { name: "AWS Solutions Architect", icon: awsSolutionsArchitectImage, url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
    { name: "General Assembly Graduate", icon: gaGraduateImage, url: "https://generalassemb.ly/" },
  ];

  const other = [
    { name: "LoRaWAN", icon: lorawanImage, url: "https://lora-alliance.org/about-lorawan/" },
  ];

  // Style for rounded images
  const roundedImageStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out',
  };

  // Render a category of skills - Updated for progressive loading
  const renderSkillCategory = (category, title, categoryId) => (
    visibleCategories.includes(categoryId) && (
      <>
        <h3>{title}</h3>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {category.map((skill) => (
            <motion.li key={skill.name} variants={itemVariants}>
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Learn more about ${skill.name}`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={roundedImageStyle}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <span>{skill.name}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </>
    )
  );

  return (
    <section className="skills">
      <h2><TypeOut inputString="Skills & Technologies" typeSpeed={50} /></h2>

      {renderSkillCategory(languages, "Programming Languages", "languages")}
      {renderSkillCategory(frameworks, "Frameworks & Libraries", "frameworks")}
      {renderSkillCategory(databases, "Databases", "databases")}
      {renderSkillCategory(deployment, "Deployment & Version Control", "deployment")}
      {renderSkillCategory(tools, "Tools & Utilities", "tools")}
      {renderSkillCategory(aws, "AWS Services", "aws")}
      {renderSkillCategory(certifications, "Certifications", "certifications")}
      {renderSkillCategory(other, "Other Technologies", "other")}
    </section>
  );
};

export default Skills;

