import React from 'react'
import {
  Box,
  Text,
  Input,
  Progress,
  FormControl,
  FormLabel
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Name = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({breed: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>{`Great! What is ${profile.name}'s breed?`}</Text>
        <FormControl>
          <FormLabel>Primary</FormLabel>
          <Input
            id='breed'
            placeholder='ex. Daschund'
            value={profile.breed}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='name' next='basicInfo'/>
        <Progress value={12.5}/>
      </Box>
    </>
  )
}

export default Name