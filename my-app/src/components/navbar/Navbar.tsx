import { Mail, Notifications, Pets } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import { AppBar, Avatar, Badge, Box, InputBase, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: { display: 'flex' }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
        </Icons>
        <UserBox>
          <Avatar
            onClick={handleToggle}
            sx={{ width: 30, height: 30 }}
            alt='Remy Sharp'
            src='https://mui.com/static/images/avatar/1.jpg'
          />
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
            John Doe
          </Typography>{' '}
        </UserBox>
      </StyledToolbar>
      <Menu
        onClose={() => setOpen(false)}
        open={open}
        id='composition-menu'
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { mt: 5, left: '-200px' } }}
        aria-labelledby='composition-button'
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
