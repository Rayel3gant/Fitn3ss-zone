import { Box, createMuiTheme } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/common/Footer'

function App() {
  
  return (
    <div className="App ">
      <Box width="400px" m="auto" sx={{ width :{xl:'100%'}}}>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exerciseDetails/:id' element={<ExerciseDetail/>} />
        </Routes>


        <Footer/>

      </Box>


      
    </div>
  );
}

export default App;
