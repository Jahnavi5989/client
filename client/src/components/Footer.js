import React from 'react';
import { makeStyles, Typography, Link, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  contactDetails: {
    marginBottom: theme.spacing(2),
  },
  services: {
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  socialIcons: {
    marginTop: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  madeWithLove: {
    marginTop: theme.spacing(2),
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.contactDetails}>
        <Typography variant="h6" component="h2" gutterBottom>
          Contact us:
        </Typography>
        <Typography variant="body1" component="p">
          Phone: <Link href="tel:+123456789" className={classes.link}>+123456789</Link>
        </Typography>
        <Typography variant="body1" component="p">
          Email: <Link href="mailto:info@fitgenie.com" className={classes.link}>info@fitgenie.com</Link>
        </Typography>
      </div>
      <div className={classes.services}>
        <Typography variant="h6" component="h2" gutterBottom>
          Our Services:
        </Typography>
        <Typography variant="body1" component="p">
          <ul>
            <li>Nutrition Analysis</li>
            <li>Food Logs</li>
            <li>Calories Logs</li>
            <li>Recipe Search</li>
            <li>Exercises</li>
          </ul>
        </Typography>
      </div>
      <div className={classes.socialIcons}>
        <IconButton color="inherit" component={Link} href="https://www.facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://www.twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://www.instagram.com">
          <InstagramIcon />
        </IconButton>
      </div>
      <Typography variant="body2" component="p" className={classes.madeWithLove}>
        Made with ❤️ by FitGenie Team
      </Typography>
    </footer>
  );
}

