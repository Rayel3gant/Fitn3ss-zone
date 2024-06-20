import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomSlider from '../home/CustomSlider'

const Suggestions = (props) => {
  const targetExercises=props.targetExercises
  const equipmentExercises=props.equipmentExercises
  const target=props.target
  const equipment=props.equipment

  console.log(targetExercises ,equipmentExercises,target,equipment)


  return (
    <Box sx={{mt:{lg:'100px',xs:'0'},paddingLeft:{xs:'12px',lg:'0px'}}} >


      <Typography variant='h3'  mb={5} mt={12}>
        Wanna hit a superset for <span className='text-[#ff2625] uppercase'>{target}</span>?  Try these
      </Typography>

      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {
          targetExercises.length && (
            <CustomSlider data={targetExercises} isBodyPart="false" />
          )
        }
      </Stack>


      <Typography variant='h3' mt={20} mb={5}>
        Exercises that also uses <span className='text-[#ff2625] uppercase'>{equipment}</span>
      </Typography>


      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {
          equipmentExercises.length && (
            <CustomSlider data={equipmentExercises} isBodyPart="false" />
          )
        }
      </Stack>
    </Box>
  )
}

export default Suggestions