import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, {  useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard';
import { apiOptions, fetchData } from '../../utils/fetchData';
import { useSelector } from 'react-redux';
import Loader from "../common/Loader"

const Exercises = (props) => {

  

  const { exerciseData , searchedData , searchOccurence } =useSelector((state)=>state.gym)
  console.log(searchedData)
  // const exerciseData=props.exerciseData;
  const bodyPart=props.bodyPart

  const loading=props.loading
  const setLoading=props.setLoading
  // const setExerciseData=props.setExerciseData
  const [currentPage,setCurrentPage]=useState(1)
  const exercisePerPage=9
  // console.log(exerciseData)
  let tempData=[]
  if(searchOccurence){
    tempData=searchedData
  } else {
    let categoryExerciseData=[]

    if(bodyPart==='all'){
      categoryExerciseData=exerciseData
    } else {
      categoryExerciseData= exerciseData.filter ((item)=>item.bodyPart===bodyPart)
    }
    tempData=categoryExerciseData
  }

  

  const indexOfLastExercise= currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise -exercisePerPage;
  const currentExercises=tempData.slice(indexOfFirstExercise,indexOfLastExercise)

  

  const paginate=(e,value)=>{
    setLoading(true)
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }


  const fetchCategoryExerciseData=async()=>{
   

  }
  useEffect(()=>{
    fetchCategoryExerciseData()
  },[bodyPart])

  return (
    <Box  id='exercises' sx={{mt:{lg:'110px'}}} p='20px' mt='50px'>
    {
      (loading===true)? (
          <div className='h-[calc(100vh-8rem)] flex w-full justify-center items-center'> 
            <Loader/>
          </div>
      ): (
            <>
                  <Typography variant='h3' mb='46px' >
                    Showing results
                  </Typography>

                  <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{lg:'110px',xs:'50px'}}} >
                    {
                      currentExercises.map((item,index)=>{
                        return <ExerciseCard data={item} key={index}/>
                      })
                    }
                  </Stack>

                    {
                      (exerciseData.length > 9) && (
                        <Stack mt='100px' alignItems='center'>
                        {
                            <Pagination
                              color='standard' shape='rounded' defaultPage={1} page={currentPage} 
                              onChange={paginate} size='large' count={Math.ceil(tempData.length/exercisePerPage)}/>            
                        }
                      </Stack>
                      )
                    }

            </>
          )
      }
      
    </Box>
  )
}

export default Exercises

