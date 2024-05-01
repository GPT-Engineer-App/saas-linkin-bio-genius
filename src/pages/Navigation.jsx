import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box p={4} display="flex" justifyContent="space-between" bg="gray.100">
      <Link to="/">
        <Button colorScheme="teal">Home</Button>
      </Link>
      <Link to="/profile">
        <Button colorScheme="teal">Profile</Button>
      </Link>
    </Box>
  );
};

export default Navigation;
