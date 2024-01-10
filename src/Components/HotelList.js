import { Box, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function HotelList({name, ratings, location, map, cat1,cat2,cat3,cat4,price1,price2,price3,price4, cont1,cont2}) {
    return (
        <Box mt='32px' bg={"#fee"} rounded={"10px"} border={"1px solid black"} boxShadow={'4px 12px 12px -11px rgba(58,8,0,0.1)'} px={["10px", "10px", "25px", "45px", "45px"]} py="10px" >

            <Flex flexDir={["column", "row", "row", "row", "row"]} justifyContent={"space-between"}>
                <Text textTransform={"capitalize"} fontWeight={"500"} fontSize={"1.5em"} color={"orange.orange500"}>
                    {name}
                </Text>
                <Spacer />
                <Text textTransform={"capitalize"} fontWeight={"500"} fontSize={"1em"}>
                    Distance from the Event center: {ratings}
                </Text>

            </Flex>
            <Text textTransform={"capitalize"} textAlign={"center"} fontWeight={"500"} fontSize={"1.2em"} color={"orange.orange500"}>
                Location- {location}
            </Text>


            <Flex justifyContent={"center"} my="32px">
               {map}


            </Flex>

            <Flex flexDir={["column","row","row","row","row"]} justifyContent={"space-between"}>

            <Box>
                <Text mt="20px" textTransform={"capitalize"} fontWeight={"500"} fontSize={"1.5em"} color={"orange.orange500"}>Room Categories</Text>

                <Stack textTransform={"uppercase"} fontWeight={"500"} textAlign={'center'} fontSize={"1em"} color={"#242424"} >
                    <HStack>
                        <Text>{cat1}</Text>
                        <Text>{price1}</Text>
                    </HStack>
                    <HStack>
                        <Text>{cat2}</Text>
                        <Text>{price2}</Text>
                    </HStack>
                    <HStack>
                        <Text>{cat3}</Text>
                        <Text>{price3}</Text>
                    </HStack>
                    <HStack>
                        <Text>{cat4}</Text>
                        <Text>{price4}</Text>
                    </HStack>
                </Stack>

            </Box>
            <Box>
                <Text mt="20px" textTransform={"capitalize"} fontWeight={"500"} fontSize={"1.5em"} color={"orange.orange500"}>Contact Information</Text>

                <Stack textTransform={"uppercase"} fontWeight={"500"} textAlign={'center'} fontSize={"1em"} color={"#242424"} >
                    <HStack>
                     
                        <Text>{cont1}</Text>
                    </HStack>
                    <HStack>

                        <Text>{cont2}</Text>
                    </HStack>
                  
                </Stack>

            </Box>
            </Flex>


        </Box>
    )
}
