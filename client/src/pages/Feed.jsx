import React from "react";
import { useState } from "react";
import axios from "axios";
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
import { useEffect } from "react";
const Feed = () => {
  const [category, setCategory] = useState('');
  const [feed, setfeed] = useState([]);
  const feedData = async () => {
    try {
      const temp = await axios.get("http://localhost:8080/blog/getAll");
      setfeed(temp.data);
      console.log(temp.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    feedData();

  }, [])

  return (
    <>
      <Container centerContent>
        <Box display='flex' justifyContent='start' w={['0em', '30em', '48em', '62em', '65em', '70em']} mt='10px' mb='10px'><Text fontWeight='normal' fontSize='4xl'>Trending</Text></Box>
        {feed.map((x) => {
          return <Blog user_id={x.user_id} category_id={x.category_id} title={x.title} content1={x.content1} content2={x.content2} content3={x.content3} content4={x.content4} content5={x.content5} image={x.image} date={x.date} post_id={x.post_id} />
        })}

      </Container>
    </>
  );

};

export default Feed;
