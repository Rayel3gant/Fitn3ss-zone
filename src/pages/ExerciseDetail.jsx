import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Details from '../components/exerciseDetails/Details'
import ExerciseVideos from '../components/exerciseDetails/ExerciseVideos'
import Suggestions from '../components/exerciseDetails/Suggestions'
import { useParams } from 'react-router-dom'
import { apiOptions, apiOptions2, fetchData } from '../utils/fetchData'
import Loader from '../components/common/Loader'

const ExerciseDetail = () => {
  const [exerciseData,setExerciseData]=useState({})
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetExercises,setTargetExercises]=useState([])
  const [equipmentExercises,setEqipmentExercises]=useState([])
  const [loading,setLoading]=useState(false)
  const { id } =useParams()
  console.log(id)

  const equipmentUrl=process.env.REACT_APP_EQUIPMENT_API
  const targetUrl=process.env.REACT_APP_TARGET_API
  const exerciseByIdUrl=process.env.REACT_APP_EXERCISEBYID_API
  const youtubeSearchUrl=process.env.REACT_APP_YOUTUBE_SEARCH_API 



  const fetchDetails=async()=>{
    setLoading(true)
    try{
      const response1=await fetchData(exerciseByIdUrl + id,apiOptions) 
      console.log(response1)
      setExerciseData(response1)

      if(response1){
        const response2=await fetchData(targetUrl + response1.target,apiOptions)
        setTargetExercises(response2)

        const response3=await fetchData(equipmentUrl + response1.equipment,apiOptions)
        setEqipmentExercises(response3)

        const response4=await fetchData(youtubeSearchUrl+ response1.name + " exercise" ,apiOptions2)
        setExerciseVideos(response4.contents)
        
      }
    } catch(error){
      console.log(error)
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchDetails()
  },[id])

  return (
    <Box>
    {
      (loading===true)?(
          <div className='h-[calc(100vh-8rem)] flex w-full justify-center items-center'> 
            <Loader/>
          </div>
        
      ):(
        <>
          <Details exerciseData={exerciseData}/>
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseData.name}/>
          <Suggestions targetExercises={targetExercises} equipmentExercises={equipmentExercises} target={exerciseData.target} equipment={exerciseData.equipment}/>
        </>
      )
    }
      
    </Box>
  )
}

export default ExerciseDetail