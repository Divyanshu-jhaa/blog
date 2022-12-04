import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
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
    Divider,
    Image,
    Circle,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const Blog = (prop) => {
    const { user_id, category_id, post_id, title, content, image_id, date, users } =
        prop;
    let user = users.find((x) => x.user_id === user_id);

    const [imageURL, setImageURL] = useState("");
    useEffect(() => {
      const fetchImage = async () => {
        if (image_id === "") {
          setImageURL("");
        } else {
          let imgURL = await axios.get(
            `http://localhost:8080/image/${image_id}`
          );
          imgURL = imgURL.data.image_data;
          setImageURL(`data:image/jpeg;base64,${imgURL}`);
        }
      };
      fetchImage();
    });

    return (
        <>
            <Box
                display="flex"
                w={["0em", "30em", "48em", "62em", "65em", "70em"]}
                bg="gray.400"
                flexDirection="column"
                p="1rem"
                borderRadius="3px"
                mt="1rem"
            >
                <Box
                    w={["0em", "30em", "48em", "62em", "65em", "70em"]}
                    mb="1rem"
                    display="flex"
                >
                    {" "}
                    <Circle size="40px" mr="8px"><Image src={user.profile_photo == null ? './defphoto.png' : user.profile_photo} borderRadius='100px' mt='3px'></Image></Circle>
                    <Box display='flex' flexDirection='column'>
                        <Heading fontWeight='medium' fontSize='lg'>{user.name}</Heading>
                        <Heading fontWeight='medium' fontSize='lg'>@{user.username}</Heading>

                    </Box>

                </Box>
                <Image
                    // h={["5em", "15em", "25em", "25em", "25em", "30em"]}
                    src={imageURL}
                ></Image>
                <Heading fontWeight="normal" textAlign="start" m="5px">
                    {title}
                </Heading>
                <Divider />
                {/* <Heading fontWeight='normal' fontSize='3xl' mt='7px' mb='15px'>Sub heading</Heading> */}
                <Text m="2px">{content}</Text>

                <Divider />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="1rem"
                >
                    <Link to="/singleview" state={{ ...prop }}><Button w="100px">Read More</Button></Link>
                </Box>
            </Box>
        </>
    );
};


export default Blog

