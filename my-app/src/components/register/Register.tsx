import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStyles } from './Register.styles'

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@, $, !, %, *, ?, &)')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
})

interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
export const Register = () => {
  const classes = useStyles()
  const isSmallScreen = useMediaQuery('(min-width:375px) and (max-width:393px)')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  return (
    <Container
      maxWidth='xl'
      sx={
        {
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          //  gap: { xs: 3, sm: 4, md: 5 }, // Giảm khoảng cách giữa các phần tử trên màn hình nhỏ
          //  height: '100vh',
          //padding: { xs: 1, sm: 2, md: 0 }, // Thu nhỏ padding trên màn hình nhỏ
          // backgroundSize: 'cover',
          // backgroundPosition: 'center'
        }
      }
      className={classes.root}
    >
      <Typography
        variant='h4'
        fontWeight='700'
        className={classes.facebook} // Giảm margin trên màn hình nhỏ
      >
        Facebook
      </Typography>
      <Container
        disableGutters
        maxWidth={false}
        // sx={{
        //   display: 'flex',
        //   flexDirection: 'row',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   borderRadius: '15px',
        //   padding: { xs: 0, sm: 0, md: 0 }, // Giảm padding
        //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        //   width: { xs: '95%', sm: '90%', md: '70%', lg: '100%' }, // Điều chỉnh width cho màn hình nhỏ
        //   maxWidth: { xs: '100%', sm: '80%', md: '70%', lg: '900px' },
        //   margin: '0 auto',
        //   background: {
        //     xs: 'white',
        //     md: 'linear-gradient(to right, #358ed4 50%, white 50%)',
        //     lg: 'linear-gradient(to right, #358ed4 50%, white 50%)'
        //   }
        // }}
        className={classes.container}
      >
        <Box
          component={'form'}
          // sx={{
          //   display: { xs: 'none', sm: 'flex', md: 'flex' },
          //   width: '50%',
          //   padding: { xs: '15px', sm: '20px', md: '25px', lg: '20px' }, // Giảm padding trên màn hình nhỏ
          //   borderRadius: { xs: '0', sm: '0', md: '15px 0 0 15px' }, // Điều chỉnh border radius
          //   flexDirection: 'column',
          //   justifyContent: 'flex-start',
          //   alignItems: 'flex-start',
          //   gap: { xs: 1, sm: 2, md: 3 }, // Thu nhỏ khoảng cách giữa các phần tử
          //   bgcolor: '#358ed4'
          // }}
          className={classes.box_information}
        >
          <Typography alignSelf={'flex-start'} variant='h6' fontWeight='700' color='#fff'>
            INFORMATION
          </Typography>
          <Typography color='#fff' fontSize={{ xs: '10px', sm: '11px', md: '12px' }} maxWidth={'80%'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <Typography color='#fff' fontSize={{ xs: '10px', sm: '11px', md: '12px' }} maxWidth={'80%'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <Button
            onClick={() => navigate('/login')}
            variant='contained'
            // sx={{
            //   width: { xs: '50%', sm: '40%' }, // Giảm kích thước button trên màn hình nhỏ
            //   height: { xs: '30px', sm: '35px', md: '40px' },
            //   fontSize: { xs: '8px', sm: '10px', md: '12px' },
            //   backgroundColor: '#fff',
            //   color: 'black',
            //   fontWeight: 600,
            //   padding: 0
            // }}
            className={classes.login_button}
          >
            <Typography fontSize={'12px'}>HAVE AN ACCOUNT</Typography>
          </Button>
        </Box>
        <Box
          component={'form'}
          onSubmit={handleSubmit((data: RegisterForm) => console.log(data))}
          // sx={{
          //   background: 'rgba(255, 255, 255, 0.91)',
          //   borderRadius: { xs: '0', sm: '0', md: '0px' },
          //   display: 'flex',
          //   flexDirection: 'column',
          //   padding: { xs: '10px', sm: '15px', md: '20px' },
          //   alignItems: 'center',
          //   width: { xs: '95%', sm: '90%', md: '50%' },
          //   textAlign: 'center',
          //   backdropFilter: 'blur(8px)',
          //   maxWidth: '100%'
          // }}
           className={classes.form}
        >
          <Typography
            variant='h6'
            fontWeight={600}
            mb={2}
            sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }} // Giảm font size
          >
            REGISTER FORM
          </Typography>
          <Box display={'flex'} flexDirection={'column'} gap={{ xs: '10px', sm: '15px', md: '20px' }}>
            <Box display={'flex'} gap={1} width={'100%'}>
              <Box sx={{ minHeight: '80px' }}>
                <TextField
                  {...register('firstName')}
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName?.message}
                  label='First Name'
                  variant='outlined'
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: { xs: '10px', sm: '12px', md: '14px' } }
                  }}
                />
              </Box>
              <Box sx={{ minHeight: '80px' }}>
                <TextField
                  {...register('lastName')}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName?.message}
                  label='Last Name'
                  variant='outlined'
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: { xs: '10px', sm: '12px', md: '14px' } }
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ minHeight: '80px' }}>
              <TextField
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                label='Your Email'
                variant='outlined'
                fullWidth
                sx={{
                  '& .MuiInputLabel-root': { fontSize: { xs: '10px', sm: '12px', md: '14px' } }
                }}
              />
            </Box>

            <Box display={'flex'} gap={1}>
              <Box sx={{ minHeight: '100px' }}>
                <TextField
                  {...register('password')}
                  error={errors.password ? true : false}
                  helperText={errors.password?.message}
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword((prev) => !prev)} edge='end'>
                          {showPassword ? (
                            <VisibilityIcon sx={{ fontSize: { xs: '12px', md: '20px' } }} />
                          ) : (
                            <VisibilityOffIcon sx={{ fontSize: { xs: '12px', md: '20px' } }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: { xs: '10px', sm: '12px', md: '14px' } }
                  }}
                />
              </Box>
              <Box sx={{ minHeight: '95px' }}>
                <TextField
                  {...register('confirmPassword')}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  label='Confirm Password'
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword((prev) => !prev)} edge='end'>
                          {showPassword ? (
                            <VisibilityIcon sx={{ fontSize: { xs: '12px', md: '20px' } }} />
                          ) : (
                            <VisibilityOffIcon sx={{ fontSize: { xs: '12px', md: '20px' } }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiInputLabel-root': { fontSize: { xs: '10px', sm: '12px', md: '14px' } }
                  }}
                />
              </Box>
            </Box>

            <Typography variant='caption' color='textSecondary'>
              By clicking the "Register" button, you agree to our{' '}
              <Link href='#' color='primary'>
                Terms & Conditions
              </Link>
            </Typography>
            {isSmallScreen ? (
              <Typography variant='caption' color='textSecondary'>
                Have an account?{' '}
                <Link href='/login' color='primary'>
                  Login
                </Link>
              </Typography>
            ) : (
              ''
            )}
          </Box>
          <Button
            type='submit'
            disabled={!isValid}
            variant='contained'
            // sx={{
            //   width: { xs: '50%', sm: '40%' },
            //   height: { xs: '30px', sm: '35px', md: '40px' },
            //   fontSize: { xs: '10px', sm: '12px', md: '14px' },
            //   marginTop: '15px'
            // }}

            className={classes.btn_register}
           >
            Register
          </Button>
        </Box>
      </Container>
    </Container>
  )
}
