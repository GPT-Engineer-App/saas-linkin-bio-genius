import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, Link, Heading, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const toast = useToast();

  const handleAddLink = () => {
    if (newLink) {
      setLinks([...links, newLink]);
      setNewLink("");
      toast({
        title: "Link added.",
        description: "We've added your new link.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    toast({
      title: "Link removed.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg">Link in Bio Generator</Heading>
          <FormControl>
            <FormLabel htmlFor="link">Add New Link</FormLabel>
            <Input id="link" type="text" value={newLink} onChange={(e) => setNewLink(e.target.value)} placeholder="Enter URL" />
            <Button leftIcon={<FaPlus />} colorScheme="blue" mt={2} onClick={handleAddLink}>
              Add Link
            </Button>
          </FormControl>
          {links.length > 0 && (
            <Box mt={4}>
              <Text mb={2}>Your Links:</Text>
              <VStack spacing={2}>
                {links.map((link, index) => (
                  <Box key={index} p={2} shadow="md" borderWidth="1px" borderRadius="md" w="full" display="flex" justifyContent="space-between" alignItems="center">
                    <Link href={link} isExternal color="blue.500">
                      {link}
                    </Link>
                    <Button size="sm" colorScheme="red" onClick={() => handleDeleteLink(index)}>
                      <FaTrash />
                    </Button>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </VStack>
      </Container>
    </>
  );
};

export default Index;
