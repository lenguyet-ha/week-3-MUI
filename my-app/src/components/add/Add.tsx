import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { EmojiEmotions, PersonAdd, VideoCameraBack, Image } from '@mui/icons-material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Tooltip title='Add post' sx={{ position: 'fixed', bottom: 20, left: 0 }} onClick={() => setOpen(true)}>
        <IconButton>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: 500,
            borderRadius: 3,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
          }}
          bgcolor='background.default'
          color='text.primary'
          height='auto'
        >
          <Typography id='parent-modal-title' component='h3' fontWeight={600} sx={{ alignSelf: 'center' }}>
            Create a post
          </Typography>

          <Box display={'flex'} justifyContent={'flex-start'} width={'100%'} gap={2} alignItems={'center'} mb={2}>
            <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>John Doe</Typography>{' '}
          </Box>
          <TextField
            id='standard-multiline-static'
            fullWidth
            multiline
            rows={4}
            placeholder='What do you want to say?'
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>

          <ButtonGroup sx={{ alignSelf: 'center' }} variant='contained' aria-label='Button group with a nested menu'>
            <Button sx={{ width: '100px' }}>Post</Button>
            <Button
              size='small'
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label='select merge strategy'
              aria-haspopup='menu'
            >
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  )
}
