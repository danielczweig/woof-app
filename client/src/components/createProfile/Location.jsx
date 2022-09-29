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

const Location = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({location: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>{`Where does ${profile.name} live?`}</Text>
        <FormControl>
          <FormLabel>Zip Code</FormLabel>
          <Input
            id='primary'
            placeholder='ex. 90403'
            value={profile.location}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='medical' next='photos'/>
        <Progress value={62.5}/>
      </Box>
    </>
  )
}

export default Location