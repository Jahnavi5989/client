import React from 'react'
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';


const Navbar = () => {
  return (
    <Stack direction="row"
    justifyContent={"space-around"} SX={{gap:{
        sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'
    },justifyContent:'none'}}>
    <Stack direction="row"
      gap="40px"  
      fontSize={"24px"}
      alignItems="flex-end"
      justifyContent={'none'}
    >
        <Link to='/foodlogs' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>MyFoodlogs</Link>
        <Link to='/calorielogs' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>Mycalorielogs</Link>
        <Link to='/nutritionanalysis' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>NutritionAnalysis</Link>
        <a href="#exercises" style={{textDecoration:'none',color:"#3A1212"}}>Exercises</a>
    </Stack>
    </Stack>
    
  )
}

export default Navbar