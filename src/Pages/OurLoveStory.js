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
  Center,
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
              fontSize={["50px", "48px", "60px", "60px", "75px"]}
              lineHeight={["55px", "60px", "60px", "80px", "80px"]}
              fontWeight={"700"}
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
                <AccordionButton _expanded={{ color: "orange.orange500" }}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ color: "orange.orange500" }}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ color: "orange.orange500" }}>
                  <Box
                    as="span"
                    flex="1"
                    fontSize={"1.1rem"}
                    fontWeight={"700"}
                    textAlign="left"
                  >
                    30 Things I Love About Our Relationship
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                mt={"8"}
                fontSize={"1.1rem"}
                color={"grey"}
              >
                <Text my={4}>
                  I decided to add something to make you “Awwn Awwwn”
                </Text>
                <Text my={4}>
                  I’m doing a 30 things I love about our relationship write up.
                </Text>
                <Text mt={4}>
                  1. I love that GOD is at the centre of our relationship and
                  everything we do together. The fact that we both hold GOD’s
                  word in high esteem and as final authority!{" "}
                </Text>
                <Text mt={4}>
                  2. I love how we both have GOD and Ministry as our priority!
                </Text>
                <Text mt={4}>
                  3. I feel sooooo pampered! I’m not complaining, I likey. I
                  like the fact that I can be a big baby whenever I want to be
                  and he doesn’t complain🤣
                </Text>
                <Text mt={4}>
                  4. I can be cranky sometimes especially on days that I feel so
                  stressed from work or other activities (you won’t know if you
                  are not so close to me), have you met my Husband to be and the
                  way he handles it?🥹{" "}
                </Text>
                <Text mt={4}>
                  5. I love how I am so certain that this man can give literally
                  the world to me if he has access to it.
                </Text>
                <Text mt={4}>
                  6. I love how intentionally he makes efforts to make
                  adjustments to every single thing I’ve complained about.
                </Text>
                <Text mt={4}></Text>
                <Text mt={4}></Text>
                <Text mt={4}></Text>
                <Text mt={4}></Text>
                <Text mt={4}>
                  7. I love the way we both forgive and let go of issues. Of
                  course, we’re both believers. It’s how we fight and the next
                  minute, we are laughing about the same thing we quarrelled
                  over{" "}
                </Text>
                <Text mt={4}>
                  8. I love how I can play roughly (even though I’ve been
                  injured so many times but I don’t mind sha){" "}
                </Text>
                <Text mt={4}>
                  9. I love how this man intentionally pays attention to every
                  detail of my life!
                </Text>
                <Text mt={4}>
                  10. How we both intentionally help each other grow and do
                  better!
                </Text>
                <Text mt={4}>
                  11. I love how I feel so respected and honoured! (Respect is a
                  core value for me){" "}
                </Text>
                <Text mt={4}>
                  12. I love how I’ve never had to doubt that I’m loved in my
                  relationship.
                </Text>
                <Text mt={4}>13. I love how I loooooooooovvvveeee him</Text>
                <Text mt={4}>14. I love how I have his mumu button too😂 </Text>
                <Text mt={4}>
                  15. I love that our families love each other too
                </Text>
                <Text mt={4}>16. I love how we have similar values </Text>
                <Text mt={4}>
                  17. I love how we don’t always like the same things but
                  respectfully communicate this even though we enjoy a lot of
                  things together
                </Text>
                <Text mt={4}>18. Our conflict resolution too 😄 </Text>
                <Text mt={4}>
                  19. I love how I can PROUDLY show him to the world!{" "}
                </Text>
                <Text mt={4}>
                  20. I love how my words never fall to the ground in our
                  relationship and vice versa (how we hold each others words in
                  high esteem)
                </Text>
                <Text mt={4}>
                  21. The way we both defend each other too🤣 (My Husband is
                  always right in every conversation you have with me oh) I can
                  never not have a biased view of things especially when it
                  comes to him.
                </Text>
                <Text mt={4}>
                  22. I love how not even a fly dares touch me!
                </Text>
                <Text mt={4}>
                  23. I love how we intentionally both make efforts to love each
                  other right.
                </Text>
                <Text mt={4}>
                  24. I love how we make compromises for each other and it’s not
                  even difficult to do for the most part.
                </Text>
                <Text mt={4}>
                  25. I love the fact that we both tell each other the truth
                  regardless of what it is and however it’s taken. We’re so
                  blunt with each other.
                </Text>
                <Text mt={4}>
                  26. The flip side to it is that I also love how we don’t say
                  the truth of the matter at the moment just to make the other
                  party feel good. Especially when they are wrong. Even though,
                  we’d eventually still say it but we’ve both learnt timing in
                  saying what needs to be said.{" "}
                </Text>
                <Text mt={4}>
                  27. I love that we have mutual friends tooooooooooo
                </Text>
                <Text mt={4}>
                  28. I love that we both feel safe with each other
                </Text>
                <Text mt={4}>
                  29. I love how effortlessly we’re learning to please each
                  other.
                </Text>
                <Text mt={4}>
                  30. I love that we’re both excited about our marriage even
                  though we’re not excited about the same things (shade
                  intended). I DID IT!!!!!! I want to add one more My Soon to be
                  Husband is sooooooooooo patient and understanding and that’s
                  been a major factor that has made our relationship work! Cause
                  my drama ehhhhnnnn🥹🥹😂
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        
          
          <AspectRatio maxW="60rem" mt={12} mx={'auto'} ratio={1}>
            <iframe
              title="Our Story Video"
              src="https://www.youtube.com/watch?v=lWA2pjMjpBs&list=RDlWA2pjMjpBs&start_radio=1&rv=tg00YEETFzg"
              allowFullScreen
            />
          </AspectRatio>
        
      </Box>
    </OuterLayout>
  );
};

export default OurLoveStory;
