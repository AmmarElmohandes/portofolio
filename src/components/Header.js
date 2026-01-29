import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Container } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto:ammar.yasser.ismail.ibrahim@gmail.com" },
  { icon: faGithub, url: "https://github.com/AmmarElmohandes" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/ammar-yasser-39b987187/" },
];

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // Logic to hide header on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform={isHidden ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="rgba(15, 23, 42, 0.9)" // Semi-transparent Deep Slate
      backdropFilter="blur(10px)" // Glassmorphism effect
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <HStack px={{ base: 4, md: 8 }} py={4} justifyContent="space-between">
          <nav>
            <HStack spacing={6}>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  color="gray.400"
                  _hover={{ color: "cyan.400", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {["projects", "contactme"].map((item) => (
                <Link
                  key={item}
                  onClick={handleClick(item)}
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color="white"
                  _hover={{ color: "cyan.400" }}
                  cursor="pointer"
                  style={{ textDecoration: 'none' }}
                >
                  {item === "contactme" ? "Contact Me" : "Projects"}
                </Link>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;