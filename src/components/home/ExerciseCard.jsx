import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = (props) => {
    const data=props.data
  return (
    <Link className='exercise-card' to={`/exerciseDetails/${data.id}`}>
        <img src={data.gifUrl} alt='exercise' loading='lazy'/>

        <Stack direction='row'>
            <Button sx={{ml:'21px',color:'#fff',background:"#ffa9a9",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                {data.bodyPart}
            </Button>


            <Button sx={{ml:'21px',color:'#fff',background:"#fcc757",fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
                {data.target}
            </Button>


        </Stack>

        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
            {data.name}
        </Typography>
    </Link>
    
  )
}

export default ExerciseCard