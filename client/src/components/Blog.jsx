import React from 'react'
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
import { useState } from 'react';
import axios from 'axios';
const Blog = (prop) => {
    const { user_id, category_id, post_id, title, content1, content2, content3, content4, content5, image, date, users } = prop;
    let user = users.find((x) => x.user_id === user_id);
    return (
        <>
            <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} bg='gray.400' flexDirection='column' p='1rem' borderRadius='3px' mt='1rem'>
                <Box w={['0em', '30em', '48em', '62em', '65em', '70em']} mb='1rem' display='flex'> <Circle size='40px' bg='white' color='white' mr='8px'>

                </Circle><Heading>{user.username}</Heading></Box>
                <Image h={['5em', '15em', '25em', '25em', '25em', '30em']} src={image} ></Image>
                <Heading fontWeight='normal' textAlign='start' m='5px'>{title}</Heading>
                <Divider />
                {/* <Heading fontWeight='normal' fontSize='3xl' mt='7px' mb='15px'>Sub heading</Heading> */}
                <Text m='2px'>{content1}</Text>
                <Text m='2px'>{content2}</Text>

                <Divider />
                <Box display='flex' justifyContent='center' alignItems='center' mt='1rem'><Button w='100px'>Read More</Button></Box>
            </Box>
        </>

    )
}

export default Blog