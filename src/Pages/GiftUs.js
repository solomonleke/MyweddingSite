import React from "react";
import OuterLayout from "../Layouts/Index";
import { Box, Flex, Image, Center, Text } from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import GiftUsImg from "../asset/image2.jpg";
import giftUstop from "../asset/image3.jpg";
import FaithListCard from "../Components/FaithListCard";

const GiftUs = () => {
  return (
    <OuterLayout>
      <Seo title="Our Love Story" description="OurLoveStory" />
      <Box
        minH="50vh"
        w="100%"
        bgImage={GiftUsImg}
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
              fontWeight={"700"}
            >
              Gift Us
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box px={{ base: "5%", lg: "20%" }} mt={12}>
        <Box>
          <Image src={giftUstop} />
          <Center mt={8} fontSize={"1.2rem"} color={"grey"}>
            Thank You so much for your generous gift. We are grateful and we
            pray that Your seed sown is blessed.
          </Center>
        </Box>

        <FaithListCard/>

      </Box>
    </OuterLayout>
  );
};

export default GiftUs;
