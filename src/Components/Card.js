import { Box, Image, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CardDrawer } from "./Drawer";
import { useState } from "react";
import Button from "./Button";

const Card = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [singleData, setSingleData] = useState({});

  const HandleClick = (card) => {
    onOpen();
    setSingleData(card);
  };

  return (
    <>
      <Flex justify={"space-between"} cursor={"pointer"}  wrap="wrap" w={"100%"}>
        {data.map((card, Index) => (

          <Box mt={5} w={["100%","48%","32%","24%","24%"]} key={Index} onClick={() => HandleClick(card)}>
            <Box w={"100%"} position={"relative"} >

              <Text
                position={"absolute"}
                top={0}
                right={0}
                fontSize={"1.1rem"}
                textTransform={"uppercase"}
                p={2}
                bg={"orange.orange500"} fontWeight={500} color={"white"}
              >
                {card.category}
              </Text>

              <Image height={"350px"} objectPosition={"center"} objectFit={"cover"}  w={"100%"} src={card.photo} />
            </Box>
            <Box pt="10px">
              <Text fontSize={"1.2rem"} fontWeight={600}  color={ "orange.orange500" }>
                {card.Name}
              </Text>
              <Text fontSize="14px" fontWeight="400">{card.summary}</Text>
            </Box>

            <Button background="#ddd" hoverColor="#333" hColor="#ffe" fontColor="#000" mt={"3"} onClick={() => HandleClick(card)}>Read more</Button>
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
