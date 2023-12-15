import React from "react";
import OuterLayout from "../../Layouts/Index";
import { Box, Center, Flex, Image} from "@chakra-ui/react";
// import Button from "../../Components/Button";
// import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import image1 from "../../asset/moments/8.jpeg";
// import image11 from "../../asset/moments/1.jpeg";
import Toppage from "../../Components/Toppage";
import { MomentPictures } from "../../Utils/capturedUtils/momentsPictures";


const Moments = () => {
  return (
    <OuterLayout>
      <Toppage text={"Moments"} image={image1} />
      <Box mt={"8rem"} px={"15%"}>
        <Flex
          gap={4}
          wrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {MomentPictures.map((item, Index) => (
            <Box w={"18rem"} h={'auto'}>
              <Image w={"100%"} h={"auto"} src={item.photo} />
            </Box>
          ))}
        </Flex>
        <Center
          h={"10rem"}
          fontSize={"3rem"}
          mt={8}
          bgColor={"grey"}
          fontWeight={"500"}
        >
          Moments
        </Center>
      </Box>
    </OuterLayout>
  );
};

export default Moments;
