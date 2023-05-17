// import React,{useEffect, useState} from 'react'
// import { Pagination, Typography, Box, Stack } from '@mui/material'
// import ExerciseCard from './ExerciseCard'
// import { exerciseOptions,fetchData } from '../utils/fetchdata';
// const Exercises = ({exercises,setExercises,bodyPart}) => {
//   const[currentPage,setCurrentPage]=useState(1)
//   const exercisePerpage=9;
//   const indexOfLastExercise=currentPage*exercisePerpage
//   const indexOfFirstExercise = indexOfLastExercise-exercisePerpage;
//   const  currentExercises = exercises.slice(0,3)
//   (indexOfFirstExercise,indexOfLastExercise)
//   const paginate = (e,val)=>{
//     setCurrentPage(val);
//     window.scrollTo({top:1800,behavior:'smooth'})
//   }

//   useEffect(()=>{
//     const fetchExerciseData = async () =>{
//       let exercisesData=[];
//       if(bodyPart==='all'){
//         exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
//       }else{
//         exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
//       }
//       setExercises(exercisesData)
//     }
//     fetchExerciseData()
//   },[bodyPart])
//   return (
//     <Box id="exercises"
//     sx={{mt:{lg:'110px'}}}
//     mt="50px"
//     p="20px"
//     >
//       <Typography>
//         Showing Results
//       </Typography>
//       <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
//           {currentExercises.map((exercise,index)=>(
//             <ExerciseCard key={index} exercise={exercise}/>
//           ))}
//       </Stack>
//       <Stack mt="100px" alignItems="center">
//             {
//               exercises.length>9 && (
//                 <Pagination
//                   color="standard"
//                   shape="rounded"
//                   defaultPage={1}
//                   count={Math.ceil(exercises.length/9)}
//                   page={currentPage}
//                   onChange={paginate}
//                   size="large"

//                 />
//               )
//             }
//       </Stack>
//     </Box>
//   )
// }

// export default Exercises


import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchdata';
import ExerciseCard from './ExerciseCard';
import Loader from '../pages/Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
