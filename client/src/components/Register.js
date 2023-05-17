import React, { useState } from 'react';
import Login from './Login';
import { TextField, Button, Grid, Typography, makeStyles, Snackbar, IconButton } from '@material-ui/core';
import axios from 'axios';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: '#f44336',
  },
  container: {
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1),
      color: 'white', // Set input font color to white
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Set input outline color to white
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Set input label color to white
      fontWeight: 'bold', // Set input label font weight to bold
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(1),
    color: 'black', // Set button font color to white
  },
}));

const Register = () => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.name.trim() === '' || data.email.trim() === '' || data.password.trim() === '') {
      setMessage('Please fill all fields');
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(data.email)) {
      setMessage('Invalid email format.');
      setSnackbarOpen(true);
      return;
    }

    if (!validatePassword(data.password)) {
      setMessage('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit and no special characters.');
      setSnackbarOpen(true);
      return;
    }
    
    axios.post('https://gfghackathon-ordr3zrkza-el.a.run.app/register', data)
    .then((res) => {
      setMessage('Successful');
      setSnackbarOpen(true);
    })
    .catch((error) => {
      console.log(error);
      setMessage('Already registered');
      setSnackbarOpen(true);
    })

  };

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title} align="center"   style={{ color: 'white' }}>
          Registration
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                type="text"
                onChange={changeHandler}
                variant="outlined"
                fullWidth
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={changeHandler}
                variant="outlined"
                fullWidth
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                onChange={changeHandler}
                variant="outlined"
                fullWidth
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="white"
                fullWidth
                className={classes.button}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="white"
                fullWidth
                className={classes.button}
                href="/login"
              >
                Already Registered?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={message}
        ContentProps={{
          classes: {
            root: classes.snackbar,
          },
        }}
        action={
          <IconButton size="small" aria-label="close" onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Grid>
  );
};

export default Register;
