import React from 'react'
import { Box } from '@mui/system'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArticleIcon from '@mui/icons-material/Article';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';



export const Sidebar = (theme) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:'none',sm:'block' }} }>
      <Box position='fixed'>
      
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <HomeIcon/>

      </ListItemIcon>

      <ListItemText primary="Homepage" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <ArticleIcon/>

      </ListItemIcon>

      <ListItemText primary="Page" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <PeopleIcon/>

      </ListItemIcon>

      <ListItemText primary="Groups" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <StorefrontIcon/>

      </ListItemIcon>

      <ListItemText primary="Marketplace" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <PersonIcon/>

      </ListItemIcon>

      <ListItemText primary="Friends" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <SettingsIcon/>

      </ListItemIcon>

      <ListItemText primary="Setting" />

      </ListItemButton>

      </ListItem>
      </List>
      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <AccountBoxIcon/>

      </ListItemIcon>

      <ListItemText primary="Profile" />

      </ListItemButton>

      </ListItem>
      </List>

      <List>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">

      <ListItemIcon>

      <ModeNightIcon/>

      </ListItemIcon>

     
        
      
      </ListItemButton>

      </ListItem>
      </List>
      </Box>
    </Box>

   
  )
}