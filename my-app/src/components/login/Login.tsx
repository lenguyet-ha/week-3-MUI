import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import PersonIcon from '@mui/icons-material/Person'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../login/Login.styles'

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const isSmallScreen = useMediaQuery('(min-width:375px) and (max-width:902px)')

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/home')
  }
  const classes = useStyles()
  return (
    <Container
      maxWidth='xl'
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   gap: 5,
      //   height: '100vh',
      //   padding: 0,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center'
      // }}
      className={classes.container}
    >
      <Typography variant='h3' fontWeight='700' color='#358ed4' marginBottom='20px'>
        Facebook
      </Typography>
      <Container
        // sx={{
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   alignItems: 'center',

        //   borderRadius: '20px',
        //   padding: 0,
        //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.42)',
        //   width: '100%',
        //   maxWidth: '80%'
        // }}
        className={classes.container_in}
      >
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          sx={{
            // background: 'rgba(255, 255, 255, 0.91)',
            // padding: 3,
            borderRadius: isSmallScreen ? '30px' : '0'
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            // width: '100%',
            // maxWidth: '100%',
            // textAlign: 'center',
            // backdropFilter: 'blur(10px)'
          }}
          className={classes.box_form}
        >
          <Typography variant='h4' fontWeight={600} mb={2}>
            Login
          </Typography>
          <Box
            // sx={{
            //   display: 'flex',
            //   flexDirection: 'column',
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   maxWidth: '90%',
            //   width: '100%',

            //   gap: 2
            // }}
            className={classes.input}
          >
            <TextField
              sx={{ width: '100%', maxWidth: '80%' }}
              required
              label='Username'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              sx={{ width: '100%', maxWidth: '80%' }}
              required
              label='Password'
              type={showPassword ? 'text' : 'password'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleTogglePassword} edge='end'>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box
              display='flex'
              width={'100%'}
              maxWidth={'80%'}
              flexDirection={isSmallScreen ? 'column' : 'row'}
              alignItems={'center'}
              justifyContent={isSmallScreen ? 'center' : 'space-between'}
            >
              <FormControlLabel
                control={<Checkbox name='remember' />}
                label={
                  <Typography sx={{ fontSize: isSmallScreen ? '14px' : '16px', marginRight: '0' }}>
                    Remember me
                  </Typography>
                }
              />
              <Link href='#' alignSelf={'center'}>
                <Typography sx={{ fontSize: isSmallScreen ? '14px' : '16px' }}> Forgot password? </Typography>
              </Link>
            </Box>
          </Box>
          <Button
            type='submit'
            sx={{
              // mt: 2,
              // width: '80%',
              // maxWidth: '70%',
              fontSize: isSmallScreen ? '0.9rem' : '1.2rem'
              // backgroundColor: '#358ed4',
              // color: 'white'
            }}
            className={classes.button}
          >
            Login
          </Button>
          <Typography mt={2} fontSize='14px'>
            Or login with
          </Typography>
          <Box display='flex' justifyContent='center' gap={2} mt={1}>
            <Button variant='contained' className={classes.btn_fb}>
              <FacebookRoundedIcon />
              <Typography sx={{ fontSize: '12px', display: isSmallScreen ? 'none' : 'block' }}>Facebook</Typography>
            </Button>
            <Button variant='contained' className={classes.btn_ig}>
              <img src='/ig.svg' alt='Instagram' style={{ width: 20, height: 20 }} />

              <Typography sx={{ fontSize: '12px', display: isSmallScreen ? 'none' : 'block' }}>Instagram</Typography>
            </Button>
          </Box>
          <Typography mt={2} fontSize='14px'>
            Don't have an account?{' '}
            <Link href='#' sx={{ color: '#358ed4', fontSize: '14px' }}>
              Sign up
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: isSmallScreen ? 'none' : 'block'
            // background: 'rgba(12, 104, 190, 0.53)', // Hiệu ứng mờ nhẹ
            // backgroundSize: 'cover', // Ảnh phủ kín Box nhưng có thể bị cắt
            // backgroundPosition: 'center', // Căn giữa ảnh
            // backgroundRepeat: 'no-repeat', // Không lặp lại ảnh
            // borderRadius: '0 15px 15px 0',
            // padding: 0,
            // width: '100%',
            // maxWidth: 500,
            // height: 'auto',
            // textAlign: 'center',
            // backdropFilter: 'blur(10px)', // Làm mờ nền phía sau
            // marginRight: -3
          }}
          className={classes.box_image}
        >
          <CardMedia component='img' height='100%' image='/Blue1.svg' sx={{ margin: 0 }} />
        </Box>
      </Container>
    </Container>
  )
}
