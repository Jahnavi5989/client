import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, Button, Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    boxShadow: theme.shadows[2],
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

function ResetPassword() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the input
    if (!email || !password || !confirmPassword) {
      setMessage('Please fill in all fields');
      setSnackbarOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setSnackbarOpen(true);
      return;
    }

    try {
      // Send a request to the reset password API endpoint
      const response = await axios.post('https://g-2000032072-cse-ordr3zrkza-uc.a.run.app/reset-password', { email, password });

      // Display success message
      setMessage(response.data.message);
      setSnackbarOpen(true);

      // Clear form inputs
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Display error message
      setMessage(error.response.data.error);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              className={classes.textField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="New Password"
              variant="outlined"
              className={classes.textField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              type="password"
              label="Confirm Password"
              variant="outlined"
              className={classes.textField}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={message}
        action={
          <IconButton size="small" aria-labe="close" onClick={handleSnackbarClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  </div>
);
}

export default ResetPassword;
