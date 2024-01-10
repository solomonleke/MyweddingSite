
import {
  Drawer,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  DrawerFooter,
  Text,
  DrawerBody,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";

import React from "react";
import { useRef } from "react";
import Ourfriends from "../Pages/OurFriendsExpanded/Ourfriends";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function CardDrawer({ isOpen, onOpen, onClose, singleData }) {
  const btnRef = useRef();

  const nav = useNavigate();
  const dispatch = useDispatch();



  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
        px={12}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg="orange.orange500" color="#fff"  />
      
          <DrawerBody>
            <Box mt={8}>
              <Image h={"500px"} w={"100%"} objectFit="cover" src={singleData.photo} />
            </Box>
            <Text mt={2} mb={"12"} px={2} fontSize={"2rem"}>
              {singleData.Name}
            </Text>
          
            <Text>{singleData.story}</Text>
          </DrawerBody>

       
        </DrawerContent>
      </Drawer>
    </>
  );
}
