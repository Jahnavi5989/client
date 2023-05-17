import React from 'react';
import { Card, CardHeader, Avatar, IconButton, makeStyles } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  card: {
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '300px',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
    backgroundColor: '#ff4081',
  },
}));

const Profile = ({user}) => {
  const classes = useStyles();
  const usr=user.name;
  const email=user.email
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}  src="https://example.com/avatar.jpg" />
          }
          title={<span style={{ color: '#ff4081', fontWeight: 'bold' }}>{usr}</span>}
          subheader={<span style={{ color: '#333333' }}><Typography>{email}</Typography></span>}
        />
      </Card>
    </div>
  );
};

export default Profile;
