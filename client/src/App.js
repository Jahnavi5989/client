import React from 'react'
import { createContext,useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Foodlogs from './components/Foodlogs';
import MyFoodlogs from './components/MyFoodlogs';
import Foodlog from './components/Foodlog';
import NutritionAnalysis from './components/NutritionAnalysis';
import Analysis from './components/Analysis';
import Myprofile from './components/Myprofile';
import Calorielog from './components/Calorielog';
import ReceipeSearch from './components/ReceipeSearch';
import Calorielogs from './components/Calorielogs';
import TodoApp from './components/Todo';
import PostBlog from './BlogApp/PostBlog';
import TreandingBlogs from './BlogApp/BlogHome'
import NearbyPlacesMap from './pages/NearbyPlacesMap';
import ClockPage from './pages/ClockPage';
import WorkoutPlannerPage from './workoutplanner/Workoutplanning';
import CalorieAnalysisPage from './workoutplanner/Analyze';
import GymPlaylistApp from './workoutplanner/Gymplaylist';
import ResetPassword from './components/Resetpassword';

export const store = createContext();
const App = () => {
  const [token,setToken]=useState(null);
  const userId=localStorage.getItem("userId")
  return (
    <Box width="400px" sx={{ width:{x1:'1488px'}}} m="auto">
      <store.Provider value={[token,setToken]}>
      
      <Routes>
        
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        { userId &&
              <>
              <Route path="/Foodlogs" element={<Foodlogs/>}/>//Addfoodlog
              <Route path="/Foodlog" element={<Foodlog/>}/>//view foodlogs
              <Route path='/exercises' element={<Home/>}/>
              <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
              <Route path="/calorieslogs" element={<Calorielogs/>}/>
              <Route path="/calorieslog" element={<Calorielog/>}/>
              <Route path="/myprofile" element={<Myprofile/>}/>
              <Route path="/analysis" element={<Analysis/>}/>
              <Route path="/searchrecipe" element={<ReceipeSearch/>}/>
              <Route path="/addblog" element={<PostBlog/>}/>
              <Route path="/nearbyplaces" element={<NearbyPlacesMap/>}/>
              <Route path="/timer" element={<ClockPage/>}/>
              </>
        
      }
      </Routes>
      </store.Provider>
    </Box>
  )
}

export default App


{/* <Route path="/planner" element={<WorkoutPlannerPage/>}/> */}
        {/* <Route path="/voice" element={<CalorieAnalysisPage/>}/> */}
        {/* <Route path="/blogstrending" element={<TreandingBlogs/>}/> */}
        {/* <Route path="/music" element={<GymPlaylistApp/>}/> */}
         {/* <Route path="/MyFoodlogs" element={<MyFoodlogs/>}/> */}
          {/* <Route path="/nutritionanalysis" element={<NutritionAnalysis/>}/> */}
           {/* <Route path="/todo" element={<TodoApp/>}/> */}