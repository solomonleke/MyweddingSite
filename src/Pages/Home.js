import React, { useState, useRef, useEffect } from "react";
import Seo from "../Utils/Seo";
import OuterLayout from "../Layouts/Index";
import { Box, Flex, Image, SimpleGrid, Text, scroll } from "@chakra-ui/react";
import Button from "../Components/Button";
import { useNavigate, Link } from "react-router-dom";
import image1 from "../asset/image3.jpg";
import rose from "../asset/rose.png";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import wife from "../../src/asset/ireti1.jpg";
import { transform } from "framer-motion";

export default function Home() {
  const [TimerDays, setTimerDays] = useState("00");
  const [TimerHours, setTimerHours] = useState("00");
  const [TimerMinutes, setTimerMinutes] = useState("00");
  const [TimerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 9, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        //  update our timer
        // console.log(`${days}:${hours}:${minutes}:${seconds}`)
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  const nav = useNavigate();
  const zoomLink =
    "https://us04web.zoom.us/j/74886279975?pwd=BkGzFVZz45er07oVGaomZrS7bTCusa.1";

  // let countDown = countdown()

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <OuterLayout>
      <Seo title="Home" description="HomePage" />

      <Box
        minH="100vh"
        w="100%"
        bgImage={image1}
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
              fontSize={["50px", "48px", "60px", "60px", "75px"]}
              lineHeight={["55px", "60px", "60px", "80px", "80px"]}
              fontWeight={"700"}
            >
              We're getting married
            </Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          h=""
          textAlign={"center"}
        >
          <Box w={["90%", "80%", "60%", "55%", "55%"]} color="#fff">
            <Text fontSize={["20px", "20px", "25px", "30px", "25px"]} mt="32px">
              {" "}
              "Love is our private island; It is where we both meet in secret,
              away from the hassles and frictions of life"
            </Text>
          </Box>
        </Flex>

        <Flex
          mx={["7%", "0"]}
          mt={["74px", "64px"]}
          pb="32px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Button
            w={["100%", "auto"]}
            mt={["10px", "0"]}
            hoverColor="orange.orange500"
            hoverBorder={"none"}
            border="1px solid #fff"
            background="transparent"
            onClick={() => (window.location = `#countdown`)}
          >
            Read more
          </Button>
        </Flex>

        <Flex
          onClick={() => (window.location = `#countdown`)}
          cursor={"pointer"}
          color={"orange.orange400"}
          mt={["74px", "64px"]}
          pb="32px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <div className="arrowDown">
            <HiOutlineArrowNarrowDown fontSize={"34px"} />
          </div>
        </Flex>
      </Box>

      <Box
        minH={"100vh"}
        bg="#E5E3E3"
        pt="52px"
        px="3%"
        id="countdown"
        position={"relative"}
      >
        <Flex
          mx={["7%", "0"]}
          mt={["34px", "34px"]}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Image src={rose} />
        </Flex>

        <Text
          textAlign={"center"}
          color={"#595e5e"}
          fontWeight={"light"}
          mt="1em"
          fontSize={"20px"}
        >
          Friday, 9th February 2024 - Traditional Wedding
        </Text>
        <Text
          textAlign={"center"}
          color={"#595e5e"}
          fontWeight={"light"}
          fontSize={"20px"}
        >
          &
        </Text>
        <Text
          textAlign={"center"}
          color={"#595e5e"}
          fontWeight={"light"}
          fontSize={"20px"}
        >
          Saturday, 10th February 2024 - White Wedding
        </Text>
        <Text
          textAlign={"center"}
          color={"orange.orange500"}
          fontWeight={"400"}
          fontSize={"2em"}
          lineHeight={"1.3em"}
          mt="10px"
        >
          Countdown with us to our big day
        </Text>

        <div className="timer">
          <div>
            <section>
              <p>{TimerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{TimerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{TimerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{TimerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </div>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Box w={["90%", "80%", "60%", "50%", "50%"]} color="#595e5e">
            <Text
              fontSize={["1em", "1em", "1.1em", "1.2em", "1.3em"]}
              mt="12px"
            >
              {" "}
              “Therefore shall a man leave his father and his mother, and shall
              cleave unto his wife: and they shall be one flesh.”
            </Text>
          </Box>
        </Flex>
        <Flex
          mx={["7%", "0"]}
          mt="10px"
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Button w={["100%", "auto"]} mt={["10px", "0"]}>
            Get E-invite
          </Button>
        </Flex>
      </Box>
      <Box mt="32px" bg="orange.orange500" p="1.5em">
        <Text color="#fff" fontSize="24px" fontWeight="600" textAlign="center">
          {" "}
          Live Stream
        </Text>
        <Text
          color="#fff"
          fontSize="16px"
          fontWeight="400"
          textAlign="center"
          mt="20px"
        >
          Our wedding will be live streamed. Click the button below to join live
          and use the password - MIMO24
        </Text>
        <a href={`${zoomLink}`} target={"blank"}>
          <Flex
            mx={["7%", "0"]}
            mt="32px"
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Button
              w={["100%", "auto"]}
              mt={["10px", "0"]}
              hoverColor="#000"
              px="30px"
              leftIcon={<FaVideo />}
              hoverBorder={"none"}
              border="2px solid #fff"
              background="transparent"
            >
              Watch Live
            </Button>
          </Flex>
        </a>
      </Box>
      <Text
        mt={"32px"}
        textAlign={"center"}
        fontSize={"2em"}
        px={"6%"}
        textTransform={"uppercase"}
        fontWeight={"600"}
        lineHeight={"1em"}
        color={"#121f38"}
      >
        GPS location of the hall
      </Text>
      <Flex justifyContent={"center"} my="32px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4569407425242!2d4.528358073776688!3d7.525035410717719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830e891e83699%3A0xa8fb60744f557fb6!2sOgunbanjo%20Hall!5e0!3m2!1sen!2sng!4v1695929953050!5m2!1sen!2sng"
          width="1000"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>
      <Text
        mt={"32px"}
        textAlign={"center"}
        fontSize={"2em"}
        px={"6%"}
        textTransform={"uppercase"}
        fontWeight={"600"}
        lineHeight={"1em"}
        color={"#121f38"}
      >
        GPS location of the Church
      </Text>
      <Flex justifyContent={"center"} my="32px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63287.29814134513!2d4.489732840329909!3d7.525123892648146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038379c97b54af5%3A0x1b6c499e958acf03!2sChrist%20Apostolic%20Church%20Mount%20Bethel%2C%20Ede%20Road%20Assembly%2C%20Ile%20Ife!5e0!3m2!1sen!2sng!4v1695931018153!5m2!1sen!2sng"
          width="1000"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>

      <Text
        mt={"32px"}
        textAlign={"center"}
        fontSize={"2em"}
        px={"6%"}
        textTransform={"uppercase"}
        fontWeight={"600"}
        lineHeight={"1em"}
        color={"#121f38"}
      >
        How We Started
      </Text>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box w={["90%", "80%", "60%", "50%", "50%"]} color="#595e5e">
          <Text fontSize={["1em", "1em", "1.1em", "1.2em", "1em"]} mt="22px">
            {" "}
            "One of the surprising things after the day we met was that we got
            along pretty quick which I never envisaged." - Iretioluwa Popoola
          </Text>
        </Box>
      </Flex>

      <SimpleGrid
        columns={2}
        spacing={10}
        h={'80rem'}
        my={"6rem"}
        // position='relative'
       
        
        minChildWidth={"400px"}
        
        paddingX={{ base: "9%", lg: "15%" }}
      >
        <Box p="8"   border={"3px dashed"}>
          <Box h={"20rem"} w={"20rem"} mx={"auto"}>
            <Image
              alt="wife"
              borderRadius={"50%"}
              h={"100%"}
              w={"100%"}
              src={wife}
            />
          </Box>
          <Text fontSize={{ base: "24px", md: "30px", lg: "36px" }}>
            One of the surprising things after the day we met was that we got
            along pretty quick which I never envisaged." - Iretioluwa
            Poooooooopoola
          </Text>

          <Box my={12} h={"10rem"} w={"10rem"} mx={"auto"}>
            <Image
              alt="wife"
              borderRadius={"50%"}
              h={"100%"}
              w={"100%"}
              src={image1}
              
            />
          </Box>

          <Box h={"20rem"} w={"20rem"} mx={"auto"}>
            <Image borderRadius={"50%"} h={"100%"} w={"100%"} src={wife} />
          </Box>
        </Box>

        <Box p="12" border={"5px solid"} overflowY={'auto'}>
          <Box>
            <Text color={"red"} fontSize="2xl">
              December 13, 2020{" "}
            </Text>
            <Text as={"b"} fontSize="xl">
              How we met
            </Text>
            <Text>
              We met each other through a mutual friend on Sunday 13th of
              December 2020. It was after camp meeting in our local church. I
              was speaking with a friend after service when my friend just came
              over to me and said “I have found your wife.” Of course, I laughed
              over it as prior before then, both of us were trying to be on the
              lookout for ladies we could be in a relationship with. I just
              shrugged it off, but he insisted the girl speaks Queen’s English
              and is befitting for me. Still not sounding convincing enough, he
              dragged me to where she was sitting and introduced us. “I’m Akin,
              it’s nice meeting You”, I said and hurriedly looked for an excuse
              to “avoid” the girl. My first impression was that she was going be
              very proud with her poise and English. Compared to other ladies I
              had met in similar fashion, I came back to her after an hour and
              sat down to talk to her which was really strange. We had a very
              interesting conversation for about an hour which was really
              impressive. From me bantering her for OAU not giving her an
              admission to me joking about her Queen’s English, she really did
              make a good impression to me, but then, I never thought about
              anything love as it were. After our first conversation, it was
              time for her to go. I offered to wheel her box to the bus and just
              after the bus was about to move, I requested for her phone number
              which she called with everybody looking at me.
            </Text>
            <Box h={"40rem"} w="100%" mt="10" mx={"auto"}>
              <Image h={"100%"} w="100%"  src={wife} alt="" />
            </Box>
            <Box h={"40rem"} w="100%" hover={'transform:scale(1.5)'} mt="10" mx={"auto"}>
              <Image h={"100%"} w="100%" src={wife} alt="" />
            </Box>
            
          </Box>
        </Box>
      </SimpleGrid>
    </OuterLayout>
  );
}
