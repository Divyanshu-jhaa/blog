import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { BiCommentDots } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
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
    useDisclosure,
    Slide,
    textDecoration,

} from "@chakra-ui/react";
import { useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const SingleView = () => {
    const [helperState, setHelperState] = useState(true);
    const [comment, setcomment] = useState("");
    const [commentData, setcommentData] = useState([]);
    const currentUser = JSON.parse(window.localStorage.getItem("loginState"));
    const categories = ['Technology', 'Food', 'Health & Fitness', 'Lifestyle', 'Photography', 'Business', 'Sport'];
    const navigate = useNavigate();
    const helperStateHandler = () => {
        setHelperState((prevState) => {
            return !prevState;
        });
    };
    const fetchcomments = async () => {

        try {
            const temp = await axios.get("http://localhost:8080/comment/getAll");
            setcommentData(temp.data);
        } catch (err) {
            console.log(err);
        }

    }
    const commentHandler = async (currentUser, post_id) => {
        if (comment != "") {
            try {
                const temp = await axios.post("http://localhost:8080/comment/add", { post_id: post_id, user_id: currentUser.user_id, comment: comment, comment_id: Math.floor(Date.now() / 1e9) });
                setcomment("");

            } catch (err) {
                console.log(err);
            }
        }
    }
    useEffect(() => {
        let localData = localStorage.getItem("loginState");
        if (localData === null) {
            navigate("/login", { replace: true });
        }
    }, [helperState]);
    useEffect(() => {
        fetchcomments();
    }, [comment]);

    const location = useLocation();
    const { user_id, category_id, post_id, title, content, image, date, users } = location.state;
    let user = users.find((x) => x.user_id === user_id);
    const commentUser = users.find((c) => c.user_id == currentUser.user_id);
    if (commentData.length == 0) {
        return <>
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
    } else {
        const postcomment = commentData.filter((f) => f.post_id == post_id);
        return (
            <>
                <Navbar stateHandler={helperStateHandler} />
                <Container centerContent mt='3rem' mb='3rem'>
                    <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} justifyContent='space-between' p='1rem' bg='#ebebeb' borderRadius='10px' mb='1rem'>
                        <Box display='flex' flexDirection='row'>
                            <Circle size="40px" mr="8px"><Image src={user.profile_photo == null ? './defphoto.png' : user.profile_photo} borderRadius='100px' mt='3px'></Image></Circle>
                            <Box display='flex' flexDirection='column'>
                                <Heading fontWeight='medium' fontSize='lg'>{user.name}</Heading>
                                <Heading fontWeight='medium' fontSize='lg'>@{user.username}</Heading>
                            </Box>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            <Heading fontWeight='medium' fontStyle='italic' color='gray' fontSize='md'>{date}</Heading>
                            <Heading fontWeight='medium' fontStyle='italic' color='gray' fontSize='md'>{categories[category_id - 1]}</Heading>
                        </Box>

                    </Box>
                    <Box display='flex' w={['0em', '30em', '48em', '62em', '65em', '70em']} p='1rem' flexDirection='column' bg='#ebebeb' alignItems='center' borderRadius='10px'>
                        <Heading m='10px'>{title}</Heading>
                        <Image src={image} h={['5em', '15em', '25em', '25em', '25em', '30em']} w={['0em', '30em', '48em', '62em', '65em', '70em']} m='10px'></Image>

                        <Text m='10px'>{content}</Text>
                        <Divider borderColor='black' border='3px' />
                        <Box display='flex' justifyContent='flex-start' w={['0em', '28em', '46em', '60em', '63em', '68em']} flexDirection='column'>
                            <Box display='flex' flexDirection='row'>
                                <Heading fontWeight='medium' >Comments</Heading>
                                <Heading fontWeight='medium' fontSize='3xl' mt='5px' ml='3px'>{`(${postcomment.length})`}</Heading>

                            </Box>

                            <Box display='flex' flexDirection='row' w={['0em', '28em', '46em', '60em', '63em', '68em']} mt='10px'>
                                <Circle size="40px" mr="8px"><Image src={commentUser.profile_photo === null ? './defphoto.png' : commentUser.profile_photo} borderRadius='100px' mt='3px'></Image></Circle>
                                <Box display='flex' flexDirection='column'>
                                    <Input w={['0em', '25em', '43em', '57em', '60em', '65em']} value={comment} bg='white' placeholder='Leave a comment...'
                                        onChange={(e) => { setcomment(e.target.value) }}></Input>
                                </Box>

                            </Box>
                            <Box w={['0em', '28em', '46em', '60em', '63em', '68em']} display='flex' justifyContent='flex-end' mt='10px'><Button onClick={() => { commentHandler(currentUser, post_id) }}>Comment</Button></Box>

                        </Box>
                        {postcomment.length == 0 ? <><Box m='2rem'>No Comments</Box></> : postcomment.map((x) => {

                            const usertemp = users.filter((z) => z.user_id == x.user_id);
                            console.log("bruh", usertemp);
                            return <>
                                {usertemp.map((gg) => {
                                    return (<Box display='flex' flexDirection='row' justifyContent='flex-start' w={['0em', '28em', '46em', '60em', '63em', '68em']} m='2rem'>
                                        <Circle size="40px" mr="8px"><Image src={gg.profile_photo == null ? './defphoto.png' : gg.profile_photo} borderRadius='100px' mt='3px'></Image></Circle>
                                        <Box display='flex' flexDirection='column'>
                                            <Heading fontWeight='medium' fontSize='lg'>{gg.username}</Heading>
                                            <Text>{x.comment}</Text>
                                        </Box>
                                    </Box>);
                                })}
                                <Divider borderColor='gray' />
                            </>

                        })}
                    </Box>

                </Container>


            </>
        )
    }

}

export default SingleView