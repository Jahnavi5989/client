import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchdata';
import Detail from './Detail';
import ExerciseVideos from './ExerciseVideos';
import SimilarExercises from './SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData.bodyPart)


      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      //console.log(exerciseVideosData)
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      console.log(targetMuscleExercisesData )
      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      console.log(equimentExercisesData)
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      {Object.keys(exerciseDetail).length > 0 ? (
        <Detail
          bodyPart={exerciseDetail.bodyPart}
          gifUrl={exerciseDetail.gifUrl}
          name={exerciseDetail.name}
          target={exerciseDetail.target}
          equipment={exerciseDetail.equipment}
        />
      ) : (
        <div>Loading...</div>
      )}
     <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> 
    </Box>
  );
};

export default ExerciseDetail;