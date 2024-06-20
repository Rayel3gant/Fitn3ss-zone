import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData ,apiOptions } from '../../utils/fetchData'
import CustomSlider from './CustomSlider'
import { useDispatch, useSelector } from 'react-redux'
import { addBodyPartsData, addSearchedData,setSearchOccurence } from '../../redux/slices/ExerciseSlice'

const SearchExercises = (props) => {
  const bodyPart=props.bodyPart
  const setBodyPart=props.setBodyPart
  const setLoading=props.setLoading
  const { exerciseData , bodyParts }=useSelector((state)=>state.gym)
  const [search,setSearch]=useState('')
  const dispatch=useDispatch()

  const exerciseApiUrl=process.env.REACT_APP_EXERCISES_API
  const bodyPartsApiUrl=process.env.REACT_APP_BODYPARTLIST_API

  const fetchBodyPartsData=async()=>{
    try{
      const response=await fetchData(bodyPartsApiUrl,apiOptions)
      console.log(response)
      dispatch(addBodyPartsData(['all',...response]))

    } catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchBodyPartsData()
  },[])


  

  const searchHandler=async()=>{
    setLoading(true)
    console.log("calling api 1")
    if(search.length){
      dispatch(setSearchOccurence(true))
      const searchedExercises=exerciseData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search)  ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      console.log(searchedExercises)
      dispatch(addSearchedData(searchedExercises)) 
      setTimeout(() => {
        setLoading(false)
      }, 2000); 
    }

    const element=document.getElementById('exercises')
    element?.scrollIntoView({
        behavior:'smooth'
    })

  }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight="700" mb="50px" textAlign="center" sx={{ fontSize:{lg:'44px',xs:'30px'}}}>
        Awesome exercises you <br/> should know
      </Typography>


      <Box position="relative" mb="72px">
        <TextField  height="76px" value={search}  onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search exercises' type='text' 
          sx={ { backgroundColor:'#ffffff',borderRadius:'40px',width:{lg:'800px',xs:'350px'} ,input:{fontWeight:'700',border:'none',borderRadius:'4px'}}}/>

        <Button onClick={searchHandler}  className='search-btn' sx={{ position:'absolute',right:'0' ,height:'56px', backgroundColor:'#ff2625',color:"#fff",textTransform:"none",width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'}}}>
          Search
        </Button>
      </Box>


      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <CustomSlider data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart="true" setLoading={setLoading} />
      </Box>
    </Stack>
  )
}

export default SearchExercises