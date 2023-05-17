// import React from 'react';
// import { TextField, Button, Typography, Box, Grid } from '@mui/material';
// import backgroundImage from '../assets/callogs.jpg';
// import axios from 'axios';

// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom'


// const CalorieForm = () => {

//   const navigate = useNavigate();


// const sendRequest = async()=>{
//   const res=await axios.post("https://gfghackathon-ordr3zrkza-el.a.run.app/Calorielogs",
//   {
//                 activity:inputs.activity,
//                 duration:inputs.duration,
//                 weight:inputs.weight,
//                 date:inputs.date,
//                 burnedcal:inputs.calories,
//                 user:localStorage.getItem("userId")
//   }).then(()=>navigate("/calorieslog")).catch((err)=>console.log(err));
//   const data = await res.data;
//   console.log(data)
//   return data;
// };
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   //console.log(inputs);
//   sendRequest().then(data=>console.log(data))
// } 
// const onClickhandler=(e)=>{
//   navigate("/calorieslog");
// }

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5f0f4485c43a8465bbedc0b2/1633521433503-HVO8MZNNV21X4STWN2EJ/Person+Setting+Up+Weights+for+a+Strength+Training+Workout)`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Box sx={{ maxWidth: 400,  maxHeight: 500, bgcolor: 'rgba(255, 255, 255, 0.8)', padding: '20px',overflowY: 'auto' }}  >
//         <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
//           Track the Calorie That You have burned
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Activity"
//                 name="activity"
//                 variant="outlined"
               
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Duration"


              
//                 name="duration"
//                 variant="outlined"
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Your Weight"
//                 name="weight"
//                 variant="outlined"
//                 fullWidth

              
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Date"
//                 variant="outlined"
//                 type="date"
//                 name="date"
//                 fullWidth
               
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Calories Burned"
//                 name="calories"
//                 variant="outlined"
//                 fullWidth
                
//               />
//             </Grid>
//           </Grid>

//           <Box sx={{ marginTop: 2 }}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               ADD
//             </Button>
//           </Box>
//         </Box>

//         <Box sx={{ marginTop: 2 }}>
//           <Button variant="outlined" color="primary" fullWidth onClick={onClickhandler}>  
//             GO TO MY CALORIE LOGS
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CalorieForm;

























import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import backgroundImage from '../assets/callogs.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  button: {
    position: 'fixed',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999,
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: theme.spacing(1),
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  homeIcon: {
    color: '#000000',
  },
}));

const CalorieForm = () => {
  const navigate = useNavigate();
const classes = useStyles();
  const [inputs, setInputs] = useState({
    activity: '',
    duration: '',
    weight: '',
    date: '',
    calories: '',
  });

  const sendRequest = async () => {
    try {
      const res = await axios.post('https://gfghackathon-ordr3zrkza-el.a.run.app/Calorielogs', {
        activity: inputs.activity,
        duration: inputs.duration,
        weight: inputs.weight,
        date: inputs.date,
        burnedcal: inputs.calories,
        user: localStorage.getItem('userId'),
      }).then(navigate('/calorieslog'));
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then((data) => console.log(data));
  };

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickHandler = (e) => {
    navigate('/calorieslog');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5f0f4485c43a8465bbedc0b2/1633521433503-HVO8MZNNV21X4STWN2EJ/Person+Setting+Up+Weights+for+a+Strength+Training+Workout)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ maxWidth: 400, maxHeight: 500, bgcolor: 'rgba(255, 255, 255, 0.8)', padding: '20px', overflowY: 'auto' }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Track the Calories That You Have Burned
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Activity"
                name="activity"
                variant="outlined"
                fullWidth
                value={inputs.activity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Duration"
                name="duration"
                variant="outlined"
                fullWidth
                value={inputs.duration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Weight"
                name="weight"
                variant="outlined"
                fullWidth
                value={inputs.weight}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                variant="outlined"
                type="date"
                name="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={inputs.date}
                onChange={handleChange}
             
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Calories Burned"
                    name="calories"
                    variant="outlined"
                    fullWidth
                    value={inputs.calories}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
    
              <Box sx={{ marginTop: 2 }}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  ADD
                </Button>
              </Box>
            </Box>
    
            <Box sx={{ marginTop: 2 }}>
              <Button variant="outlined" color="primary" fullWidth onClick={onClickHandler}>
                GO TO MY CALORIE LOGS
              </Button>
            </Box>
          </Box>
        </Box>
      );
    };
    
    export default CalorieForm;
    