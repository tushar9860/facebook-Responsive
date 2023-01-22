
import {Box,createTheme,Stack, Switch, ThemeProvider} from '@mui/material'

import {Feed} from './component/Feed';
import {Sidebar} from './component/Sidebar';

import {Right} from './component/Right';
import {Navbar} from './component/Navbar';
import Add from './component/Add';
import { useState } from 'react';

 

function App() {

  const[darkMode ,setMode]=useState(false)

  const  darkTheme = createTheme({
    palette:{
    mode:darkMode?"light":"dark"
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <Navbar/>
     <Stack direction="row" spacing={2}
       justifyContent="space-evenly">
     <Sidebar />
     <Switch checked={darkMode} onChange={()=> setMode(!darkMode)}/>
       <Feed/>
       <Right/>
     </Stack>
    <Add/>
     </Box>  
     </ThemeProvider>
   
  );
}

export default App;
