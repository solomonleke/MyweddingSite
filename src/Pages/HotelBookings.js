import React from "react";
import OuterLayout from "../Layouts/Index";
import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import GiftUsImg from "../asset/image2.jpg";
import Button from "../Components/Button";
import invite from "../asset/InvitationCard.jpeg";
import invitation from "../asset/InvitationCardpic.jpeg";
import WeddingInfocard from "../Components/WeddingInfocard";
import HotelList from "../Components/HotelList";

const HostelBookings = () => {
    return (
        <OuterLayout>
            <Seo title="Hotel Bookings" description="Hotel Bookings" />
            <Box
                minH="50vh"
                w="100%"
                bgImage={GiftUsImg}
                bgSize={"cover"}
                bgPos={"center"}
                boxShadow={"inset 0 0 0 2000px rgba(10, 10, 10, 0.7);"}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    pt={["150px", "150px", "150px", "180px", "150px"]}
                    textAlign={"center"}
                >
                    <Box w={["90%", "80%", "70%", "60%", "60%"]} color="#fff">
                        <Text
                            mt={12}
                            fontSize={["50px", "48px", "60px", "60px", "75px"]}
                            lineHeight={["55px", "60px", "60px", "80px", "80px"]}
                            fontWeight={"1"}
                        >
                            Hotel bookings
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Center fontSize={["1.5rem","1.5rem","1.5rem","2rem"]} mt={12} color={"#242424"}>
                List of Hotels Available 
            </Center>
           
        
            <Stack  spacing={"22px"} mx="6%">

                <HotelList
                    name={"Kriscourt hotel"}
                    ratings={"5 min (2.6 km) via Road 8"}
                    location={"Road 7 Gate, 1 Hezekiah Oluwasanmi Road, Ife 220101, Osun"}
                    map={ <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.507140374063!2d4.520417073657798!3d7.519528710790838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830b0bc54e7a5%3A0x8a02b9ce6c8d9fa1!2sKrisCourt%20Hotel!5e0!3m2!1sen!2sng!4v1704870772075!5m2!1sen!2sng"
                    width="1000" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                    cat1={"DELUX"}
                    cat2={"SUPERIOR"}
                    cat3={"EXCUTIVE SUITE"}
                    price1={"36,300"}
                    price2={"46,200"}
                    price3={"50,600"}
                    cont1={"+234 706 239 7784"}
                    cont2={"+234 803 313 7401"}
                 
                />
                <HotelList
                    name={"NACETEM Guest house"}
                    ratings={"9 min (5.9 km) via Adesoji Aderemi Rd"}
                    location={"GG4F+CCX, Ife 220101, inside OAU, Osun"}
                    map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.273166070077!2d4.513001117382806!3d7.512815251789109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830d5cdd0e4ef%3A0x79271d75a67dc8a5!2sNACETEM%20Guest%20house!5e0!3m2!1sen!2sng!4v1704874005100!5m2!1sen!2sng"
                     width="1000" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                    cat1={"Basic"}
                    cat2={"Delux"}
                    price1={"8,500"}
                    price2={"12,000"}
                    cont1={"+234 703 498 1514"}
                    cont2={"+234 706 639 4000 "}
                 
                />

             
            </Stack>

           
        </OuterLayout>
    );
};

export default HostelBookings;
