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
          <Box mt={5} w={"20rem"} key={Index} onClick={() => HandleClick(card)}>
            <Box w={"100%"} position={"relative"} h={"20rem"}>
              <Text
                position={"absolute"}
                top={0}
                right={0}
                fontSize={"xl"}
                p={2}
                bg={"magenta"}
              >
                {card.category}
              </Text>

              <Image h={"20rem"} w={"100%"} src={card.photo} />
            </Box>
            <Box p="4">
              <Text fontSize={"3xl"} color={"black"}>
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
