import React from "react";
import OuterLayout from "../Layouts/Index";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import GiftUsImg from "../asset/image2.jpg";
import Button from "../Components/Button";
import invite from "../asset/InvitationCard.jpeg";
import invitation from "../asset/InvitationCardpic.jpeg";
import WeddingInfocard from "../Components/WeddingInfocard";

const WeddingInfo = () => {
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
              mt={12}
              fontSize={["50px", "48px", "60px", "60px", "75px"]}
              lineHeight={["55px", "60px", "60px", "80px", "80px"]}
              fontWeight={"1"}
            >
              WEDDING INFO
            </Text>
          </Box>
        </Flex>
      </Box>

      <Center fontSize={"4rem"} mt={12} color={"orange.orange500"}>
        Save the Date
      </Center>
      <Center fontSize={"1rem"} color={"grey"}>
        Saturday, 30th September 2023
      </Center>
      <Flex justifyContent={"center"} mt={12}>
        <Button w="auto">
          <a href={invite}>Get E-Invite</a>
        </Button>
      </Flex>
      <Flex justifyContent={'center'} my={12}>
        <WeddingInfocard />
      </Flex>

      <Box h px={{ base: "5%", lg: "20%" }} mt={24}>
        <Image w={"100%"} h={"70%"} src={invitation} />
      </Box>
    </OuterLayout>
  );
};

export default WeddingInfo;
