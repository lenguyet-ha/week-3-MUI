import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(3),
    height: '100vh',
    padding: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      gap: theme.spacing(4),
      padding: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(5),
      padding: 0
    }
  },
  facebook: {
    color: '#358ed4',
    marginBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '15px'
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '20px'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    padding: 0,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    margin: '0 auto',
    width: '95%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      maxWidth: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      maxWidth: '70%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      maxWidth: '900px'
    },

    // Background theo kích thước màn hình
    background: 'white',
    [theme.breakpoints.up('md')]: {
      background: 'linear-gradient(to right, #358ed4 50%, white 50%)'
    },
    [theme.breakpoints.up('lg')]: {
      background: 'linear-gradient(to right, #358ed4 50%, white 50%)'
    }
  },
  box_information: {
    display: 'flex', // Hiển thị mặc định, tránh ẩn trên xs
    width: '50%',
    padding: theme.spacing(2), // Đảm bảo padding không bị mất
    borderRadius: '0',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    backgroundColor: '#358ed4',
    color: 'white', // Đảm bảo nội dung dễ đọc

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2.5),
      borderRadius: '0'
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      borderRadius: '15px 0 0 15px',
      gap: theme.spacing(2)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2.5)
    }
  },
  login_button: {
    width: '50%', // Mặc định trên xs
    height: '30px',
    fontSize: '8px',
    backgroundColor: '#fff !important',
    color: 'black !important',
    fontWeight: 600,
    padding: 0,

    [theme.breakpoints.up('sm')]: {
      width: '40%', 
      height: '35px',
      fontSize: '10px'
    },
    [theme.breakpoints.up('md')]: {
      height: '40px',
      fontSize: '12px'
    }
  },
  form: {
    background: 'rgba(255, 255, 255, 0.91)',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px', // Mặc định trên xs
    alignItems: 'center',
    width: '95%', // Mặc định trên xs
    textAlign: 'center',
    backdropFilter: 'blur(8px)',
    maxWidth: '100%',

    [theme.breakpoints.up('sm')]: {
      padding: '15px',
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      padding: '20px',
      width: '50%',
      borderRadius: '0px'
    }
  }
}))
