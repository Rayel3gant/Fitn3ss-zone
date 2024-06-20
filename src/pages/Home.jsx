import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeroBanner from '../components/home/HeroBanner'
import SearchExercises from '../components/home/SearchExercises'
import Exercises from '../components/home/Exercises'
import { apiOptions, fetchData } from '../utils/fetchData'
import { useDispatch, useSelector } from 'react-redux'
import { addExercisesData } from '../redux/slices/ExerciseSlice'

const Home = () => {
  const { exerciseData } =useSelector((state)=>state.gym)
  const [bodyPart,setBodyPart]=useState('all')
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(false)

  const fetchExerciseData=async()=>{
    console.log("fetching data")
    setLoading(true)
    try{
      const response=await fetchData(process.env.REACT_APP_EXERCISES_API,apiOptions)
      console.log(response)
      dispatch(addExercisesData(response))

    } catch(error){
      console.log("error in fetching exercise data from api")
      console.error(error)
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(exerciseData?.length===0){
      fetchExerciseData()
    } else {
      console.log("data already exists in slice")
    }

  },[])


  return (
    <Box >
      <HeroBanner/>
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setLoading={setLoading}  />
      <Exercises bodyPart={bodyPart} loading={loading} setLoading={setLoading}/>

    </Box>
  )
}

export default Home