import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import { bankCardItems } from "../Utils/cardsUtils/bankCardItems";

const BankCard = () => {
  return (
    <Box >
      <Center fontSize={'3rem'} color={ "orange.orange500"} mt={20}>Our Bank Details</Center>

      <Flex wrap={"wrap"} gap={8} justifyContent={"center"}>
        {bankCardItems.map((item, Index) => (
          <Box key={Index} minWidth={"10rem"}   maxWidth={"20rem"} p={8}>
            <Flex justifyContent={"center"} w={"auto"}>
              <Image  src={item.logo} />
            </Flex>
            <Box justify={"space-between"} fontSize={'1.2rem'} fontWeight={500} my={4}>
              <Center>{item.bankName}</Center>
              <Center>{item.bankAccount}</Center>
              <Center>{item.accName}</Center>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BankCard;
