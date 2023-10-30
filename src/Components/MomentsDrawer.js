import { Box, SlideFade,Flex,Text,bgImage, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import picture from '../asset/image3.jpg'

function SlideFadeEx() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <Flex gap={12} mt={12} wrap={'wrap'} justifyContent={'center'}>
      <Flex flexDirection={'column'} justify={'space-between'}
        w="28rem"
        h="33rem"
        bgColor="blue.200"
        m="2"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)} bgImage={picture} bgSize={"cover"} bgPosition='center'
      > 
      <Box>.</Box>
        <SlideFade in={isHovered1}>
          <Box py="20" bgColor="blue.400" color="white">
            <Center fontSize={'3rem'}>Moments</Center>
          </Box>
        </SlideFade>
      </Flex>
      <Flex flexDirection={'column'} justify={'space-between'}
        w="28rem"
        h="33rem"
        bgColor="blue.200"
        m="2"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)} bgImage={picture} bgSize={"cover"} bgPosition='center'
      >
      <Box>.</Box>
        <SlideFade in={isHovered2}>
          <Box py="20" bgColor="blue.400" color="white">
            <Center fontSize={'3rem'}>Proposal</Center>
          </Box>
        </SlideFade>
      </Flex>

      <Flex flexDirection={'column'} justify={'space-between'}
        w="28rem"
        h="33rem"
        bgColor="red.200"
        m="2"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)} bgImage={picture} bgSize={"cover"} bgPosition='center'
      >
      <Box>.</Box>
        <SlideFade in={isHovered3}>
          <Box py="20"    bgColor="red.400" color="white">
           <Center fontSize={'3rem'}> Pre-Wedding Shoots</Center>
          </Box>
        </SlideFade>
      </Flex>
    </Flex>
  );
}

export default SlideFadeEx;
