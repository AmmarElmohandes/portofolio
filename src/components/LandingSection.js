import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from "../images/profile.jpeg";
const greeting = "Hello, I am Ammar!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const description =
  "Front-end developer with 3+ years of experience building scalable, high-performance applications using React, Next.js, and TypeScript. Strong background in UI optimization, accessibility, component architecture, and API integration. Proven ability to deliver production-grade solutions for e-commerce, dashboards, and AI-driven platforms. Experienced in cross‑functional collaboration and delivering measurable impact such as performance boosts, automation, and reduced support load.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="Ammar Yasser" src={ProfilePic} size="2xl" />
    <Text>{greeting}</Text>
    <Heading>{bio1}</Heading>
    <Heading marginBottom="1rem">{bio2}</Heading>
    <Text textStyle="2xl">{description}</Text>
  </FullScreenSection>
);

export default LandingSection;
