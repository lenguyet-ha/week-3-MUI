import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { EmojiEmotions, PersonAdd, VideoCameraBack, Image } from '@mui/icons-material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useStyles } from './Add.styles'

export const Add = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Box className={classes.tooltip}>
        <Tooltip title='Add post' onClick={() => setOpen(true)}>
          <IconButton>
            <Fab color='primary' aria-label='add'>
              <AddIcon />
            </Fab>
          </IconButton>
        </Tooltip>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        className={classes.modal}
      >
        <Box className={classes.modal_box}>
          <Typography id='parent-modal-title' component='h3' className={classes.parent_modal_title}>
            Create a post
          </Typography>

          <Box className={classes.user}>
            <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' className={classes.avatar} />
            <Typography className={classes.name}>John Doe</Typography>{' '}
          </Box>
          <TextField
            id='standard-multiline-static'
            fullWidth
            multiline
            rows={4}
            placeholder='What do you want to say?'
            variant='standard'
          />
          <Box className={classes.iconStack}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Box>

          <ButtonGroup
            className={classes.button_group}
            variant='contained'
            aria-label='Button group with a nested menu'
          >
            <Button className={classes.button_post}>Post</Button>
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
