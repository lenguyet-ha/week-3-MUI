import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { Profiler } from 'react'
import { AccountBox, Article, DarkMode, Group, Home, Person, Settings, Storefront } from '@mui/icons-material'

export const Sidebar = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <List component='nav'>
        <ListItemButton component='a' href='#home'>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
        <ListItemButton component='a' href='#pages'>
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary='Pages' />
        </ListItemButton>
        <ListItemButton component='a' href='#group'>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary='Group' />
        </ListItemButton>
        <ListItemButton component='a' href='#marketplace'>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary='Marketplace' />
        </ListItemButton>
        <ListItemButton component='a' href='#friends'>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary='Friends' />
        </ListItemButton>
        <ListItemButton component='a' href='#setting'>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItemButton>
        <ListItemButton component='a' href='#profile'>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItemButton>
        <ListItemButton component='a' href='#profile'>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <Switch {...label} defaultChecked />
        </ListItemButton>
      </List>
    </Box>
  )
}
