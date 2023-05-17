import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const MyFoodlogs = ({ qty, unit, food, Calories, date, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const deleteRequest = async () => {
    try {
      await axios.delete(`https://gfghackathon-ordr3zrkza-el.a.run.app/deletefoodlog/${id}`);
      alert('Deleted Successfully');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = () => {
    deleteRequest()
      .then(() => navigate('/'))
      .then(() => navigate('/Foodlog'));
  };

  return (
    <Card className={classes.card}>
      <IconButton className={classes.removeButton} onClick={handleRemove}>
        <DeleteIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h6" className={classes.foodText}>
          {qty} {unit} {food}
        </Typography>
        <Typography variant="body2" className={classes.calorieText}>
          Calories: {Calories}
        </Typography>
        <Typography variant="body2" className={classes.calorieText}>
          Date: {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyFoodlogs;
