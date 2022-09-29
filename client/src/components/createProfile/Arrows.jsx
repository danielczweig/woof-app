import React, { useContext } from 'react'
import axios from 'axios'
import { Box, IconButton } from '@chakra-ui/react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

import { DisplayContext } from './App.jsx'

const Arrows = ( { prev, next, curr, profile, setLoggedIn } ) => {

  const setDisplay = useContext(DisplayContext)

  const handleSubmit = (e) => {
    axios.post('http://localhost:3001/profiles', {
      name: profile.name,
      sex: profile.sex,
      birthday: profile.birthday,
      breed: profile.breed,
      address: profile.address,
      weight: Number(profile.weight),
      sexed: profile.sexed === 'yes' ? true : false,
      vaccinated: profile.vaccinated === 'yes' ? true : false,
      personality: profile.personality,
      bio: profile.bio,
      photos: profile.photos
    })
      .then(() => {
        setLoggedIn(true)
        console.log('success')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box display='flex' justifyContent='center' gap='5'>
      <IconButton aria-label='Prev' variant='outline' isRound='true' sz='lg' icon={<GoChevronLeft />} onClick={() => curr === 'name' ? null : setDisplay(prev)}/>
      <IconButton aria-label='Next' variant='outline' isRound='true' sz='lg' icon={<GoChevronRight />} onClick={() => curr === 'finish' ? handleSubmit() : setDisplay(next)}/>
    </Box>
  )
}

export default Arrows