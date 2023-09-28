import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function DrawerNavItem({ text, link, icon }) {
    const nav = useNavigate()
    return (
        <HStack bg="blue.blue500" color="#fff" rounded={"8px"} py="10px" px={"20px"} onClick={() => nav (`${link}`)} _hover={{ color: "#ddd", bg: "gray.gray600" }}>
            <Box>{icon}</Box>
            <Text w="80%" fontSize={"15px"} textAlign={"center"} px="20px" fontWeight={"600"} textTransform={"Capitalize"} transition={"0.3s ease-in"} >
                {text}
            </Text>
        </HStack>

    )
}
