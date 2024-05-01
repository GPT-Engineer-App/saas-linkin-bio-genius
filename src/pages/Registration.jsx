import React from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function Registration() {
  return (
    <Box p={4}>
      <form>
        <FormControl>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input id='name' type='text' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input id='email' type='email' />
        </FormControl>
        <Button mt={4} colorScheme='blue' type='submit'>Register</Button>
      </form>
    </Box>
  );
}

export default Registration;