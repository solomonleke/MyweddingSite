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
      <Box mt={"8rem"} px={"15%"}>
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
              Video Player
            </Text>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <video
                controls
                width="100%"
                height="auto"
                poster="path-to-poster-image.jpg" // Optional: Provide a poster image
              >
                <source src="path-to-your-video.mp4" type="video/mp4" />
                {/* Add additional source elements for different video formats if needed */}
                Your browser does not support the video tag.
              </video>
            </Box>
          </VStack>
        </Flex>
        <Center
          h={"10rem"}
          fontSize={"3rem"}
          mt={8}
          bgColor={"grey"}
          fontWeight={"500"}
        >
          Pre-Wedding Shoot
        </Center>
      </Box>
    </OuterLayout>
  );
};

export default Proposal;
