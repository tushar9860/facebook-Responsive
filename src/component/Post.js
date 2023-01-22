import React from 'react'

import { Box } from '@mui/system'
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


import { Card,Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox } from '@mui/material';
import { useState } from 'react';



const Post = (props) => {
  const [numbers, setNumbers]=useState(0);
  const increment=()=>{
    setNumbers(numbers+1);
  }
  const decrement=()=>{
    setNumbers(numbers-1);
  }
  return (
   <Box>
    
    <Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title= {props.name}
        subheader="November 24, 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} onClick={increment} />
        <p>{numbers}</p>
        <ThumbDownIcon sx={{margin:3}} onClick={decrement}/>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

         
        </IconButton>
        <IconButton aria-label="share">
          
        </IconButton>
       
      </CardActions>
      
       
    </Card>
   </Box>
   
  )
}

export default Post