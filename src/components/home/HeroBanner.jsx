import { Box, Button, Typography } from '@mui/material'
import React, { useRef } from 'react'
import heroBannerImage from "../../assets/images/banner.png"



const HeroBanner = () => {



    const clickHandler=()=>{
        const element=document.getElementById('exercises')
        element?.scrollIntoView({
            behavior:'smooth'
        })
    }
   
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'}, ml:{sm:'50px'}}} position="relative" p="20px">
        <Typography fontWeight="600" className='text-[#FF2625] text-[26px]'>Fitness Club</Typography>

        <Typography fontWeight="700" sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
            Sweat , Smile <br/> and Repeat
        </Typography>


        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>

        <Button variant='contained'onClick={clickHandler} sx={{backgroundColor:'#ff2625',padding:"10px"}}>
            Explore Exercises
        </Button>

        <Typography fontWeight="600" fontSize="200px" mt={5} color="#FF2625" sx={{opacity:0.1,ml:'80px', display:{lg:'block',xs:'none'}}}>
            Fitness
        </Typography>

        <img src={heroBannerImage} alt='banner' className='hero-banner-img'/>

       

    </Box>
  )
}

export default HeroBanner