import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import wife from "../../src/asset/image1.jpg";

const ScrollPage = () => {
  return (
    <Flex >
      <Box
        w="50%"
        p={4}
        borderRight="1px solid #ccc"
        overflowY="auto"
        height="calc(100vh - 60px)"
      >
        {/* Left side content */}
        {/* This side will scroll vertically when needed */}
        <ul>
          <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
            <Image h={"100%"} w="100%" src={wife} alt="" />
          </Box>
          <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
            <Image h={"100%"} w="100%" src={wife} alt="" />
          </Box>
          <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
            <Image h={"100%"} w="100%" src={wife} alt="" />
          </Box>
          <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
            <Image h={"100%"} w="100%" src={wife} alt="" />
          </Box>
        </ul>
      </Box>
      <Box w="50%" p={4}>
        {/* Right side content */}
        {/* This side will stay in position */}
        <Box >
          <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
            <Image h={"100%"} w="100%" src={wife} alt="" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ScrollPage;
