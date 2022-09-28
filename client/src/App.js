import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'

import NavBar from './components/NavBar.jsx'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'

function App() {
  const [display, setDisplay] = useState('home')

  const displayOptions = {
    profile: null,
    home: <ProfileCard />,
    chat: null
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
