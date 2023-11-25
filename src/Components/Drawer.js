import {Drawer,Button,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerHeader,Input,DrawerFooter,Text,DrawerBody,useDisclosure, Box, Image} from "@chakra-ui/react"

import React from "react"
import { useRef } from "react"

export function CardDrawer({ isOpen, onOpen, onClose,singleData }) {
    
    const btnRef = useRef()
  
    return (
      <>
        
        <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef} size={"sm"} 
        >
          <DrawerOverlay />
          <DrawerContent >
            {/* <DrawerCloseButton  mb="10px" bg="orange.orange500" color="#fff"/> */}
            {/* <DrawerHeader>Create your account</DrawerHeader> */}

  
            <DrawerBody bg={'#fff'} >

              <Image mt="21px"  w={"100%"} src={singleData.photo} />
             
              <Text mt={2} mb={'12'} px={2} fontSize={'2rem'}>{singleData.Name}</Text>
              <hr/>
              <Text>{singleData.story}</Text>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  