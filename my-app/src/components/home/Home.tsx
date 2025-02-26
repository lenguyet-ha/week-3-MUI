import React, { useState } from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { Feed } from '../feed/Feed'
import { Rightbar } from '../rightbar/Rightbar'
import { Box, createTheme, Stack, ThemeProvider, PaletteMode } from '@mui/material'
import { Navbar } from '../navbar/Navbar'
import { Add } from '../add/Add'

export const Home = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent={'space-between'}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />

          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}
