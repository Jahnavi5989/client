import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import Login from './Login';
import Analysis from './Analysis';
import { Stack } from '@mui/material';
import CalorieAnalysisPage from '../workoutplanner/Analyze';

const NutritionAnalysis = () => {
  const [search, setSearch] = useState('');
  const [calories, setCalories] = useState('');
   const [showCalorieAnalysisPage, setShowCalorieAnalysisPage] = useState(true);


  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=ad225010&app_key=7a7547d65ee66dc9fb44fb4a0d334f9e&nutrition-type=logging&ingr=${search}`
    )
      .then((response) => response.json())
      .then((data) => setCalories(data));
  };

  const onClickHandler=(e)=>{
       
    setShowCalorieAnalysisPage(true);
  }

  console.log(calories);

  return (

    

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              background: 'transparent',
            }}
          >
            {!showCalorieAnalysisPage && <form
              onSubmit={submitHandler}
              style={{
              
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                maxWidth: '400px',
                padding: '20px',
                borderRadius: '8px',
                background: 'transparent',
              }}
            >
              {!calories && (
                <>
                  <Typography
                    fontWeight={500}
                    variant="h4"
                    sx={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}
                  >
                    Nutrition Analysis
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    mt={5}
                  >
                  <TextField
        required
        sx={{
          marginBottom: '10px',
          '& .MuiInputBase-input': {
            textAlign: 'center',
            fontWeight: '700',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            width: '100%',
            color: '#fff', // Set the text color to white
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff', // Set the outline color to white
            },
          },
        }}
        id="outlined-required"
        label="EX: 1 cup rice"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Food"
        InputLabelProps={{
          style: {
            color: '#fff', // Set the label color to white
          },
        }}
        InputProps={{
          style: {
            color: '#fff', // Set the placeholder color to white
          },
        }}
      />

                    <Box textAlign="center">
                    <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: 'White',
          width: '250px',
          maxWidth: '100%',
          color: 'black',
          padding: '10px 16px', // Add padding to the button
        }}
      >
        Analyze
      </Button>


      <Button
      onClick={onClickHandler}
        variant="contained"
        sx={{
          backgroundColor: 'White',
          width: '250px',
          maxWidth: '100%',
          color: 'black', // Set the text color to white
          padding: '10px 16px',
        
        }}
      >
      Try telling us what you ate
      </Button>

                    </Box>
                  </Box>

              
          </>
        )}

        

      </form>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  {calories ? <Analysis data={calories} search={search} /> : null}
  {showCalorieAnalysisPage ? <CalorieAnalysisPage /> : null}
</div>
    </Box>
  );
};

export default NutritionAnalysis;
