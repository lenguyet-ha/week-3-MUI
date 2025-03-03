import { Theme } from '@mui/material/styles/createTheme'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    height: '100vh',
    padding: '0px !important',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  container_in: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '20px',
    padding: 0,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.42)',
    width: '100%',
    maxWidth: '80%'
  },
  box_form: {
    background: 'rgba(255, 255, 255, 0.91)',
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    textAlign: 'center',
    backdropFilter: 'blur(10px)'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '90%',
    width: '100%',
    gap: theme.spacing(2)
  },
  button: {
    marginTop: `${theme.spacing(2)} !important`,
    width: '80%',
    maxWidth: '70%',
    backgroundColor: '#358ed4 !important',
    color: 'white !important'
  },
  btn_fb: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
  },
  btn_ig: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    backgroundColor: '#eb358d !important'
  },
  box_image: {
    background: 'rgba(12, 104, 190, 0.53) !important', // Hiệu ứng mờ nhẹ
    backgroundSize: 'cover', // Ảnh phủ kín Box nhưng có thể bị cắt
    backgroundPosition: 'center', // Căn giữa ảnh
    backgroundRepeat: 'no-repeat', // Không lặp lại ảnh
    borderRadius: '0 15px 15px 0',
    padding: 0,
    width: '100%',
    maxWidth: 500,
    height: 'auto',
    textAlign: 'center',
    backdropFilter: 'blur(10px)', // Làm mờ nền phía sau
    marginRight: theme.spacing(-3)
  }
}))
