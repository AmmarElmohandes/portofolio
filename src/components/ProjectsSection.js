import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [

  {
    title: "Gooding",
    description:
      "Developed an automotive auction platform using React and Gatsby, owning the end-to-end user flows for registration and payments. Integrated Contentful CMS and OAuth/Auth0 while refactoring legacy code for improved maintainability.",
    getImageSrc: () => require("../images/gooding_2.png"),
    link: "https://www.goodingco.com/"
  },
  {
    title: "Geidea Dashboard",
    description:
      "Contributed to a high-performance fintech analytics platform using Angular. Developed modules within a micro-frontend architecture, implementing dynamic data visualizations and reporting features for operational insights.",
    getImageSrc: () => require("../images/geiddea_2.webp"),
  },
  {
    title: "XPay Fintech Platform",
    description:
      "Architected secure, real-time fintech dashboards and payment interfaces using Next.js and Angular. Orchestrated complex data flows and optimized UI components to ensure reliability across high-traffic financial platforms.",
    getImageSrc: () => require("../images/xpay_2.png"),
  },
  {
    title: "MUAB",
    description:
      "Built a social media-driven e-commerce platform from scratch using React and Next.js. Boosted frontend performance by 30% through optimized data-fetching strategies and reusable UI components.",
    getImageSrc: () => require("../images/muab_2.png"),
  },
  {
    title: "Shopify AI Chatbot Plugin",
    description:
      "Engineered a full-stack Shopify plugin utilizing OpenAI, Pinecone, and Remix. Successfully reduced customer support load by 40% by automating responses with high-accuracy contextual AI.",
    getImageSrc: () => require("../images/shopify.webp"),
  },
  {
    title: "OpenAI Chrome Extension",
    description:
      "Developed an AI-powered browser utility leveraging OpenAI APIs for real-time article summarization and query handling. Implemented efficient background processing logic for instant user insights.",
    getImageSrc: () => require("../images/chrome.avif"),
  },
  {
    title: "RM (Resource Management)",
    description:
      "Developed a scheduling and forecasting dashboard designed for workforce optimization. Built complex data visualization modules to track real-time resource allocation and improve project planning accuracy.",
    getImageSrc: () => require("../images/rm.webp"),
  },
  {
    title: "Huda",
    description:
      "Delivered a comprehensive internal management dashboard for course and teacher administration. Streamlined administrative workflows with a focus on intuitive UI and accessible data entry.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0f172a" // Deep Slate for a modern, professional look
      isDarkBackground
      p={8}
      py={16}
      alignItems="flex-start"
    >
      <VStack spacing={2} alignItems="flex-start" mb={10}>
        <Text color="cyan.400" fontWeight="bold" letterSpacing="widest" fontSize="sm">
          PORTFOLIO
        </Text>
        <Heading as="h1" id="projects-section" size="2xl">
          Featured Projects
        </Heading>
        <Box w="80px" h="3px" bg="cyan.400" borderRadius="full" />
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 2 }} // Stack on mobile, side-by-side on desktop
        spacing={10}
        width="100%"
      >
        {projects.map((project) => (
          <Box
            key={project.title}
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.02)" }} // Subtle hover lift
          >
            <Card
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              link={project.link}
            />
          </Box>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;