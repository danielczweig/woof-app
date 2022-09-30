import React, { useState, useEffect } from 'react'
import { Box, Text, Divider, Image, Stack, Circle } from '@chakra-ui/react'
import { BsCheckLg, BsXLg } from "react-icons/bs"

const Chat = () => {

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='25rem'
      maxW='sm'
      p='10'
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
      <Text as='b' color='brand.900' fontSize='4xl'>Friends List</Text>
      <Divider mt='1rem' mb='1rem'/>
      <Stack>
        <Box display='flex' gap='5'>
          <Image boxSize='4rem' objectFit='cover' src={`https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}/>
          <Box>
            <Text as='b' fontSize='xl'>Tony</Text>
            <Text>Woof Woof Woof!</Text>
          </Box>
        </Box>

      </Stack>

    </Box>
  )
}

export default Chat