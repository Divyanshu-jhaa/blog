import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Blog from "../components/Blog";
const Feed = () => {
  const [category, setCategory] = useState('');
  if (category == '') {
    return (
      <>
        <Container centerContent>
          <Box display='flex' justifyContent='start' w={['0em', '30em', '48em', '62em', '65em', '70em']} mt='10px' mb='10px'><Text fontWeight='normal' fontSize='4xl'>Trending</Text></Box>
          <Blog />

        </Container>
      </>
    );
  }
};

export default Feed;
