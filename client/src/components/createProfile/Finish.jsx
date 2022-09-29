import React from 'react'
import {
  Box,
  Text,
  Progress
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Finish = ( { profile, setLoggedIn }) => {

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>That's it! Ready to sniff out some new friends?</Text>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='bio' curr='finish' profile={profile} setLoggedIn={setLoggedIn}/>
        <Progress value={100}/>
      </Box>
    </>
  )
}

export default Finish