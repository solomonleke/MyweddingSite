import { Box, Image, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CardDrawer } from "./Drawer";
import { useState } from "react";

const Card = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [singleData, setSingleData] = useState({});

  const HandleClick = (card) => {
    onOpen();
    setSingleData(card);
  };

  return (
    <>
      <Flex justify={"center"} gap={"5"} wrap="wrap" w={"100%"}>
        {data.map((card, Index) => (
          <Box mt={5} w={"20rem"} key={Index} boxShadow={'13px 17px 15px -3px rgba(0,0,0,0.1)'} onClick={() => HandleClick(card)}>
            <Box w={"100%"} position={"relative"} h={"20rem"}>
              <Text
                position={"absolute"}
                top={0}
                right={0}
                fontSize={"1.1rem"}
                p={2}
                bg={"orange.orange500"} fontWeight={500} color={"white"}
              >
                {card.category}
              </Text>

              <Image h={"20rem"} w={"100%"} src={card.photo} />
            </Box>
            <Box p="4">
              <Text fontSize={"1.5rem"} fontWeight={500}  color={ "orange.orange500" }>
                {card.Name}
              </Text>
              <Text>{card.summary}</Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <CardDrawer
        isOpen={isOpen}
        singleData={singleData}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Card;
