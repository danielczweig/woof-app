import React from 'react'
import {
  Box,
  Text,
  Input,
  Progress,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const BasicInfo = ( { profile, updateProfile }) => {
  const handleInputChange = (e) => updateProfile({[e.target.id]: e.target.value})

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='3xl' color='blue.200'>Perfect! Tell us more.</Text>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <Select
            id='sex'
            placeholder='Choose One'
            width='auto'
            value={profile.sex}
            onChange={handleInputChange}
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Weight</FormLabel>
          <NumberInput
            max={300}
            min={1}
          >
            <NumberInputField
              id='weight'
              placeholder='Enter Weight'
              width='auto'
              value={profile.weight}
              onChange={handleInputChange}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Birthday</FormLabel>
          <Input
            id='birthday'
            type='date'
            width='auto'
            value={profile.birthday}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='breed' next='personality'/>
        <Progress value={25}/>
      </Box>
    </>
  )
}

export default BasicInfo