import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "XPay Fintech Platform",
    description:
      "React, TypeScript, Fintech Systems Developing and maintaining secure, real-time fintech dashboards and payment interfaces. Implementing optimized UI flows, reusable components, and performance improvements for large-scale financial operations",
    getImageSrc: () => require("../images/xpay.png"),
  },
  {
    title: "Gooding",
    description:
      "Implemented front-end integration with backend APIs, converted Figma designs into production UI, and delivered multiple microsite pages.",
    getImageSrc: () => require("../images/gooding.png"),
    link: "https://www.goodingco.com/"
  },
  {
    title: "Geidea Dashboard",
    description:
      "Implemented new features to Geidea dashboard along with working with microfonted and fixing bugs",
    getImageSrc: () => require("../images/geidea.png"),
  },
  {
    title: "MUAB",
    description:
      "Built this social media courses website from scratch . Improved frontend performance by 30% through optimized data-fetching strategies and UI rendering improvements.",
    getImageSrc: () => require("../images/muab.png"),
  },
  {
    title: "Shopify AI Chatbot Plugin",
    description:
      "Developed a full-stack chatbot that automates customer support on Shopify stores, reducing support load and improving response accuracy.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "OpenAI Chrome Extension",
    description:
      "Browser extension that summarizes articles and answers user queries using AI.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "RM",
    description:
      "Scheduling and forecasting dashboard enabling efficient team utilization.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },

  {
    title: "Huda",
    description:
      "Dashboard to mange courses and teachers",
    getImageSrc: () => require("../images/photo4.jpg"),
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
