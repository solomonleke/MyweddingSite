import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Button from "../Components/Button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Input from "../Components/Input";
import logo from "../asset/logoGold.png";


export default function Footer() {
  return (
    <Box bg="#242424" mt='6%' px="6%" py="12px" pb="32px">
      <Flex 
        justifyContent={"space-between"}
        mt="32px"
        flexWrap={"wrap"}
        mb="32px"
      >
        <Box
          w={["100%", "100%", "100%", "32%", "32%"]}
          justifyContent={"center"}
          display={["flex", "flex", "flex", "block", "block"]}
        >
          <Image w="50%" src={logo} />
        </Box>
        <Box w={["100%", "100%", "100%", "32%", "32%"]} textColor={"#fff"}>
          <Box
            textTransform={"uppercase"}
            textAlign={["center", "center", "center", "left"]}
            mt={["10px", 0]}
            fontWeight={"700"}
          >
            Contact our RSVP{" "}
          </Box>
          <Box
            mt="32px"
            fontSize={"14px"}
            textAlign={["center", "center", "center", "left"]}
            fontWeight={"400"}
            color={"orange.orange400"}
          >
            Email: 
            <Box as="span" position="relative" left="10px" color="#fff" fontWeight={"700"}>
              
               lordsoliz@gmail.com
            </Box>
          </Box>
          <Text
           textAlign={["center", "center", "center", "left"]}
           mt="10px"
           fontSize={"14px"}
           fontWeight={"400"}
           color={"#fff"}
          > Femi Femo - +234(703) 457 7229{" "}
          </Text>
          <Text
           textAlign={["center", "center", "center", "left"]}
           mt="10px"
           fontSize={"14px"}
           fontWeight={"400"}
           color={"#fff"}
          >  Love - +234(703) 265 0334
          </Text>
          <Text
           textAlign={["center", "center", "center", "left"]}
           mt="10px"
           fontSize={"14px"}
           fontWeight={"400"}
           color={"#fff"}
          >   Obinna - +234(818) 187 8447
          </Text>
          <Text
           textAlign={["center", "center", "center", "left"]}
           mt="10px"
           fontSize={"14px"}
           fontWeight={"400"}
           color={"#fff"}
          > Kehinde - +234(703) 160 8571
          </Text>

        </Box>
        <Box w={["100%", "100%", "100%", "32%", "32%"]} color={"#fff"}>
          <Box
            textTransform={"uppercase"}
            textAlign={["center", "center", "center", "left"]}
            mt={["20px", "20px", "20px", 0]}
            fontWeight={"700"}
          >
            Join the Wait list
          </Box>

          <Stack mt="32px" spacing={"15px"}>
            <Input label="Your Email" labelBg="#242424" />

            <Button w="auto">Submit</Button>
          </Stack>
        </Box>
      </Flex>

      <Divider />

      <Text
        textTransform={"capitalize"}
        fontSize={"14px"}
        color="#fff"
        textAlign={"center"}
        mt="12px"
      >
        © {new Date().getFullYear()} copyright. All right reserved
      </Text>
    </Box>
  );
}
