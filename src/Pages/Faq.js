import React from 'react'


import OuterLayout from "../Layouts/Index";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import GiftUsImg from "../asset/image2.jpg"

const Faq = () => {
  return (
    <OuterLayout>
      <Seo title="Our Love Story" description="OurLoveStory" />
      <Box minH="50vh"
        w="100%"
        bgImage={GiftUsImg}
        bgSize={"cover"}
        bgPos={"center"}
        boxShadow={"inset 0 0 0 2000px rgba(10, 10, 10, 0.7);"}>
        
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
              fontWeight={"700"}
            >
              FAQS
            </Text>
          </Box>
        </Flex>
        
      </Box>

      <Center fontSize={'4rem'}>Save the Date</Center>
      <Center fontSize={'1rem'} color={'grey'}>Saturday, 30th September 2023</Center>
    </OuterLayout>
  )
}



export default Faq