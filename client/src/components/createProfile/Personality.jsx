import React from 'react'
import {
  Box,
  Text,
  Progress
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'
import PersonalityButton from './PersonalityButton.jsx'
import personalityTraits from '../../utils/personalityTraits.js'

const Personality = ( { profile, updateProfile }) => {

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        gap='1rem'
        h='80%'
        overflow='scroll'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Text as='b' fontWeight='semibold' fontSize='3xl' color='blue.200'>{`How would you describe ${profile.name}?`}</Text>
        <Text fontSize='lg' color='blue.200'>{`Choose One`}</Text>
        <Box display='flex' flexWrap='wrap' gap='.5em'>
          {Object.keys(personalityTraits).map((trait, i) =>
            <PersonalityButton key={i} trait={trait} i={i} profile={profile} updateProfile={updateProfile}/>
          )}
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='basicInfo' next='medical'/>
        <Progress value={37.5}/>
      </Box>
    </>
  )
}

export default Personality