import React from 'react'
import { Box, Text, Badge } from '@chakra-ui/react'

import ImageCarousel from './ImageCarousel.jsx'

const ProfileCard = () => {
  const property = {
    imageUrl: ['https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80','https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80','https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'],
    imageAlt: 'Image of puppy',
    name: 'Buddy',
    sex: 'm',
    age: { // replace with birthday
      years: 5,
      months: 0
    },
    breed: 'Poodle-Shitzu mix',
    distance: '3',
    bio: 'I am just a tiny puppers looking for a friend. I love long walks on the beach and a run through the park.',
    size: 'small',
    weight: '10lbs',
    spayedNeutered: 'yes',
    shotsUpToDate: 'yes',
    personality: ['energetic', 'playful', 'timid']
  }

  const badgeThemes = {
    energetic: 'green',
    playful: 'purple',
    timid: 'yellow'
  }

  return (
    <Box
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
              {`(${property.age.years})`}
            </Box>
            <Box display='flex'  ml='2'>
              {property.sex === 'm' &&
                <Badge colorScheme='teal' as='i' fontSize='lg'>Male</Badge>
              }
              {property.sex === 'f' &&
                <Badge colorScheme='pink' as='i' fontSize='lg'>Female</Badge>
              }
            </Box>
          </Box>
          <Text fontWeight='semibold'>{property.breed}</Text>
          <Text fontWeight='semibold' mb='5'>{`${property.distance} miles away`}</Text>
          <Text mb='5'>{property.bio}</Text>
          <Text as='b' color='blue.200' fontSize='xl'>Traits</Text>
          <Text>{`Size: ${property.size}`}</Text>
          <Text>{`Weight: ${property.weight}`}</Text>
          <Text>{`Spayed/Neutered: ${property.spayedNeutered}`}</Text>
          <Text mb='5'>{`Vaccinated: ${property.shotsUpToDate}`}</Text>
          <Text as='b' color='blue.200' fontSize='xl'>Personality</Text>
          <Box display='flex' gap='2'>
            {property.personality.map((trait, i) =>
              <Badge key={i} colorScheme={badgeThemes[trait]} fontSize='m'>{trait}</Badge>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileCard