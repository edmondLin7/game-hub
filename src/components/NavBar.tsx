import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Text, Image} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px'/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar