import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Card as ChakraCard,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  Link
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <ChakraCard borderRadius={20}
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius={20}
        minHeight={400}
        maxHeight={400}
      />
      <CardBody>
        <VStack align="start" spacing={3}>


          <Heading size="md">{title}</Heading>

          <Text color="gray.600">{description}</Text>
        </VStack>
      </CardBody>

      <CardFooter justifyContent="flex-start">
        <HStack spacing={2}>
          {link ? <Link href={link} background="#fff" >
            See More <FontAwesomeIcon icon={faArrowRight} />
          </Link> : <Text>Private</Text>}
        </HStack>
      </CardFooter>
    </ChakraCard>

  );
};

export default Card;
