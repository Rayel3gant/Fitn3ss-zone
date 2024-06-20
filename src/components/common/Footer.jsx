import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from "../../assets/images/muscle (1).png"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={logo} alt='' className='w-[200px] h-[120px]'/>
        <Typography variant='h5' mt='20px' pb='40px'>
          Made with love by Rayel3gant
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer