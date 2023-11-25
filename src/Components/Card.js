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
      <Flex justify={"space-between"}  wrap="wrap" w={"100%"}>
        {data.map((card, Index) => (
          <Box mt={5} w={["100%","48%","32%","24%","24%"]} key={Index} onClick={() => HandleClick(card)}>
            <Box w={"100%"} position={"relative"} >
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

              <Image   w={"100%"} src={card.photo} />
            </Box>
            <Box pt="10px">
              <Text fontSize={"1.2rem"} fontWeight={600}  color={ "orange.orange500" }>
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
