import React from 'react'
import OuterLayout from '../../Layouts/Index'
import Toppage from '../../Components/Toppage'
import image from '../../asset/image3.jpg'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Ourfriends = () => {
  const friendData=useSelector((state)=>state.singleData.singleData)
  console.log("friendDataRedux" ,friendData)




  return (
   <OuterLayout>
   <Toppage image={image} text={friendData.Name}/>
   <Box mt={'8rem'} px={'15%'}>
        <Flex flexDirection={{base:'column',lg:"row"}} gap={4} p={'2rem'} bg={"gray.200"} alignItems={'center'} justifyContent={'center'}>
         
          <Box w={'50%'} m={'auto'} >
          <Box w={'18rem'} h={'18rem'} >
            <Image h={'100%'} w={'100%'} src={friendData.photo}/>
          </Box>
          </Box>
          <Box>
          <p color='orange' fontSize={'2rem'} >{friendData.Name}</p>
          <Flex>
            <p>Position:{friendData.category}</p>
          </Flex>
            <Text  >{friendData.story}</Text>
          </Box>
        

        </Flex>
        
      </Box>

   </OuterLayout>
  )
}

export default Ourfriends