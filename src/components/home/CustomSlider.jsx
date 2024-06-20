import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPartCard from './BodyPartCard'

import ExerciseCard from "./ExerciseCard"
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react'


const CustomSlider = (props) => {
    const data=props.data
    const bodyPart=props.bodyPart
    const setBodyPart=props.setBodyPart
    const isBodyPart=props.isBodyPart
    const setLoading=props.setLoading

    console.log(data)
    console.log(isBodyPart)

  return (
    <Box width='100%' sx={{overflowX:'hidden'}}>
      <Swiper

       slidesPerView={1} 
       spaceBetween={24} 
        loop={true} 
        freeMode={true} 
        autoplay={{delay:2500 , disableOnInteraction:false}}
        breakpoints={{
          640:{
              slidesPerView:2,
          },
          768: {
              slidesPerView: 3,
              // spaceBetween: 40,
          },
          1024: {
                slidesPerView: 4,
              // spaceBetween: 50,
            },
        }}
      modules={[Autoplay, FreeMode,Pagination,Navigation]}>
      {
          data.map((item,index)=>(
              <SwiperSlide key={index}>
                <Box  itemid={index} title={index} m="0 40px">
                    {
                      (isBodyPart==="true") ? (
                        <BodyPartCard bodyPart={bodyPart} setBodyPart={setBodyPart} item={item} setLoading={setLoading} />
                      ) : (
                        <ExerciseCard data={item} />
                      )
                    }
                </Box>
              </SwiperSlide>
          ))
      }
      </Swiper>

     

    </Box>
    
  )
}

export default CustomSlider