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
    Image
} from "@chakra-ui/react";
const Blog = (prop) => {
    const { user_id, category_id, post_id, title, content1, content2, content3, content4, content5, image, date } = prop;
    return (
        <>
            <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} bg='gray.400' flexDirection='column' p='1rem' borderRadius='3px' mt='1rem'>
                <Image h={['5em', '15em', '25em', '25em', '25em', '30em']} src={image} ></Image>
                <Heading fontWeight='normal' textAlign='start' m='5px'>{title}</Heading>
                <Divider />
                {/* <Heading fontWeight='normal' fontSize='3xl' mt='7px' mb='15px'>Sub heading</Heading> */}
                <Text m='2px'>{content1}</Text>
                <Text m='2px'>{content2}</Text>
                <Text m='2px'>{content3}</Text>
                <Text m='2px'>{content4}</Text>
                <Text m='2px'>{content5}</Text>
                <Divider />
                <Box display='flex' justifyContent='center' alignItems='center' mt='1rem'><Button w='100px'>Read More</Button></Box>
            </Box>

        </>

    )
}

export default Blog