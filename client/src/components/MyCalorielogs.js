// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });


// const MyFoodlogs = ({activity,duration,weight,burnedcal,date,isUser,id}) => {

//   function refreshPage() {
//     window.location.reload(false);
//   }
    
//   const navigate = useNavigate();
//   const deleteRequest= async ()=>{
//     const res = await axios.delete(`https://gfghackathon-ordr3zrkza-el.a.run.app/deletecalorielog/${id}`).catch(err=>console.log(err));
//     const data = await res.data;
//     return data
//   }
//   const handleDelete = ()=>{
//     deleteRequest().then(()=>navigate("/")).then(()=>navigate("/calorieslog"));
//   }
  
//   return (
    
//     <Paper
//     sx={{
//       p: 2,
//       margin: 'auto',
//       maxWidth: 500,
//       mb: 10,
//       ml: 10,
//       flexGrow: 1,
//       backgroundColor: (theme) =>
//         theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     }}
//   >
   
//     <Grid container spacing={2}>
//       <Grid item>
//         <ButtonBase sx={{ width: 128, height: 128 }}>
//           <Img alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7-PiOk-lsFvH34bYmrKj2xCdBRQB1V5SnZ6j8Ij7KA&usqp=CAU&ec=48665701" />
//         </ButtonBase>
//       </Grid>
//       <Grid item xs={12} sm container>
//         <Grid item xs container direction="column" spacing={2}>
//           <Grid item xs>
//             <Typography gutterBottom variant="subtitle1" component="div">
//               {activity} {weight}
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//              {duration}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//              {burnedcal}Calories<br/>
//              {date}
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'200px',xs:"100px"},}} onClick={handleDelete}>Remove</Button><br/>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   </Paper>



    
//   )
// }

// export default MyFoodlogs;




// // import React from 'react';
// // import { styled } from '@mui/material/styles';
// // import Paper from '@mui/material/Paper';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const StyledPaper = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(2),
// //   margin: 'auto',
// //   maxWidth: 500,
// //   marginBottom: theme.spacing(10),
// //   marginLeft: theme.spacing(10),
// //   flexGrow: 1,
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// // }));

// // const MyFoodlogs = ({ activity, duration, weight, burnedcal, date, isUser, id }) => {
// //   const navigate = useNavigate();

// //   const deleteRequest = async () => {
// //     try {
// //       const res = await axios.delete(`https://gfghackathon-ordr3zrkza-el.a.run.app/deletecalorielog/${id}`);
// //       const data = res.data;
// //       return data;
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const handleDelete = () => {
// //     deleteRequest()
// //       .then(() => navigate('/'))
// //       .then(() => navigate('/calorieslog'));
// //   };

// //   return (
// //     <StyledPaper>
// //       <div style={{ display: 'flex', alignItems: 'center' }}>
// //         <div style={{ flex: 1 }}>
// //           <img
// //             alt="complex"
// //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7-PiOk-lsFvH34bYmrKj2xCdBRQB1V5SnZ6j8Ij7KA&usqp=CAU&ec=48665701"
// //             style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: 'auto' }}
// //           />
// //         </div>
// //         <div style={{ flex: 1, marginLeft: 16 }}>
// //           <Typography variant="subtitle1" component="div">
// //             {activity} {weight}
// //           </Typography>
// //           <Typography variant="body2">{duration}</Typography>
// //           <Typography variant="body2" color="text.secondary">
// //             {burnedcal} Calories
// //             <br />
// //             {date}
// //           </Typography>
// //         </div>
// //         <Button variant="contained" sx={{ marginLeft: 'auto', backgroundColor: '#7EC8E3' }} onClick={handleDelete}>
// //           Remove
// //         </Button>
// //       </div>
// //     </StyledPaper>
// //   );
// // };

// // export default MyFoodlogs;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton,Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Change background color to transparent
    borderRadius: theme.shape.borderRadius * 2, // Increase border radius for a more curved shape
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[4], // Increase shadow depth
    padding: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '180px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '350px',
    },

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
  },
  foodText: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    fontFamily: 'Arial, sans-serif', // Change font family
    color: theme.palette.primary.main, // Change text color to primary color
  },
  calorieText: {
    color: theme.palette.text.secondary,
  },
  removeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: 'black', // Change icon color to black
  },
}));

const MyCalorielogs = ({activity,duration,weight,burnedcal,date,isUser,id}) => {

  const classes = useStyles();
  const navigate = useNavigate();

  const deleteRequest = async () => {
    try {
      await axios.delete(`https://gfghackathon-ordr3zrkza-el.a.run.app/deletecalorielog/${id}`);
      alert('Deleted Successfully');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = () => {
    deleteRequest()
      .then(() => navigate('/'))
      .then(() => navigate('/Calorielog'));
  };
  return (
    <>
    <Card className={classes.card}>
    <IconButton className={classes.removeButton} onClick={handleRemove}>
      <DeleteIcon />
    </IconButton>
    <CardContent>
      <Typography variant="h6" className={classes.foodText}>
      {activity} for {duration} burned
      </Typography>
      <Typography variant="body2" className={classes.calorieText}>
        Calories: {burnedcal}
      </Typography>
      <Typography variant="body2" className={classes.calorieText}>
        Date: {date}
      </Typography>
      <Typography variant="body2" className={classes.calorieText}>
       current Weight: {weight}
      </Typography>
    </CardContent>
  </Card>

</>

    
  )
}

export default MyCalorielogs