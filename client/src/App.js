import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from '@chakra-ui/react'

import CreateProfile from './components/createProfile/App.jsx'
import NavBar from './components/NavBar.jsx'
import ProfileCard from './components/profileCard/ProfileCard.jsx'

function App() {
  const [display, setDisplay] = useState('home')
  const [loggedIn, setLoggedIn] = useState(true)
  const [profileId, setProfileId] = useState('6335e2e6301ce38bc7015333')
  const [profile, setProfile] = useState([])
  const [profiles, setProfiles] = useState([])

  const displayOptions = {
    profile: <ProfileCard display={display} profiles={profile}/>,
    home: <ProfileCard display={display} profiles={profiles}/>,
    chat: null
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/profile/${profileId}`)
      .then((response) => setProfile([response.data]))
      .catch((err) => console.log(err))
    axios.get('http://localhost:3001/profiles')
      .then((response) => setProfiles(response.data))
      .catch((err) => console.log(err))
  }, [])

  if(loggedIn === false) {
    return (
      <>
        <div style={{backgroundColor:'rgba(0,0,0,.7)', left:'0', right:'0', top:'0', bottom:'0', display:'flex', justifyContent:'center'}}>
          <CreateProfile setLoggedIn={setLoggedIn}/>
        </div>
      </>
    )
  }

  return (
    <>
      <div style={{backgroundColor:'rgba(0,0,0,.7)', left:'0', right:'0', top:'0', bottom:'0', display:'flex', justifyContent:'center'}}>
        <Box h='100vh' backgroundColor='brand.900'>
          {displayOptions[display]}
          <NavBar
            setDisplay={setDisplay}
          />
        </Box>
      </div>
    </>
  )
}

export default App;
