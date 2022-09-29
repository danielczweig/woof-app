import React, { useState, useEffect } from 'react'
import {
  Badge,
  Button
} from '@chakra-ui/react'

import personalityTraits from '../../utils/personalityTraits.js'

const PersonalityButton = ( { trait, i, profile, updateProfile } ) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if(clicked) {
      updateProfile({personality: trait})
    } else {
      updateProfile({personality: ''})
    }
  }, [clicked])

  let clickedStyle
  clicked? clickedStyle={bg: 'brand.900', transform: 'scale(0.98)', borderColor: 'brand.900'} : clickedStyle={bg: null, transform: null, borderColor: null}
  let hoverStyle
  profile.personality.length === 0? hoverStyle={bg: 'brand.900', transform: 'scale(0.98)', borderColor: 'brand.900'} : hoverStyle={bg: null, transform: null, borderColor: null}

  return (
    <Button
      value={trait}
      width='auto'
      p='.3rem'
      _hover={{
        bg: hoverStyle.bg,
        transform: hoverStyle.transform,
        borderColor: hoverStyle.borderColor,
      }}
      _active={{
        bg: hoverStyle.bg,
        transform: hoverStyle.transform,
        borderColor: hoverStyle.borderColor,
      }}
      bg={clickedStyle.bg}
      transform={clickedStyle.transform}
      borderColor={clickedStyle.borderColor}
      onClick={() => profile.personality.length === 0 ? setClicked(true) : setClicked(false)}
    >
      <Badge colorScheme={personalityTraits[trait]} p='.5rem'>{trait}</Badge>
    </Button>
  )
}

export default PersonalityButton