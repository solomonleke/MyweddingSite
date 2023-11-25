import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

import {SlCalender} from 'react-icons/sl'

import { AiOutlineFieldTime } from "react-icons/ai";
import { infoCard } from "../Utils/cardsUtils/infoCard";

const WeddingInfocard = () => {
  return (
    <Flex gap={8}
      flexDirection={{ base: "column", lg: "row" }}
      wrap={"wrap"}
      px={{ base: "4", lg: "12%" }}
    >
      {infoCard.map((item,Index)=>
      (
        <Box p={12} key={Index} w={"20rem"} boxShadow={'41px 32px 15px -11px rgba(58,8,0,0.1)'}>
          <Center fontSize={'2rem'}>{item.event}</Center>
          <Flex alignItems={'center'} mt={4} gap={4}>
            {/* <Box h={'2rem'} flex={'1'} w={'2rem'}><CiLocationOn size={'100%'}  /></Box> */}
            <Text>{item.location}</Text>
          </Flex>
          <Flex alignItems={'center'} mt={4} gap={4}>
            <AiOutlineFieldTime size={'2rem'} />
            <Text>{item.time}</Text>
          </Flex>
          <Flex alignItems={'center'} mt={4} gap={4}>
            <SlCalender size={'2rem'} />
            <Text>{item.date}</Text>
          </Flex>
          
        </Box>
      )
      )}
    </Flex>
  );
};

export default WeddingInfocard;
