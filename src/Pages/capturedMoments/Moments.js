import React from "react";
import OuterLayout from "../../Layouts/Index";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Button from "../../Components/Button";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import image1 from "../../asset/image1.jpg";
import Toppage from "../../Components/Toppage";

const Moments = () => {

  const MomentPictures=[{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"},{photo:"https://bit.ly/code-beast"}]


  return (
    <OuterLayout>
      <Toppage text={'Moments'} image={image1} />
      <Box mt={'8rem'} px={'15%'}>
        <Flex gap={4} wrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
        { MomentPictures.map((item,Index)=>(
          <Box w={'18rem'} h={'18rem'} >
            <Image h={'100%'} w={'100%'} src={item.photo}/>
          </Box>
        ))}

        </Flex>
        <Center h={'10rem'} fontSize={'3rem'} mt={8} bgColor={'grey'} fontWeight={'500'}>Moments</Center>
      </Box>
    </OuterLayout>
  );
};

export default Moments;
