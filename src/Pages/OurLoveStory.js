import React from "react";
import OuterLayout from "../Layouts/Index";

import {
  Box,
  Text,
  Flex,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  // Center,
  AspectRatio,
} from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import loveImg from "../asset/image2.jpg";

const OurLoveStory = () => {
  return (
    <OuterLayout>
      <Seo title="Our Love Story" description="OurLoveStory" />
      <Box
        minH="50vh"
        w="100%"
        bgImage={loveImg}
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
              Our Love Story
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box px={"15%"} my={20}>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "orange.orange500" }}
                  _hover={{ color: "red" }}
                >
                  <Box
                    as="span"
                    flex="1"
                    fontSize={"1.1rem"}
                    fontWeight={"700"}
                    textAlign="left"
                  >
                    Peace's View
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                So, it all started after NYSC camp (I was meant to go and serve my father land o)
                I had just gotten to Ibadan and gotten a place but because I knew no one at that time ,I had to call a friend of mine who hadn't gotten a place but was staying over at a church apartment (mfm I think 🤔) .
                This particular day I went to visit this friend of mine Jennifer  at the church house and prior to that she'd been gisting me about a guy she met there and they were staying there together and she was so crazy about the guy and wanted me to meet him .
                so out of boredom (I mean new corper no  work ) I went to the family house and I  met with my friends crush , met quite a few people and I was just having a lovely afternoon .
                But there in the corner was this "guy" who kept making everybody laugh , was in everyone's face and you just couldn't miss him and I laughed,laughed and laughed , this guy just wouldn't stop ! .
                Fast forward to the next day I found myself there again (ahhhh) this time I didn't even go home to sleep ,then a particular thing happened we were to go hunting for food ,and then there came 2 bikes ,my friend had hopped on a bike with her guy ,then there I was left with this guy that had made me laugh all day,I refused to sit in between him and the bike guy 🤣  as a saint that I am , but what struck me was that unlike most guys he didn't make a fuss out of  it ,he gladly sat in the middle and there I was like oh what a gentleman .(😅)
                Fast-forward to the next day , I invited the trio to my place ( Jennifer her boo and "my boo" 🤭)and then this guy cooked ! A guy that cooks ! (I'm like oh em gee 😮) meanwhile ,all along we had talked ,cos my friend was busy with his friend so we had to talk, and we were getting along in a weird way ,one way I hadn't gotten along with anybody before in the past . so , he cooked ,he was sweet , he made me laugh ,the way he talked about his life and the things he loved made me admire him, oh and he cooked ( trust me you can't imagine ) .
                One thing led to another and here we are 4 years after ! I can't wait to say I do 🥰
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ color: "orange.orange500" }}
                  _hover={{ color: "red" }}
                >
                  <Box
                    as="span"
                    flex="1"
                    fontSize={"1.1rem"}
                    fontWeight={"700"}
                    textAlign="left"
                  >
                    Solomon's View
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                So it all started in my service year 2019.
                I was posted to Oyo state and i wanted to work my service to Ibadan ,
                I had plans to get a place before getting to Ibadan and I had given a cousin of mine money to get me a place  , On my arrival I
                got to know she hadn't gotten the place due to bank issues.Then I reached out to a close friend who had  camped in oyo state
                so I could stay with him while I sorted my accommodation issues ,He reached out to me and told me he was staying at a church family house as he had not gotten a place to stay.
                so I found myself at the church family house too , there I got to meet a lot of people , played and had a lot of fun , then on a very beautiful day this very fine  babe came around to see a friend in the family house
                I got to know she had a place and she just came to see her friend who was a friend of my friend . Long story short she had a very sweet sense of humour just like me , she made me laugh! She was nice to me , the next day She took us to her place and  we started drifting towards one another from that moment . I had no plans for a relationship at all , cos i had just left a toxic relationship
                but few weeks down the line i just discovered i was already seeing a future with this sweet babe, she had all the material any man would want  , all my attempt to not get in the feeling failed woefully , covid came and she had to go home and it was like a part of me was ripped away .
                That was when i knew ! a few months down the line , i jokingly asked if she would marry me and she said yes ! 4 years down and i cant wait to pay her bride price .
                I cant wait to spend the rest of my life with my NYSC baby !.
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </Box>

        {/* <AspectRatio maxW="60rem" maxH={"40rem"} mt={12} mx={"auto"} ratio={1}>
          <iframe
            title="Our Story Video"
            src="https://www.youtube.com/watch?v=lWA2pjMjpBs&list=RDlWA2pjMjpBs&start_radio=1&rv=tg00YEETFzg"
            allowFullScreen
          />
        </AspectRatio> */}
      </Box>
    </OuterLayout>
  );
};

export default OurLoveStory;
