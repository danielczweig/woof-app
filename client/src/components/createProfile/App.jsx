import React, { useState, useEffect } from 'react'
import { Box, Progress } from '@chakra-ui/react'

import BasicInfo from './BasicInfo.jsx'
import Bio from './Bio.jsx'
import Breed from './Breed.jsx'
import Finish from './Finish.jsx'
import Location from './Location.jsx'
import Medical from './Medical.jsx'
import Name from './Name.jsx'
import Personality from './Personality.jsx'
import Photos from './Photos.jsx'

export const DisplayContext = React.createContext()


const CreateProfile = ( { setLoggedIn } ) => {
  const [display, setDisplay] = useState('name')
  const [profile, setProfile] = useState({
    name: '',
    breed: '',
    sex: '',
    weight: '',
    birthday: '',
    personality: '',
    sexed: '',
    vaccinated: '',
    location: '',
    photos: [],
    bio: ''
  })

  const updateProfile = (data) => {
    setProfile(prev => {
      return { ...prev, ...data}
    })
  }

  const displayOptions = {
    name: <Name profile={profile} updateProfile={updateProfile}/>,
    breed: <Breed profile={profile} updateProfile={updateProfile}/>,
    basicInfo: <BasicInfo profile={profile} updateProfile={updateProfile}/>,
    personality: <Personality profile={profile} updateProfile={updateProfile}/>,
    medical: <Medical profile={profile} updateProfile={updateProfile}/>,
    location: <Location profile={profile} updateProfile={updateProfile}/>,
    photos: <Photos profile={profile} updateProfile={updateProfile}/>,
    bio: <Bio profile={profile} updateProfile={updateProfile}/>,
    finish: <Finish profile={profile} updateProfile={updateProfile} setLoggedIn={setLoggedIn}/>
  }

  return (
    <>
      <DisplayContext.Provider value={setDisplay}>
        <Box w='25rem' h='100vh' backgroundColor='brand.900' display='flex' justifyContent='center' alignItems='center'>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            w='22rem'
            h='70vh'
            p='6'
            borderWidth='1px'
            borderRadius='lg'
            color='gray.900'
            backgroundColor='brand.100'
          >
            {displayOptions[display]}
          </Box>
        </Box>
      </DisplayContext.Provider>
    </>
  )
}

export default CreateProfile;
