import React, { useContext } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import { DisplayContext } from './App.jsx'

const Arrows = ( { prev, next, curr } ) => {

  const setDisplay = useContext(DisplayContext)

  return (
    <Box display='flex' justifyContent='center' gap='5'>
      <IconButton aria-label='Prev' variant='outline' isRound='true' sz='lg' icon={<GoChevronLeft />} onClick={() => curr === 'name' ? null : setDisplay(prev)}/>
      <IconButton aria-label='Next' variant='outline' isRound='true' sz='lg' icon={<GoChevronRight />} onClick={() => curr === 'finish' ? null : setDisplay(next)}/>
    </Box>
  )
}

export default Arrows