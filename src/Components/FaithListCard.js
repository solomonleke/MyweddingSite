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
          <Box key={Index} minWidth={"10rem"} boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'} borderRadius={12} maxWidth={"20rem"} >
            <Box borderRadius={4}>
              <Image w={"100%"} h={"100%"} src={item.itemImg} />
            </Box>
            <Box px={4} >
            <Flex justify={"space-between"} alignItems={'center'} py={4}>
              <Center fontSize={'1.7rem'} color={ "orange.orange500"} >{item.itemName}</Center>
              <Text  color='blue.500' fontSize={'1.3rem'}>{item.itemPrice}</Text>
            </Flex>
            <Text pb={8}  color='grey' fontSize={'1.1rem'}>{item.itemDesc}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FaithListCard;
