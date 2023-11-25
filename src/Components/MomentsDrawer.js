import { Box, SlideFade, Flex, Text, bgImage, Center } from "@chakra-ui/react";
import React, { useState } from "react";

import picture from "../asset/image3.jpg";
import { useNavigate } from "react-router-dom";
import Moments from "../Pages/capturedMoments/Moments";
// import MomentsProposalPreWedding from "./MomentsProposalPreWedding";


function SlideFadeEx() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const nav= useNavigate()

  const momentspictures=[{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"}]

  return (

    <Flex w={"100%"} gap={2} mt={12} wrap={"wrap"} justifyContent={"center"}>
      <Flex
        flexDirection={"column"}
        justify={"space-between"}
        w="30%"
        minW={"25rem"}
        h="30rem"
        // bgColor="blue.200"
        m="2"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        bgImage='https://bit.ly/kent-c-dodds'
        bgSize={"cover"}
        bgPosition="center"
        boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'}
      >
        <Box>.</Box>

        <SlideFade in={isHovered1}>
        <Box py="20" bgColor="rgba(63,58,50,0.6)" onClick={() => nav("/moments")} color="white">
            <Center fontSize={"2rem"} _hover={{ color: "orange.orange500" }}>
              Moments
            </Center>
          </Box>
        </SlideFade>
      </Flex>

      <Flex
        flexDirection={"column"}
        justify={"space-between"}
        w="30%"
        minW={"25rem"}
        h="30rem"
        // bgColor="blue.200"

        m="2"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        bgImage={picture}
        bgSize={"cover"}
        bgPosition="center"
        boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'}
      >
        <Box>.</Box>
        <SlideFade in={isHovered2}>
          <Box py="20" bgColor="rgba(63,58,50,0.6)" onClick={() => nav("/proposal")} color="white">
            <Center fontSize={"2rem"} _hover={{ color: "orange.orange500" }}>
              Proposal
            </Center>
          </Box>
        </SlideFade>
      </Flex>
      <Flex
        flexDirection={"column"}
        justify={"space-between"}
        w="30%"
        minW={"25rem"}
        h="30rem"
        // bgColor="red.200"

        m="2"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        bgImage='https://bit.ly/kent-c-dodds'
        bgSize={"cover"}
        bgPosition="center"
        boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'}
      >
        <Box>.</Box>
        <SlideFade in={isHovered3}>
          <Box py="20" bgColor="rgba(63,58,50,0.6)" onClick={() => nav("/preWedding")} color="white">
            <Center
              px={"auto"}
              fontSize={"2rem"}
              _hover={{ color: "orange.orange500" }}
            >
              
              Pre-Wedding Shoots
            </Center>
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}

export default SlideFadeEx;
