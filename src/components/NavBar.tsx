import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Text, Image} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px'/>
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar