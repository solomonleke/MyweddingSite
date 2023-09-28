import { Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavItem({text,link}) {
  const nav = useNavigate()
  return (
    <Text fontSize={"15px"} onClick={() => nav(`${link}`)} _hover={{color: "orange.orange400"}} px="20px" textTransform={"Capitalize"} transition={"0.3s ease-in"}>
      {text}
    </Text>
  )
}
