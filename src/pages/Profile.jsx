import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Image, useToast } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Profile = () => {
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const toast = useToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

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

  return (
    <>
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Upload Profile Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {profileImage && <Image src={profileImage} alt="Profile Image" boxSize="150px" mt={4} />}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Input id="bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter your bio" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="link">Add New Link</FormLabel>
            <Input id="link" type="text" value={newLink} onChange={(e) => setNewLink(e.target.value)} placeholder="Enter URL" />
            <Button leftIcon={<FaPlus />} colorScheme="orange" mt={2} onClick={handleAddLink}>
              Add Link
            </Button>
          </FormControl>
        </VStack>
      </Container>
    </>
  );
};

export default Profile;
