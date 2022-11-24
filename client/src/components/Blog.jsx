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
    return (
        <>
            <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} bg='gray.400' flexDirection='column' p='1rem' borderRadius='3px'>
                <Image h={['5em', '15em', '25em', '25em', '25em', '30em']} src='https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg?w=2000'></Image>
                <Heading fontWeight='normal' textAlign='start' m='5px'>Heading</Heading>
                <Divider />
                <Heading fontWeight='normal' fontSize='3xl' mt='7px' mb='15px'>Sub heading</Heading>
                <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repellendus nemo maxime possimus molestias, commodi quis similique culpa, pariatur, maiores officia? Laborum eaque neque ratione voluptatibus incidunt repudiandae nulla explicabo, ex corrupti deleniti totam eum vel at tenetur amet accusantium fugit accusamus voluptatum obcaecati, sit impedit! Perferendis eum vitae iusto quibusdam explicabo doloribus minima voluptate repellat, autem amet qui fugiat ad maxime sequi, delectus sed eius dignissimos facilis earum voluptatibus quis quidem. Tempora odit earum eos animi ullam quasi sequi exercitationem. Laboriosam nobis hic omnis iure quis quidem unde inventore commodi dolorum veritatis doloribus, fugiat assumenda quaerat molestias sunt deleniti!</Text>
                <Divider />
                <Box display='flex' justifyContent='center' alignItems='center'><Button w='100px'>Read More</Button></Box>
            </Box>

        </>

    )
}

export default Blog