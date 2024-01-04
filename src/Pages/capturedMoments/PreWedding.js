import React from "react";
import OuterLayout from "../../Layouts/Index";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import image1 from "../../asset/moments/prewedding/M6.jpeg";
import Toppage from "../../Components/Toppage";
import { PreWeddingPictures } from "../../Utils/capturedUtils/momentsPictures";

const PreWedding = () => {
  return (
    <OuterLayout>
      <Toppage text={"Pre-Wedding Shoot"} image={image1} />
      <Box
        mt={["2%", "2%", "5%", "4rem", "4rem"]}
        px={["2%", "2%", "5%", "10%", "15%"]}
      >
        <Flex
          gap={4}
          wrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {PreWeddingPictures.map((item, Index) => (
            <Box w={"18rem"}>
              <Image h={"100%"} w={"100%"} src={item.photo} />
            </Box>
          ))}
        </Flex>
        <Flex
          h={"10rem"}
          fontSize={"3rem"}
          mt={8}
          // bgColor={"grey"}
          bg="#242424"
          fontWeight={"500"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            textColor={"white"}
            p={"4"}
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl", xl: "6xl" }}
          >
            Pre-Wedding Shoot
          </Text> 
        </Flex>
      </Box>
    </OuterLayout>
  );
};

export default PreWedding;
