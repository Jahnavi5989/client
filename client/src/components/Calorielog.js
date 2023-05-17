import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyFoodlogs from './MyFoodlogs';
import MyCalorielogs from './MyCalorielogs'
import { Grid, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box} from '@material-ui/core';
import { Pagination, PaginationItem } from '@mui/material';

import CalorieGraph from './CalorieGraph';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)', // Adjust the value based on your layout (64px is the height of the header/navbar)
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  backgroundBox: {
    backgroundImage: `url('https://blog.myfitnesspal.com/wp-content/uploads/2019/04/5-Rules-For-Better-Lunges-1200x675.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.8,
  },
  buttonContainer: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1,
  },
  contentContainer: {
    marginTop: theme.spacing(8),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  graphContainer: {
    width: '80%', // Adjust the width as needed
    height: '80vh', // Adjust the height as needed
    margin: '0 auto', // Center horizontally
    position: 'fixed', // Position relative to the viewport
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background with opacity
    zIndex: 1, // Place the graph above the background image
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  paginationButton: {
    borderRadius: '50%',
    margin: theme.spacing(1),
    minWidth: 0,
    padding: '6px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 0.5)',
    '&.Mui-selected': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  },
}));

const Calorielog = () => {
  const ITEMS_PER_PAGE = 3;
  const [user, setUser] = useState();
  const [caloriesArray, setCaloriesArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [weightArray,setWeightArray]=useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate
  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Filter the foodlogs based on the current page
  const calorielogs = user?.calorielogs?.slice(startIndex, endIndex) || [];

  // Calculate the total number of pages
  const totalPages = Math.ceil((user?.calorielogs?.length || 0) / ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const sendRequest=async()=>{
    const res=await axios.get(`https://gfghackathon-ordr3zrkza-el.a.run.app/mycalorielogs`,{
        headers:{
            'x-token': localStorage.getItem("usertoken")
        }
    }).catch((err)=>console.log(err))
    const data= await res.data;
    console.log(data)
    return data
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setUser(data.user);
      const extractedCalories = data.user?.calorielogs?.map((calorielog) => calorielog.burnedcal) || [];
      const extractedDates = data.user?.calorielogs?.map((calorielog) => calorielog.date) || [];
      const extractedWeights = data.user?.calorielogs?.map((calorielog) => calorielog.weight) || [];
      setCaloriesArray(extractedCalories);
      setDateArray(extractedDates);
      setWeightArray(extractedWeights);
    });
  }, []);

  const handleShowProgress = () => {
    setShowGraph(true);
  };

  const handleCloseGraph = () => {
    setShowGraph(false);
  };

  return (
    <>
      <Box className={classes.container}>
        <div className={classes.backgroundBox} />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={showGraph ? handleCloseGraph : handleShowProgress}
            style={{ color: '#000', backgroundColor: '#fff' }}
          >
            {showGraph ? 'Close' : 'View Analysis'}
          </Button>
        </div>
        {!showGraph && (
          <div className={classes.contentContainer}>
            <Grid container spacing={2} justify="center">
              {calorielogs.map((calorielog, index) => (
                <MyCalorielogs
                  key={calorielog._id}
                  id={calorielog._id}
                  isUser={true}
                  activity={calorielog.activity}
                  duration={calorielog.duration}
                  weight={calorielog.weight}
                  burnedcal={calorielog.burnedcal}
                  date={calorielog.date}
                />
              ))}
            </Grid>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className={classes.paginationContainer}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  color="primary"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      className={classes.paginationButton}
                    />
                  )}
                />
              </div>
            )}
          </div>
        )}
      </Box>
      <>
        {showGraph && (
          <div className={classes.graphContainer}>
            <CalorieGraph calories={caloriesArray} dates={dateArray} weights={weightArray} />
          </div>
        )}
      </>
    </>
  );
};

export default Calorielog ;

