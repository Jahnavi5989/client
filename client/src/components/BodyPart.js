import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from '../assets/down.jpg'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
           borderTop :bodyPart === item ? '4px solid #7EC8E3' : '',
           backgroundColor:'#fff',
           borderBottomLeftRadius:'20px',
           width:'270px',
           height:'280px',
           cursor:'pointer',
           gap:'47px'
    }} 
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
    
>
        <img src="https://i.pinimg.com/736x/a6/e6/7c/a6e67c08f1f447bcb2505ed8466478ab.jpg" alt="dumbbell" style={{width:'40px',height:'40px'}}/>

        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart