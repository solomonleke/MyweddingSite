import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../asset/logoGold.png";
import logoBlack from "../asset/logoBlack.png";
import NavItem from "./NavItem";
import { BiMenuAltRight, BiSolidContact } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import Button from "../Components/Button";
import DrawerNavItem from "../Components/DrawerNavItem";
import invite from "../asset/InvitationCard.jpeg";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const list = [
    {
      text: "Home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      text: "our love story",
      link: "/our-love-story",
      icon: <FaProductHunt />,
    },
    {
      text: "gift us",
      link: "/gift-us",
      icon: <IoMdPricetag />,
    },
    {
      text: "wedding info",
      link: "/wedding-info",
      icon: <BiSolidContact />,
    },
    {
      text: "Hotel Bookings",
      link: "/hotel-bookings",
      icon: <BiSolidContact />,
    },
    {
      text: "FAQs",
      link: "/faqs",
      icon: <BiSolidContact />,
    },
  ];

  // const nav = useNavigate();
  return (
    <Flex
      py="12px"
      bg="rgba(42, 42, 42, 0.95)"
      zIndex={"12"}
      px="6%"
      justifyContent={"space-between"}
      position={"fixed"}
      top={"0"}
      w={"100%"}
    >
      <Image src={logo} w={["25%", "20%", "10%", "10%", "10%"]} />

      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        justifyContent={"space-between"}
        cursor={"pointer"}
        alignItems={"center"}
        color={"#fff"}
      >
        {list.map((item, Index) => (
          <NavItem key={Index} text={item.text} link={item.link} />
        ))}

        {/* <Button w='auto' onClick={() => nav("/login")}>Get E-invite</Button> */}
        <a href={invite}>
          <Button w="auto" >
            Get E-Invite
          </Button>
        </a>

      </Flex>

      <Box
        onClick={() => onOpen()}
        color={"#fff"}
        fontSize={"28px"}
        alignItems={"center"}
        display={["flex", "flex", "flex", "none", "none"]}
      >
        <BiMenuAltRight />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        blockScrollOnMount={true}
        bg="black"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg={"orange.orange500"} color="#fff" mt={"17px"} />
          <DrawerHeader>
            <Image src={logoBlack} w={"45%"} />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={"12px"} mt="64px">
              {list.map((item, Index) => (
                <DrawerNavItem
                  key={Index}
                  text={item.text}
                  link={item.link}
                  icon={item.icon}
                />
              ))}

              {/* <Button w='auto' onClick={() => nav("/login")}>Enroll now</Button> */}

              <a href={invite}>
                <Button w="auto" >
                  Get E-Invite
                </Button>
              </a>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
