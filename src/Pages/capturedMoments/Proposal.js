import React from "react";
import OuterLayout from "../../Layouts/Index";
import {
  Box,
  ChakraProvider,
  VStack,
  Center,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import image1 from "../../asset/image1.jpg";
import Toppage from "../../Components/Toppage";

const Proposal = () => {
  const ProposalPictures = [
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
    { photo: "https://bit.ly/code-beast" },
  ];

  return (
    <OuterLayout>
      <Toppage text={"Proposal"} image={image1} />
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
          {/* { ProposalPictures.map((item,Index)=>(
          <Box w={'18rem'} h={'18rem'} >
            <Image h={'100%'} w={'100%'} src={item.photo}/>
          </Box>
        ))} */}

          <VStack spacing={8} align="center">
            <Text fontSize="2xl" fontWeight="bold">
              She said YES o o  !!!
            </Text>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box
                overflow={"auto"}
                h={"40rem"}
                w="100%"
                mt="10"
                mx={"auto"}
                objectFit={"contain"}
              >
                <iframe
                  width="400"
                  height="450"
                  src="https://www.youtube.com/embed/XJJ2LPTCInY?si=s9fzbVV7zLeHshnf"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Box>
            </Box>
          </VStack>
        </Flex>
        <Flex
          h={"10rem"}
          fontSize={"3rem"}
          mt={8}
          bgColor={"grey"}
          fontWeight={"500"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text px={"8"}>Proposal</Text>
        </Flex>
      </Box>
    </OuterLayout>
  );
};

export default Proposal;
