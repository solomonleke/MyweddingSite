import React from "react";

import OuterLayout from "../Layouts/Index";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import Seo from "../Utils/Seo";
import GiftUsImg from "../asset/image2.jpg";
import { GrAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";

const Faq = () => {
  return (
    <OuterLayout>
      <Seo title="Our Love Story" description="OurLoveStory" />
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
              FAQS
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box my={"8rem"} px={{ base: "5%", lg: "20%" }}>
        <Accordion border={"1px"} allowMultiple>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px " />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                      pl={8}
                      textAlign="left"
                    >
                      What is the colour code?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Blush pink and white for Friday; Maroon and Rose gold for Saturday
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      Can I come without an access card?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Your presence is the only access card you need . Be there!
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      Can I bring others with me?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 Yes you can.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      Will there be a reception?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Oh Yes ! Reception follows immediately after the church wedding
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      How safe is the wedding reception?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 It is quite save as the venue is inside OAU site
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      Is it okay to take pictures with our cameras during the
                      wedding?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 Yes it is okay.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      What if I want to come around before the wedding day?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Of course , There are hotels thats have been carefully selected just for you, Navigate to Hotel Info on the website or contact anuy of our RSVP for more info .
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      I’d like to get the selected wedding fabric for my clothes
                      or cap. Who can I reach out to?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Whats a Yoruba wedding without Aso ebi , Kindly reach out to 09053655151 to get yours .
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        
          <AccordionItem py={0.5}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ color: "orange.orange500" }}>
                    {isExpanded ? (
                      <BiMinus fontSize="12px" />
                    ) : (
                      <GrAdd fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={8}
                      textAlign="left"
                      fontSize={"1.2rem"}
                      fontWeight={500}
                    >
                      Whom should I call with questions?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Kindly reach out to our RSVP or call 09053655151 for further enquiry
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </OuterLayout>
  );
};

export default Faq;
