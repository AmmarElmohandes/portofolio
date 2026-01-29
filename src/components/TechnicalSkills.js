import React from 'react';
import {
    Box,
    SimpleGrid,
    Text,
    Heading,
    VStack,
    Icon,
    Badge,
    Flex,
} from '@chakra-ui/react';
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from 'react-icons/fa';

const SkillCard = ({ title, skills, icon, color }) => (
    <VStack
        align="start"
        p={6}
        bg="gray.900"
        border="1px solid"
        borderColor="gray.700"
        borderRadius="xl"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', borderColor: color }}
    >
        <Flex align="center" mb={2}>
            <Icon as={icon} w={6} h={6} color={color} mr={3} />
            <Heading size="md" color="white">
                {title}
            </Heading>
        </Flex>
        <Flex wrap="wrap" gap={2}>
            {skills.map((skill) => (
                <Badge
                    key={skill}
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="gray.800"
                    color="gray.300"
                    fontSize="xs"
                    textTransform="none"
                    border="1px solid"
                    borderColor="gray.600"
                >
                    {skill}
                </Badge>
            ))}
        </Flex>
    </VStack>
);

const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Frontend Architecture",
            // icon: FaCode,
            color: "cyan.400",
            skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Gatsby", "Remix"]
        },
        {
            title: "State & Data Management",
            // icon: FaLayerGroup,
            color: "blue.400",
            skills: ["Redux", "React-Query", "GraphQL", "Context API", "Rest APIs"]
        },
        {
            title: "Backend & Database",
            // icon: FaDatabase,
            color: "purple.400",
            skills: ["Node.js", "PostgreSQL", "Prisma", "NestJS", "MongoDB", "Express"]
        },
        {
            title: "Tools & Methodologies",
            // icon: FaTools,
            color: "green.400",
            skills: ["Agile/Scrum", "Git", "CI/CD", "OpenAI API", "Pinecone", "Contentful CMS"]
        }
    ];

    return (
        <Box py={20} px={8} bg="blackAlpha.900">
            <VStack spacing={4} mb={16} align="start" maxW="container.xl" mx="auto">
                <Text color="cyan.400" fontWeight="bold" letterSpacing="widest">
                    EXPERTISE
                </Text>
                <Heading size="2xl" color="white">
                    Technical Stack
                </Heading>
                <Box w="100px" h="2px" bg="cyan.400" />
            </VStack>

            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing={8}
                maxW="container.xl"
                mx="auto"
            >
                {skillCategories.map((category) => (
                    <SkillCard key={category.title} {...category} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default TechnicalSkills;