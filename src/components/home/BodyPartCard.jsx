import React from 'react'
import Icon from "../../assets/icons/gym.png"
import { Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchedData, setSearchOccurence } from '../../redux/slices/ExerciseSlice'

const BodyPartCard = (props) => {
  const item=props.item
  const bodyPart=props.bodyPart
  const setBodyPart=props.setBodyPart
  const setLoading=props.setLoading
  const dispatch=useDispatch()
  const { exerciseData} =useSelector((state)=>state.gym)


  const clickHandler=()=>{
    setLoading(true)
    dispatch(setSearchOccurence(true))
    if(item!=='all'){
      setBodyPart(item);
  

      const filteredData= exerciseData.filter((data)=>data.bodyPart===item)
      dispatch(addSearchedData(filteredData))

      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    } else {
      dispatch(addSearchedData(exerciseData))
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }


  return (
    <Stack onClick={clickHandler} 
            type="button" alignItems="center" justifyContent="center" className='bodyPart-card' 
        sx={{
            backgroundColor:'#fff',borderBottomLeftRadius:'2opx',width:'270px',height:'280px',cursor:'pointer',gap:'47px',
            borderTop: (bodyPart===item)? '4px solid #ff2625':'',            
        }}>
        <img src={Icon} alt='dumbbell' className='w-[40px] h-[40px]'/>
        <Typography fontSize='24px' fontWeight="bold" color="#3a1212" textTransform="capitalize" >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPartCard