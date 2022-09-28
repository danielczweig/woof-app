import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { GiLabradorHead, GiDogHouse } from "react-icons/gi";
import { HiChatAlt } from "react-icons/hi";

const NavBar = ( { setDisplay } ) => {

  return (
    <Box
      backgroundColor='brand.900'
      alignItems='center'
      justifyContent='space-between'
      display='flex'
      h='10vh'
      pl='6'
      pr='6'
    >
      <IconButton aria-label='Profile' fontSize='2rem' variant='outline' borderWidth='2px' isRound='true' h='3.25rem' w='3.25rem' icon={<GiLabradorHead color='white'/>} onClick={() => setDisplay('profile')}/>
      <IconButton aria-label='Profile' fontSize='2rem' variant='outline' borderWidth='2px' isRound='true' h='3.25rem' w='3.25rem' icon={<GiDogHouse color='white'/>} onClick={() => setDisplay('home')}/>
      <IconButton aria-label='Profile' fontSize='2rem' variant='outline' borderWidth='2px' isRound='true' h='3.25rem' w='3.25rem' icon={<HiChatAlt color='white'/>} onClick={() => setDisplay('chat')}/>
    </Box>
  )
}

export default NavBar