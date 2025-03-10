import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { useStyles } from './Feed.styles'

export const Feed = () => {
  const classes = useStyles()
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia
          component='img'
          height='194'
          image='https://mui.com/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' className={classes.content}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: 'red'
                }
              }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
              shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp
              to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
              Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
              until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and
              rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia
          component='img'
          height='194'
          image='https://mui.com/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' className={classes.content}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: 'red'
                }
              }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
              shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp
              to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
              Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
              until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and
              rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia
          component='img'
          className={classes.media}
          image='https://mui.com/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' className={classes.content}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: 'red'
                }
              }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Collapse timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
              shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp
              to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
              Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
              until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and
              rice is just tender, 5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  )
}
