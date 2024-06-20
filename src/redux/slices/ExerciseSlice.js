import { createSlice } from "@reduxjs/toolkit"


const initialState={
    exerciseData:[],
    bodyParts:[],
    searchedData:[],
    searchOccurence:false,
    loading:false
}

const exerciseSlice = createSlice({
    name:'exercise',
    initialState:initialState,
    reducers:{
        addExercisesData:(state,action)=>{
            state.exerciseData=action.payload
        },
        addBodyPartsData:(state,action)=>{
            state.bodyParts=action.payload
        },
        addSearchedData:(state,action)=>{
            state.searchedData=action.payload
        },
        setSearchOccurence:(state,action)=>{
            state.searchOccurence=action.payload
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
    }
})


export const { addExercisesData ,  addBodyPartsData,addSearchedData ,setSearchOccurence ,setLoading }=exerciseSlice.actions

export default exerciseSlice.reducer