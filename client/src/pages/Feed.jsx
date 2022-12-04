import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
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
  Select
} from "@chakra-ui/react";
import Blog from "../components/Blog";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Feed = () => {
  const navigate = useNavigate();
  const [feed, setfeed] = useState([]);
  const [fData, setfData] = useState([]);
  const [users, setusers] = useState([]);
  const [helperState, setHelperState] = useState(true);

  const helperStateHandler = () => {
    setHelperState((prevState) => {
      return !prevState;
    });
  };
  const selectHandler = (e) => {
    const categoryId = e.target.value;
    if (categoryId === '') {
      setfeed(fData);
    }
    else {
      const sortedData = fData.filter((x) => x.category_id === Number(categoryId));
      if (sortedData.length == 0) {
        setfeed([0]);
      } else {
        setfeed(sortedData);
      }
    }

  }
  useEffect(() => {
    let localData = localStorage.getItem("loginState");
    if (localData === null) {
      navigate("/login", { replace: true });
    }
  }, [helperState]);

  const fetchUsers = async () => {
    try {
      const temp2 = await axios.get("http://localhost:8080/user/getAll");
      setusers(temp2.data);
    } catch (err) {
      console.log(err);
    }
  };
  const feedData = async () => {
    try {
      const temp1 = await axios.get("http://localhost:8080/blog/getAll");
      setfData(temp1.data);
      setfeed(temp1.data);
      console.log(temp1.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    feedData();
  }, []);
  if (feed.length === 0 || users.length === 0) {
    return (
      <>
        <Navbar stateHandler={helperStateHandler} />
        <Box display="flex" justifyContent="center" mt="8rem">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt="25vh"
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 bg-[black]"
              viewBox="0 0 24 24"
            ></svg>
            loading
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Navbar stateHandler={helperStateHandler} />
        <Container centerContent>
          <Box
            display="flex"
            justifyContent="start"
            w={["0em", "30em", "48em", "62em", "65em", "70em"]}
            bg='#ebebeb'
            mt="10px"
            mb="10px"
            flexDirection='column'
          >
            <Text fontWeight="normal" fontSize="4xl">
              Trending
            </Text>
            <Select placeholder='Sort By Category' bg='white' mt='1rem' onClick={selectHandler}>
              <option value='1'>Technology</option>
              <option value='2'>Food</option>
              <option value='3'>Health & Fitness</option>
              <option value='4'>Lifestyle</option>
              <option value='5'>Photography</option>
              <option value='6'>Business</option>
              <option value='7'>Sport</option>
            </Select>
          </Box>
          {feed[0] == 0 ? <Heading fontWeight='normal' mt='10rem'>No Results :( </Heading> :

            feed.map((x) => {
              return (
                <Blog
                  user_id={x.user_id}
                  category_id={x.category_id}
                  title={x.title}
                  content={x.content}
                  image_id={x.image_id}
                  image_data={x.image_data}
                  date={x.date}
                  post_id={x.post_id}
                  users={users}
                />
              );
            })
          }


        </Container>
      </>
    );
  }
};

export default Feed;
