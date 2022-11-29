import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { AiOutlineComment } from "react-icons/ai";
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
    Circle
} from "@chakra-ui/react";
const SingleView = () => {
    const [helperState, setHelperState] = useState(true);
    const helperStateHandler = () => {
        setHelperState((prevState) => {
            return !prevState;
        });
    };
    const location = useLocation();
    const { user_id, category_id, post_id, title, content1, content2, content3, content4, content5, image, date, users } = location.state;
    let user = users.find((x) => x.user_id === user_id);
    return (
        <>
            <Navbar stateHandler={helperStateHandler} />
            <Container centerContent mt='5rem'>
                <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} justifyContent='space-between' p='1rem' bg='#ebebeb' borderRadius='10px' mb='1rem'>
                    <Heading fontWeight='medium' fontStyle='italic' color='black'>{user.username}</Heading>
                    <Heading fontWeight='medium' fontStyle='italic' color='black' fontSize='lg'>{date}</Heading>
                </Box>
                <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} p='1rem' flexDirection='column' bg='#ebebeb' alignItems='center' borderRadius='10px'>
                    <Heading m='10px'>{title}</Heading>
                    <Image src={image} h={['5em', '15em', '25em', '25em', '25em', '30em']} w={['0em', '30em', '48em', '62em', '65em', '70em']} m='10px'></Image>

                    <Text m='10px'>{content1}</Text>
                    <Text m='10px'>{content2}</Text>
                    <Text m='10px'>{content3}</Text>
                    <Text m='10px'>{content4}</Text>
                    <Text m='10px'>{content5}</Text>
                    <Box w={['0em', '30em', '48em', '62em', '65em', '70em']} display='flex' justifyContent='space-between'>
                        <AiOutlineComment />
                    </Box>
                </Box>



            </Container>

        </>
    )
}

export default SingleView