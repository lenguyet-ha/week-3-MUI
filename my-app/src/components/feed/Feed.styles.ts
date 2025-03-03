import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles/createTheme'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(10),
    padding: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    flex: 4,
    justifyContent: 'center'
  },
  card: {
    maxWidth: 500
  },
  avatar: {
    backgroundColor: 'red'
  },
  media: {
    height: 194
  },
  content: {
    color: theme.palette.text.secondary
  }
}))
