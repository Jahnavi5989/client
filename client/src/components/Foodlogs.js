import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Snackbar, IconButton } from '@mui/material';
import backgroundImage from '../assets/foodlogs2.jpg'; // Replace with the path to your background image
import axios from 'axios'
import { Close as CloseIcon } from '@material-ui/icons';
import { useNavigate, useParams } from 'react-router-dom'

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

const MealLoggingForm = () => {
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const navigate=useNavigate()
  const classes = useStyles();
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleAdd = async () => {
    // Logic to handle adding the meal entry
    if (!quantity || !foodName || !calories || !date) {
      setMessage('Please fill all fields.');
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await axios.post('https://gfghackathon-ordr3zrkza-el.a.run.app/foodlogs', {
        qty: quantity,
        Unit: unit,
        food: foodName,
        Calories: calories,
        date: date,
        user: localStorage.getItem('userId'),
      });
      const data = res.data;
      console.log(data);
      setMessage('Meal entry added successfully.');
      setSnackbarOpen(true);
      navigate('/Foodlog')
    } catch (error) {
      console.error(error);
      setMessage('Failed to add meal entry. Please try again.');
      setSnackbarOpen(true);
    }
  };

  const handleGoToFoodLogs = () => {
    // Logic to navigate to the food logs page
    navigate('/Foodlog')
  };
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-end', // Adjust the alignment here
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          maxHeight: 550, // Adjust the height here
          margin: '0 50px', // Adjust the margin here
          textAlign: 'center',
          backgroundColor: '#e5e4e2',
          padding: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '9px',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
          overflowY: 'auto',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, color: 'primary' }}>
          Track Your Meal Intake
        </Typography>
        <TextField
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          //label="Date"
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              backgroundColor: 'primary',
              color: 'white',
              '&:hover': {
                backgroundColor: 'teal',
              },
              width: '100%', // Adjust the button width here
              fontSize: '16px', // Adjust the button font size here
              padding: '10px', // Adjust the button padding here
            }}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            onClick={handleGoToFoodLogs}
            sx={{
              backgroundColor: 'primary',
              color: 'white',
              '&:hover': {
                backgroundColor: 'teal',
              },
            }}
         
            >
            GO TO MY FOOD LOGS
          </Button>
          
        </Box>
      </Box>
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={5000}
  onClose={handleSnackbarClose}
  message={message}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set anchor origin to top center
  sx={{ top: '50%', transform: 'translateY(-50%)' }} // Adjust top position to center vertically
  action={
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>

    </Box>
  );
};

export default MealLoggingForm;
