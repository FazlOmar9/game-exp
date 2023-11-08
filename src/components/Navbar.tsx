import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} boxSize='60px'></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar