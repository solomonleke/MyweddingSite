import React from 'react'
import OuterLayout from '../../Layouts/Index'
import Toppage from '../../Components/Toppage'
import image from '../../asset/image3.jpg'
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Ourfriends = () => {
  const friendData=useSelector((state)=>state.singleData.singleData)
  console.log("friendDataRedux" ,friendData)




  return (
   <OuterLayout>
   <Toppage image={image} text={'Name'}/>
   <Box mt={'8rem'} px={'15%'}>
        <Flex gap={4} wrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
         
          <Box w={'18rem'} h={'18rem'} >
            <Image h={'100%'} w={'100%'} src={"item.photo"}/>
          </Box>
        

        </Flex>
        <Center h={'10rem'} fontSize={'3rem'} mt={8} bgColor={'grey'} fontWeight={'500'}>Moments</Center>
      </Box>

   </OuterLayout>
  )
}

export default Ourfriends