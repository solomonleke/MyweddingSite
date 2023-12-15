
import React from 'react'
import { Box,Flex,Text } from '@chakra-ui/react'



const Toppage = ({image,text}) => {
  return (
    <Box
        minH="20vh"
        // h='fit-content'
        w="100%"
        bgImage={image}
        bgSize={"cover"}
        bgPos={"center"}
        boxShadow={"inset 0 0 0 2000px rgba(10, 10, 10, 0.7);"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          pt={["150px", "150px", "150px", "180px", "150px"]}
          textAlign={"center"}
        >
          <Box w={["90%", "80%", "70%", "60%", "60%"]} color="#fff">
            <Text
              fontSize={["50px", "48px", "60px", "60px", "75px"]}
              lineHeight={["55px", "60px", "60px", "80px", "80px"]}
              fontWeight={"1"}
              mt={'5rem'}
            >
              {text}
            </Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
         
          textAlign={"center"}
        >
          {/* <Box w={["90%", "80%", "60%", "55%", "55%"]} color="#fff">
            <Text fontSize={["20px", "20px", "25px", "30px", "25px"]} mt="32px">
              {" "}
              "Love is our private island; It is where we both meet in secret,
              away from the hassles and frictions of life"
            </Text>
          </Box> */}
        </Flex>

        <Flex
          mx={["7%", "0"]}
          mt={["74px", "64px"]}
          pb="32px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          {/* <Button
            w={["100%", "auto"]}
            mt={["10px", "0"]}
            hoverColor="orange.orange500"
            hoverBorder={"none"}
            border="1px solid #fff"
            background="transparent"
            onClick={() => (window.location = `#countdown`)}
          >
            Read more
          </Button> */}
        </Flex>

        <Flex
          onClick={() => (window.location = `#countdown`)}
          cursor={"pointer"}
          color={"orange.orange400"}
          mt={["74px", "64px"]}
          pb="32px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          {/* <div className="arrowDown">
            <HiOutlineArrowNarrowDown fontSize={"34px"} />
          </div> */}
        </Flex>
      </Box>
  )
}

export default Toppage