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
          finalFocusRef={btnRef} size={"md"} px={12}
        >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}

  
            <DrawerBody bg={'red'} >
              <Box mt={8} bg={'green'}  w={'100%'} h={'30rem'}>
              <Image h={"100%"} w={"100%"} src={singleData.photo} />
              </Box>
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
  