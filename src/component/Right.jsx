import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const Right = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends </Typography>

        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/7322232/pexels-photo-7322232.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
           Latest Photoes 
         </Typography>

        <ImageList cols={3} rowHeight={100} gap={5 }>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="Brakefast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt="Burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            alt="Camera"
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt="Coffee"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
            alt="Hats"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
            alt="Honey"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
            alt="Basketball"
            />
          </ImageListItem>
          <ImageListItem>
            <img
             src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
            alt="Fern"
            />
          </ImageListItem> */}

        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
           Latest Conversations  
         </Typography>

         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>




  )
}
