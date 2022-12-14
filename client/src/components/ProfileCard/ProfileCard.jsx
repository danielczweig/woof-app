import React, { useState, useEffect } from 'react'
import { Box, Text, Badge, IconButton } from '@chakra-ui/react'
import { BsCheckLg, BsXLg } from "react-icons/bs"

import calculateAge from '../../utils/calculateAge.js'
import calculateDistance from '../../utils/calculateDistance.js'
import calculateSize from '../../utils/calculateSize.js'
import ImageCarousel from './ImageCarousel.jsx'
import personalityTraits from '../../utils/personalityTraits.js'

const ProfileCard = ( { display, profiles }) => {

  const [profilesToRender, setProfilesToRender] = useState([])
  const [property, setProperty] = useState({
    imageUrl: [""],
    imageAlt: 'Image of puppy',
    name: '',
    sex: '',
    birthday: '01/01/1999',
    breed: '',
    location: '90403',
    bio: '',
    weight: 0,
    sexed: false,
    vaccinated: false,
    personality: ''
  })


  const badgeThemes = {
    energetic: 'green',
    playful: 'purple',
    timid: 'yellow'
  }

  useEffect(() => {
    if(profiles[0]) {
      setProfilesToRender(profiles)
      setProperty({
        imageUrl: profiles[0].photos,
        imageAlt: 'Image of puppy',
        name: profiles[0].name,
        sex: profiles[0].sex,
        birthday: profiles[0].birthday,
        breed: profiles[0].breed,
        location: profiles[0].address,
        bio: profiles[0].bio,
        weight: profiles[0].weight,
        sexed: profiles[0].sexed,
        vaccinated: profiles[0].vaccinated,
        personality: profiles[0].personality
      });
    };
  },[profiles, profilesToRender, display]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      maxW='sm'
      h='90vh'
      borderWidth='1px'
      borderRadius='lg'
      overflow='auto'
      color='gray.900'
      backgroundColor='brand.100'
      fontSize='md'
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <ImageCarousel
        imageUrl={property.imageUrl}
      />
      {display === 'home' &&
        <Box display='flex' mt='.5rem' gap='5' alignSelf='center'>
          <IconButton aria-label='Dislike' fontSize='2rem' variant='solid' borderWidth='2px' isRound='true' h='3.25rem' w='3.25rem' colorScheme='red' icon={<BsXLg color='white'/>} onClick={() => setProfilesToRender(profilesToRender.shift())}/>
          <IconButton aria-label='Like' fontSize='2rem' variant='solid' borderWidth='2px' isRound='true' h='3.25rem' w='3.25rem' colorScheme='green' icon={<BsCheckLg color='white'/>} onClick={() => setProfilesToRender(profilesToRender.shift())}/>
        </Box>
      }
      <Box p='6'>
        <Box display='flex' alignItems='baseline' flexDirection='column'>
          <Box display='flex' alignItems='baseline' gap='4px'>
            <Box
              color='brand.900'
              fontWeight='extrabold'
              fontSize='4xl'
            >
              {property.name}
            </Box>
            <Box
              fontWeight='bold'
              fontSize='3xl'
            >
              {`(${calculateAge(new Date(property.birthday))})`}
            </Box>
            <Box display='flex'  alignSelf='center' ml='2'>
              {property.sex === 'male' &&
                <Badge colorScheme='teal' as='i' fontSize='lg'>Male</Badge>
              }
              {property.sex === 'female' &&
                <Badge colorScheme='pink' as='i' fontSize='lg'>Female</Badge>
              }
            </Box>
          </Box>
          <Box mb='5'>
            <Text fontWeight='semibold'>{property.breed}</Text>
            {display === 'home' &&
              <Text fontWeight='semibold' >{`${Math.floor(calculateDistance('90403', property.location))} miles away`}</Text>
            }
          </Box>
          <Text mb='5'>{property.bio}</Text>
          <Text as='b' color='blue.200' fontSize='xl'>Traits</Text>
          <Text>{`Size: ${calculateSize(property.weight)}`}</Text>
          <Text>{`Weight: ${property.weight}`}</Text>
          <Text>{`Spayed/Neutered: ${property.sexed}`}</Text>
          <Text mb='5'>{`Vaccinated: ${property.vaccinated}`}</Text>
          <Text as='b' color='blue.200' fontSize='xl'>Personality</Text>
          <Badge fontSize='m' colorScheme={personalityTraits[property.personality]}>{property.personality}</Badge>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileCard