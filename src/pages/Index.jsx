import React from "react";
import { Box, Flex, Input, InputGroup, InputRightElement, VStack, Text, Divider, IconButton, Avatar, Spacer, useColorModeValue, Container } from "@chakra-ui/react";
import { FaPaperPlane, FaSearch, FaRegSmile } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" flexDirection={{ base: "column", md: "row" }}>
        {/* Sidebar */}
        <VStack w={{ base: "100%", md: "35%" }} p={4} borderRight={{ md: "1px" }} borderColor={{ md: borderColor }} spacing={4} bg={bgColor}>
          <InputGroup>
            <Input placeholder="Search" />
            <InputRightElement children={<FaSearch />} />
          </InputGroup>
          <Divider />
          {/* Contact List */}
          <VStack divider={<Divider />} spacing={4} w="100%" overflowY="auto">
            {Array.from({ length: 10 }).map((_, index) => (
              <Flex key={index} w="100%" p={3} align="center">
                <Avatar size="md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTQ3MDAxMHww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">User {index + 1}</Text>
                  <Text fontSize="sm">Last message here...</Text>
                </Box>
                <Spacer />
                <Text fontSize="xs" color="gray.500">
                  12:00 PM
                </Text>
              </Flex>
            ))}
          </VStack>
        </VStack>

        {/* Chat Area */}
        <VStack w={{ base: "100%", md: "65%" }} p={4} spacing={4} bg={bgColor}>
          {/* Chat Header */}
          <Flex w="100%" p={3} align="center" borderBottom="1px" borderColor={borderColor}>
            <Avatar size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTQ3MDAxMHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Box ml="3">
              <Text fontWeight="bold">User 2</Text>
              <Text fontSize="sm">Online</Text>
            </Box>
          </Flex>
          {/* Messages */}
          <VStack divider={<Divider />} spacing={4} w="100%" h="full" overflowY="auto" flex={1} p={2}>
            {Array.from({ length: 20 }).map((_, index) => (
              <Box key={index} bg="teal.100" w="fit-content" p={3} borderRadius="lg">
                <Text>Message #{index + 1} from the user.</Text>
              </Box>
            ))}
          </VStack>
          {/* Input Area */}
          <Flex w="100%" align="center">
            <InputGroup size="md">
              <Input pr="4.5rem" placeholder="Type a message..." />
              <InputRightElement>
                <IconButton icon={<IoMdPhotos />} variant="ghost" aria-label="Attach file" />
              </InputRightElement>
            </InputGroup>
            <IconButton icon={<FaRegSmile />} ml={2} variant="ghost" aria-label="Emoji" />
            <IconButton colorScheme="teal" icon={<FaPaperPlane />} ml={2} aria-label="Send message" />
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
