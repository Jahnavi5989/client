import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Hidden } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import NutritionAnalysis from './NutritionAnalysis';
import { Dashboard } from '@material-ui/icons';
import TrendingBlogs from '../BlogApp/BlogHome';
import { Footer } from './Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    backdropFilter: 'blur(10px)', // Apply blur effect for transparency
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: '#ffffff',
      textDecoration: 'underline',
    },
  },
  // Add a new style for the transparent button
  transparentButton: {
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  quoteContainer: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    maxWidth: '40%',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNutritionForm, setShowNutritionForm] = useState(false); // State variable for showing the form
  const [showTrendingBlogs, setShowTrendingBlogs] = useState(false); // State variable for showing the trending blogs
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickHandler = (e) => {
    localStorage.removeItem('userId');
    localStorage.removeItem('usertoken');
    alert('Logged out successfully');
    navigate('/');
  };

  const handleNutritionFormOpen = () => {
    setShowNutritionForm(true);
  };

  const handleTrendingBlogsOpen = () => {
    setShowTrendingBlogs(true);
  };

  const handleTrendingBlogsClose = () => {
    setShowTrendingBlogs(false);
  };
  return (
    <><div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.linkContainer}>
            <Typography variant="h6" component="h1">
              𝙁𝙞𝙩𝙂𝙚𝙣𝙞𝙚
            </Typography>
          </div>
          <Hidden smDown>
            <div className={classes.linkContainer}>
              <Link to="/foodlogs" className={classes.link}>
                Food Logs
              </Link>
            </div>
            <div className={classes.linkContainer}>
              <Link to="/calorieslogs" className={classes.link}>
                Calories Logs
              </Link>
            </div>
            <div className={classes.linkContainer}>
              <Link to="/searchrecipe" className={classes.link}>
                Recipe Search
              </Link>
            </div>
            <div className={classes.linkContainer}>
              <Link to="/exercises" className={classes.link}>
                Exercises
              </Link>
            </div>
            <Button
              variant="contained"
              className={classes.transparentButton} // Apply the transparentButton style
              onClick={handleTrendingBlogsOpen} // Set showTrendingBlogs to true when clicked
            >
              Blogs
            </Button>
            {/* <div className={classes.linkContainer}>
    <Link to="#exercises" className={classes.link}>
    Workout Planner
    </Link>
    </div> */}
            <Button
              variant="contained"
              className={classes.transparentButton} // Apply the transparentButton style
              onClick={handleNutritionFormOpen} // Set showNutritionForm to true when clicked
            >
              Nutrition Analysis
            </Button>
          </Hidden>
          {!userId && (
            <div className={classes.linkContainer}>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </div>
          )}
          {!userId && (
            <div className={classes.linkContainer}>
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </div>
          )}
          {userId && (
            <Button variant="contained" color="black" className={classes.button} onClick={onClickHandler}>
              Logout
            </Button>
          )}
          <Hidden mdUp>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawer,
          }}
        >
          <Button
            variant="contained"
            // className={classes.transparentButton} // Apply the transparentButton style
            color="white"
            onClick={handleNutritionFormOpen} // Set showNutritionForm to true when clicked
          >
            Nutrition Analysis
          </Button>
          <Button
            variant="contained"
            //className={classes.transparentButton} // Apply the transparentButton style
            onClick={handleTrendingBlogsOpen} // Set showTrendingBlogs to true when clicked
          >
            Blogs
          </Button>
          <List>
            <ListItem button component={Link} to="/foodlogs" onClick={handleDrawerToggle}>
              <ListItemText primary="Food Logs" />
            </ListItem>
            <ListItem button component={Link} to="/calorieslogs" onClick={handleDrawerToggle}>
              <ListItemText primary="Calories Logs" />
            </ListItem>
            <ListItem button component={Link} to="/searchrecipe" onClick={handleDrawerToggle}>
              <ListItemText primary="Recipe Search" />
            </ListItem>
            <ListItem button component={Link} to="/exercises" onClick={handleDrawerToggle}>
              <ListItemText primary="Exercises" />
            </ListItem>
            {/* <ListItem button component={Link} to="#exercises" onClick={handleDrawerToggle}>
    <ListItemText primary="Workout planner" />
    </ListItem> */}

          </List>
        </Drawer>
      </Hidden>
      <div className={classes.content}>
        {!showNutritionForm && !showTrendingBlogs && (
          <div className={classes.quoteContainer}>
            <Typography variant="h5" component="h2" gutterBottom>
              "Your body can stand almost anything. It's your mind that you have to convince."
            </Typography>
            <Typography variant="subtitle1">- FitGenie</Typography>
          </div>
        )}
        {!showNutritionForm && !showTrendingBlogs && (
          <div className={classes.buttonContainer}>
            {/* Existing code */}
          </div>
        )}
        {showNutritionForm && <NutritionAnalysis />}
        {showTrendingBlogs && (


          <div>
            {/* <Button
         variant="contained"
         //className={classes.transparentButton} // Apply the transparentButton style
         backgroundColor="black"
         onClick={handleTrendingBlogsClose} // Set showTrendingBlogs to false when clicked
       >
         Close
       </Button> */}
            <TrendingBlogs />
          </div>

        )}
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
