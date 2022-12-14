import React, { useState } from 'react'
import {
  Box,
  Text,
  Input,
  Progress,
  FormControl,
  Button
} from '@chakra-ui/react'

import Arrows from './Arrows.jsx'

const Photos = ( { profile, updateProfile }) => {
  const [photoOne, setPhotoOne] = useState('https://res.cloudinary.com/dmxak8uva/image/upload/v1664475833/woof/IMG_3116_gfembv.jpg')
  const [photoTwo, setPhotoTwo] = useState('https://res.cloudinary.com/dmxak8uva/image/upload/v1664475834/woof/IMG_3138_jnntsu.jpg')
  const [photoThree, setPhotoThree] = useState('https://res.cloudinary.com/dmxak8uva/image/upload/v1664475835/woof/IMG_3038_oalyjm.jpg')

  const handleSubmit = () => {updateProfile({photos: [...profile.photos, photoOne, photoTwo, photoThree]})}

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='1rem' h='80%'>
        <Text as='b' fontWeight='semibold' fontSize='4xl' color='blue.200'>{`Upload some cute pictures!`}</Text>
        <FormControl>
          <Input
            id='One'
            placeholder='Photo #1'
            value={photoOne}
            onChange={(e) => setPhotoOne(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            id='Two'
            placeholder='Photo #2'
            value={photoTwo}
            onChange={(e) => setPhotoTwo(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            id='Three'
            placeholder='Photo #3'
            value={photoThree}
            onChange={(e) => setPhotoThree(e.target.value)}
          />
        </FormControl>
        {/* <Button colorScheme='teal' onClick={handleSubmit}>Submit</Button> */}
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' gap='.5rem' h='15%'>
        <Arrows prev='location' next='bio'/>
        <Progress value={75}/>
      </Box>
    </>
  )
}

export default Photos