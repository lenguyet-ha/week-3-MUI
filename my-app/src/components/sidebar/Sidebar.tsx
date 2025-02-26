import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
  useMediaQuery
} from '@mui/material'
import { AccountBox, Article, DarkMode, Group, Home, Person, Settings, Storefront } from '@mui/icons-material'

export const Sidebar = ({
  setMode,
  mode
}: {
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>
  mode: string
}) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } }

  // Check screen size
  const isSmallScreen = useMediaQuery('(max-width:1000px)') // Nhỏ hơn 600px (ẩn Sidebar)
  const isMediumScreen = useMediaQuery('(max-width:1300px)') // Nhỏ hơn 1300px (chỉ hiển thị icon)

  // Nếu nhỏ hơn 600px → Ẩn Sidebar
  if (isSmallScreen) return null

  return (
    <Box
      position='sticky'
      top={50}
      sx={{
        width: isMediumScreen ? '70px' : '250px', // Khi nhỏ hơn 1300px, Sidebar nhỏ lại
        transition: 'width 0.3s ease-in-out',
        overflowX: 'hidden',
        height: '100vh'
      }}
    >
      <Box flex={1} p={2} sx={{ width: '100%' }}>
        <List component='nav'>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Home' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#pages'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary='Pages' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#group'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary='Group' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary='Marketplace' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#friends'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary='Friends' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#setting'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary='Settings' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary='Profile' sx={{ display: isMediumScreen ? 'none' : 'block' }} />
          </ListItemButton>

          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch
              {...label}
              defaultChecked
              onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
              }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}
