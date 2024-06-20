import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" px="20px" sx={ { gap:{sm:'122px',xs:'40px'} ,mt:{sm:"32px",xs:'20px'} ,justifyContent:'none'} }>
      <Link to='/'>
        <img src={Logo} alt='logo' className='w-[48px] h-[48px] my-0 mx-5'/>
      </Link>


      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/' className='text-[#3A1212] border-b-[3px] border-[#FF2625]'>Home</Link>
        <a href='#exercises' className='text-[#3A1212] no-underline'>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar