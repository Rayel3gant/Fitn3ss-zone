import { combineReducers } from "@reduxjs/toolkit";
import exerciseReducer from "./slices/ExerciseSlice"

const rootReducer=combineReducers({
    gym:exerciseReducer
})

export default rootReducer