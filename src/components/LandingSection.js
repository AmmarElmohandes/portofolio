import React from "react";
import { Avatar, Heading, VStack, Text, Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from "../images/ChatGPT Image Jan 25, 2026, 06_51_40 PM.png";
import AmbientBackground from "./AmbientBackground";

// Create motion-enabled components
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const LandingSection = () => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#0f172a"
    >
      <AmbientBackground />
      <Container maxW="container.md">
        <MotionVStack
          spacing={6}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar with a pulse and fade-in */}
          <MotionBox
            p={1}
            borderRadius="full"
            bgGradient="linear(to-tr, cyan.400, blue.600)"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar
              name="Ammar Yasser"
              src={ProfilePic}
              size="2xl"
              border="4px solid #0f172a"
            />
          </MotionBox>

          <VStack spacing={2}>
            <MotionText
              fontSize="lg"
              fontWeight="medium"
              color="cyan.400"
              fontStyle="mono"
              variants={itemVariants}
            >
              Hello, I am Ammar Yasser
            </MotionText>
            <MotionHeading
              as="h1"
              size="3xl"
              textAlign="center"
              bgGradient="linear(to-r, white, gray.400)"
              bgClip="text"
              variants={itemVariants}
            >
              Frontend Engineer
            </MotionHeading>
          </VStack>

          <MotionBox
            w="60px"
            h="4px"
            bg="cyan.400"
            borderRadius="full"
            variants={itemVariants}
            animate={{
              width: ["0px", "60px"],
              transition: { duration: 1, delay: 0.5 }
            }}
          />

          <MotionText
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            color="gray.300"
            lineHeight="tall"
            fontWeight="light"
            variants={itemVariants}
          >
            Frontend engineer with 4+ years of experience building scalable,
            high-performance web applications using React, Next.js, and Angular.
            Strong background in fintech and e-commerce platforms.
          </MotionText>
        </MotionVStack>
      </Container>
    </FullScreenSection>
  );
};

export default LandingSection;