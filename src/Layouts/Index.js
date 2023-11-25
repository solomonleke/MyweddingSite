import { Box } from '@chakra-ui/react'
import React, { Children } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function OuterLayout({children}) {
    return (
        <Box>
          <NavBar />
            {children}
            <Footer />
        </Box>
    )
}

