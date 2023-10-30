import { Box, Button, SlideFade, useDisclosure,Text } from "@chakra-ui/react"


export function SlideFadeEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button _hover={onToggle}>Click Me</Button>
        <SlideFade in={isOpen} offsetY='20px'>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <Text>export as not fouButton, AccordionDescendantsProvider, AccordionIcon, AccordionItem, AccordionPanel, AccordionProvider, Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon,</Text>
          </Box>
        </SlideFade>
      </>
    )
  }