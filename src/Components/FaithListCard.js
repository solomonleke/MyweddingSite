import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { faithListCard } from "../Utils/cardsUtils/faithListCard";


const FaithListCard = () => {
  return (
    <Box >
      <Box p={0}>
        <Center fontSize={'3rem'} color={"orange.orange500"} my={3}>Our Faith List</Center>
        <Text fontSize={'1.2rem'} color={"grey"} mt="-11" align={'center'}>We are saying "I do" to each other and we are glad to have you celebrate with us.
          <br />

          The best gift is your presence at our wedding! However, we have noticed that some of you are still wondering what gift would make us happy. Maybe you thought of only giving us money? We have a better one! If you want to know what we would like, you can take a look at our virtual wishlist and select whichever one you intend to get for us.

          We are very excited about this new chapter in our lives and thank you for starting it with us!
        </Text>
        <Text fontSize={'1.2rem'} fontWeight={"600"} my="12px" color={"grey"} align={'center'}>-Iretioluwa & Moyinoluwa-</Text>
      </Box>


       <HStack fontSize={"1.1rem"} letterSpacing={1.3} fontWeight={"500"} color="#333">
        <Text >Wishes - {faithListCard.length}</Text>
        <Text>Already Fulfilled - 0</Text>
       </HStack> 
      <Flex mt="12px" wrap={"wrap"} gap={8} justifyContent={"space-between"} width={"100%"} >
        {faithListCard.map((item, Index) => (
          <Box key={Index} minWidth={"23rem"} boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'}  maxWidth={"23rem"} >
            <Box>
              <Image w={"100%"} borderRadius={"8px"} h={"100%"} src={item.itemImg} />
            </Box>

            <Box px={4}  >
             
              <Text fontSize={'1.3rem'} mt="10px" textTransform={"capitalize"} fontWeight={"500"} color={"orange.orange500"} >{item.itemName}</Text>
               
              
              <Text pb={8} color='grey' textTransform={"capitalize"} fontSize={'1rem'}>{item.itemDesc}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FaithListCard;
