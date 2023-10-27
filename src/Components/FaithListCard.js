import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { faithListCard } from "../Utils/cardsUtils/faithListCard";
import itemImage from "../asset/image3.jpg";

const FaithListCard = () => {
  return (
    <Box>
      <Box>
        <Center fontSize={'3rem'} mt={12}>Faith List</Center>
        <Text fontSize={'1.5rem'} align={'center'}>These are Items we may suggest as gifts</Text>
      </Box>
      <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
        {faithListCard.map((item, Index) => (
          <Box key={Index} minWidth={"10rem"} maxWidth={"20rem"} p={8}>
            <Box w={"20rem"} h={"20rem"}>
              <Image w={"100%"} h={"100%"} src={itemImage} />
            </Box>
            <Flex justify={"space-between"} my={4}>
              <Text>{"NAme"}</Text>
              <Text>{"Price"}</Text>
            </Flex>
            <Text>{"Description"}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FaithListCard;
