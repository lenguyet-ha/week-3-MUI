import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { Feed } from '../feed/Feed'
import { Rightbar } from '../rightbar/Rightbar'
import { Box, Stack } from '@mui/material'
import { Navbar } from '../navbar/Navbar'

export const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}
