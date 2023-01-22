import { AppBar,styled,Toolbar,Typography,Box,InputBase,Badge, Avatar,Menu, MenuItem } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import { useState } from 'react';


const StyledToolbar=styled(Toolbar)({
  display: "Flex",
  justifyContent:'space-between'
});

const Search = styled("div") (({theme}) => ({ 
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width:'40%'
}));
const Icons = styled(Box) (({theme}) => ({ 
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
 
}));

const UseBox = styled(Box) (({theme}) => ({ 
  display:"flex",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
 
}));
export const Navbar = () => {
  const [open,setOpne]= useState(false)
  return (
   <AppBar position="sticky">
    <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
        Facebook
      </Typography><FacebookIcon sx={{display:{xs:'block',sm:'none'}}}/>
      <Search><InputBase placeholder='Search' /></Search>
      <Icons><Badge badgeContent={4} color="error">
  <MailIcon  />

  
</Badge>
<Badge badgeContent={4} color="error">
  <NotificationsIcon  />

  
</Badge>
<Avatar sx={{width:'30px',height:'30px'}}   
src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
onClick={e=>setOpne(true)}
/>
 
</Icons>

<UseBox onClick={e=>setOpne(true)} >
<Avatar sx={{width:'30px',height:'30px'}}  
 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
<Typography>David</Typography>
</UseBox>

    </StyledToolbar>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpne(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
     
      
     
   </AppBar>
  )
}

