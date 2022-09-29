import React from 'react'
import {
  Box,
  Text,
  Progress,
  Textarea
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Bio = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({bio: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='3xl' color='blue.200'>{`What makes ${profile.name} tick?`}</Text>
        <Textarea size='lg' placeholder={`ex. ${profile.name} is the best at pooping!`} value={profile.bio} onChange={handleInputChange}></Textarea>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='photos' next='finish'/>
        <Progress value={87.5}/>
      </Box>
    </>
  )
}

export default Bio