import React from 'react'
import {
  Box,
  Text,
  Progress
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Finish = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({bio: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>That's it! Ready to sniff out some friends?</Text>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='bio' curr='finish'/>
        <Progress value={100}/>
      </Box>
    </>
  )
}

export default Finish