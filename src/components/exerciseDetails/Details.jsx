import React from 'react'
import bodyPartImage from "../../assets/icons/body-part.png"
import targetImage from "../../assets/icons/target.png"
import equipmentImage from "../../assets/icons/equipment.png"
import { Button, Stack, Typography } from '@mui/material'

const Details = (props) => {
    const exerciseData=props.exerciseData;
    console.log(exerciseData)
    const extraDetails=[
        {
            icon:bodyPartImage,
            title:exerciseData.bodyPart
        },
        {
            icon:targetImage,
            title:exerciseData.target
        },
        {
            icon:equipmentImage,
            title:exerciseData.equipment
        }
    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
        <img src={exerciseData.gifUrl} alt={exerciseData.name} loading='lazy' className='detail-image' />

        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h3' >{exerciseData.name}</Typography>
            <Typography variant='h6'>
                Exercises keep you strong. {exerciseData.name} is one of the best exercises to target you {exerciseData.target}.It will help you elevate your mood and gain energy.
            </Typography>
            {
                extraDetails?.map((item,index)=>{
                    return (
                        <Stack key={index} direction='row' gap='24px' alignItems='center'>
                            <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                                <img src={item.icon} alt='' className='w-[50px] h-[50px]' />
                            </Button>

                            <Typography variant='h5' textTransform='capitalize'>
                                {item.title}
                            </Typography>
                        </Stack>
                    )
                        
                })
            }
        </Stack>
    </Stack>
  )
}

export default Details