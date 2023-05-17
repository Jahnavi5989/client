import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, makeStyles, Snackbar, IconButton } from '@material-ui/core';
import axios from 'axios';
import { useContext } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    color: '#ffffff',
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1),
      borderColor: '#ffffff',
    },
    '& label': {
      color: '#ffffff',
    },
    '& input': {
      color: '#ffffff',
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
  button: {
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(1),
    color: '#ffffff',
  },
  
  loadingMessage: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useContext(store);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState('');

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('https://gfghackathon-ordr3zrkza-el.a.run.app/login', data).then((res) => {
      localStorage.setItem('userId', res.data.user._id);
      localStorage.setItem('usertoken', res.data.token);
      setToken(res.data.token);
      setLoading(false);
      navigate('/');
    }).catch((error) => {
      setLoading(false);
      setMessage('Login failed. Please check your credentials.');
      setSnackbarOpen(true);
    });
  };

  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container className={classes.container}>
      {loading ? (
        <Typography variant="h6" className={classes.loadingMessage}>
          You will Reach your fitness goal faster than this...
        </Typography>
      ) : (
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" className={classes.title}>
          Login
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                onChange={changehandler}
                variant="outlined"
                fullWidth
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={changehandler}
                variant="outlined"
                fullWidth
                required
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer} >
              <Button
                type="submit"
                variant="contained"
                color="white"
                fullWidth
                className={classes.button}
              >
                <Typography style={{ color: 'black' }}>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button variant="contained" color="secondary" fullWidth className={classes.button} href="/resetpassword">
                Forgot Password?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      )}
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

export default LoginPage;