import { Button, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import sideimage from '../assets/image.jpg'
import Register from './Register'
import Dashboard from './Dashboard'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',x5:'70px'},
        ml:{sm:'50px'}
    }} position='relative' p="20px">
        <Typography fontWeight="600" fontsize="26px">
        Fitness for Every Body
        </Typography>
        <Typography fontWeight={500} color="#00008B" sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        The Path to a Better You,<br/> Starts Here  
        </Typography>
        <Typography fontSize="22px" lineHeight={"35px"}>
            Explore Fitness 
        </Typography>
        <Button variant='contained' mb={3} sx={{backgroundColor:'#7EC8E3',padding:'150'}} href="/DashBoard" >My DashBoard</Button>
        <Typography fontWeight={600}
        color="#7EC8E3"
        sx={{
            opacity: 0.1,
            display:{lg:'block',xs:"none"}
        }}
        fontSize='200px'>FitMinds</Typography>
        <img src={sideimage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner