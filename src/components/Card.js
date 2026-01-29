import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card as ChakraCard,
  CardBody,
  Icon,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <ChakraCard
      borderRadius="xl"
      bg="gray.800"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 12px 20px rgba(0, 255, 255, 0.1)"
      }}
      border="1px solid"
      borderColor="whiteAlpha.100"
    >
      {/* Image Container with aspect ratio control */}
      <Box overflow="hidden">
        <Image
          src={imageSrc}
          alt={title}
          width="100%"
          height="240px"
          objectFit="cover" // Prevents stretching
          transition="transform 0.5s ease"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>

      <CardBody p={6} bg="slate.900">
        <VStack align="start" spacing={4}>
          <Heading size="md" color="white">
            {title}
          </Heading>

          <Text color="gray.400" fontSize="sm" noOfLines={3}>
            {description}
          </Text>

          <HStack spacing={2} pt={2} width="100%" justifyContent="flex-start">
            {link ? (
              <Link
                href={link}
                isExternal
                display="flex"
                alignItems="center"
                fontSize="sm"
                fontWeight="bold"
                color="cyan.400"
                _hover={{ color: "cyan.200", textDecoration: "none" }}
              >
                View Project
                <Box ml={2} transition="transform 0.2s" _groupHover={{ transform: "translateX(4px)" }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Box>
              </Link>
            ) : (
              <HStack color="gray.500" fontSize="xs" fontWeight="bold">
                <FontAwesomeIcon icon={faLock} />
                <Text>PRIVATE</Text>
              </HStack>
            )}
          </HStack>
        </VStack>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;