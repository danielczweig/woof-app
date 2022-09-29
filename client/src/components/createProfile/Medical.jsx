import React from 'react'
import {
  Box,
  Text,
  Progress,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Medical = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({[e.target.id]: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='3xl' color='blue.200'>Ok! Now for some basic medical info.</Text>
        <FormControl>
          <FormLabel>Neutered/Spayed?</FormLabel>
          <Select
            id='sexed'
            placeholder='Choose One'
            width='auto'
            value={profile.sexed}
            onChange={handleInputChange}
          >
            <option>Yes</option>
            <option>No</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Vaccinated?</FormLabel>
          <Select
            id='vaccinated'
            placeholder='Choose One'
            width='auto'
            value={profile.vaccinated}
            onChange={handleInputChange}
          >
            <option>Yes</option>
            <option>No</option>
          </Select>
        </FormControl>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='personality' next='location'/>
        <Progress value={50}/>
      </Box>
    </>
  )
}

export default Medical