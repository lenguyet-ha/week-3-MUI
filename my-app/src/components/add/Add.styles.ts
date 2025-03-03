import { Theme } from '@mui/material/styles/createTheme'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    position: 'fixed',
    bottom: 20,
    left: 0
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal_box: {
    width: 500,
    borderRadius: theme.shape.borderRadius * 4,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    backgroundColor: theme.palette.background.default, // Sử dụng theme đúng cách
    color: theme.palette.text.primary,
    height: 'auto'
  },
  parent_modal_title: {
    fontWeight: 700, // Không ăn là sao????
    alignSelf: 'center'
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '16px',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  avatar: {
    width: '30px',
    height: '30px'
  },
  name: {
    display: 'none', // Mặc định ẩn
    [theme.breakpoints.up('sm')]: {
      display: 'block' // Hiện khi màn hình >= sm (600px)
    }
  },
  iconStack: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1), // Tương đương gap={1}
    marginTop: theme.spacing(2), // Tương đương mt={2}
    marginBottom: theme.spacing(3) // Tương đương mb={3}
  },
  button_group: {
    alignSelf: 'center'
  },
  button_post: {
    width: '100px'
  }
}))
