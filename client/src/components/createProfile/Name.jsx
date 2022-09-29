import React from 'react'
import {
  Box,
  Text,
  Input,
  Progress
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Name = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({name: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>What is your doggo's name?</Text>
        <Input
          placeholder='ex. Sir Barkington'
          value={profile.name}
          onChange={handleInputChange}
        />
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows next='breed' curr='name'/>
        <Progress value={5}/>
      </Box>
    </>
  )
}

export default Name