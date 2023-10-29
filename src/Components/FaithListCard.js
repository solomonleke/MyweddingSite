import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { faithListCard } from "../Utils/cardsUtils/faithListCard";


const FaithListCard = () => {
  return (
    <Box >
      <Box p={8}>
        <Center fontSize={'3rem'} color={ "orange.orange500"}   my={12}>Our Faith List</Center>
        <Text fontSize={'1.5rem'} color={"grey"} align={'center'}>These are Items we may suggest as gifts</Text>
      </Box>
      <Flex wrap={"wrap"} gap={8} justifyContent={"center"} >
        {faithListCard.map((item, Index) => (
          <Box key={Index} minWidth={"10rem"} boxShadow={'41px 32px 15px -11px rgba(58,8,0,0.1)'} borderRadius={12} maxWidth={"20rem"} >
            <Box borderRadius={4}>
              <Image w={"100%"} h={"100%"} src={item.itemImg} />
            </Box>
            <Box px={2} >
            <Flex justify={"space-between"} py={4}>
              <Center fontSize={'1.5rem'}>{item.itemName}</Center>
              <Text fontSize={'1.1rem'}>{item.Price}</Text>
            </Flex>
            <Text pb={8} fontSize={'1.3rem'}>{item.itemDesc}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FaithListCard;
