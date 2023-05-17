// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import MyFoodlogs from './MyFoodlogs';
// import { Grid, Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
// import { Box } from '@material-ui/core';
// import Graph from './Graph';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundImage: `url('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/GettyImages-1247033916_thumb.jpg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minHeight: 'calc(100vh - 64px)', // Adjust the value based on your layout (64px is the height of the header/navbar)
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   buttonContainer: {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(2),
//     zIndex: 1,
//   },
//   contentContainer: {
//     marginTop: theme.spacing(8),
//   },
//   button: {
//     marginRight: theme.spacing(2),
//   },
//   graphContainer: {
//     width: '80%', // Adjust the width as needed
//     height: '80vh', // Adjust the height as needed
//     margin: '0 auto', // Center horizontally
//     position: 'fixed', // Position relative to the viewport
//     top: '50%', // Center vertically
//     left: '50%', // Center horizontally
//     transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background with opacity
//     zIndex: 1, // Place the graph above the background image
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// }));

// const Foodlog = () => {
//   const ITEMS_PER_PAGE = 3;
//   const [user, setUser] = useState();
//   const [caloriesArray, setCaloriesArray] = useState([]);
//   const [dateArray, setDateArray] = useState([]);
//   const [showGraph, setShowGraph] = useState(false);
//   const classes = useStyles();
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the start and end indexes of the current page
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;

//   // Filter the foodlogs based on the current page
//   const foodlogs = user?.foodlogs?.slice(startIndex, endIndex) || [];

//   // Calculate the total number of pages
//   const totalPages = Math.ceil((user?.foodlogs?.length || 0) / ITEMS_PER_PAGE);

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };


//   const sendRequest = async () => {
//     try {
//       const res = await axios.get('https://gfghackathon-ordr3zrkza-el.a.run.app/myfoodlogs', {
//         headers: {
//           'x-token': localStorage.getItem('usertoken'),
//         },
//       });
//       const data = res.data;
//       console.log(data);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     sendRequest().then((data) => {
//       setUser(data.user);
//       const extractedCalories = data.user?.foodlogs?.map((foodlog) => foodlog.Calories) || [];
//       const extractedDates = data.user?.foodlogs?.map((foodlog) => foodlog.date) || [];
//       setCaloriesArray(extractedCalories);
//       setDateArray(extractedDates);
//     });
//   }, []);

//   const handleShowProgress = () => {
//     setShowGraph(true);
//   };

//   const handleCloseGraph = () => {
//     setShowGraph(false);
//   };

//   return (
//     <>
//     <Box className={classes.container}>
//       <div className={classes.buttonContainer}>
//       <Button
//   variant="contained"
//   color="primary"
//   className={classes.button}
//   onClick={showGraph ? handleCloseGraph : handleShowProgress}
//   style={{ color: '#000', backgroundColor: '#fff' }}
// >
//   {showGraph ? 'Close Graph' : 'Show My Progress'}
// </Button>
//       </div>
//       {!showGraph && (
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//         {foodlogs.map((foodlog, index) => (
//           <MyFoodlogs
//             key={foodlog._id}
//             id={foodlog._id}
//             isUser={true}
//             qty={foodlog.qty}
//             unit={foodlog.unit}
//             food={foodlog.food}
//             Calories={foodlog.Calories}
//             date={foodlog.date}
//           />
//         ))}
//       </div>
      
//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div>
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//             (page) => (
//               <button
//                 key={page}
//                 onClick={() => handlePageChange(page)}
//                 style={{ margin: '5px' }}
//               >
//                 {page}
//               </button>
//             )
//           )}
//         </div>
//       )}
//     </div>
//       )}
      
//     </Box>
//     <>
//     {showGraph && (
//       <div className={classes.graphContainer}>
//         <Graph calories={caloriesArray} dates={dateArray} />
//       </div>
//     )}
//     </>
//     </>
//   );
  
// };

// export default Foodlog;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyFoodlogs from './MyFoodlogs';
import { Grid, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box} from '@material-ui/core';
import { Pagination, PaginationItem } from '@mui/material';

import Graph from './Graph';
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
    backgroundImage: `url('https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/GettyImages-1247033916_thumb.jpg')`,
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

const Foodlog = () => {
  const ITEMS_PER_PAGE = 3;
  const [user, setUser] = useState();
  const [caloriesArray, setCaloriesArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate
  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Filter the foodlogs based on the current page
  const foodlogs = user?.foodlogs?.slice(startIndex, endIndex) || [];

  // Calculate the total number of pages
  const totalPages = Math.ceil((user?.foodlogs?.length || 0) / ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const sendRequest = async () => {
    try {
      const res = await axios.get('https://gfghackathon-ordr3zrkza-el.a.run.app/myfoodlogs', {
        headers: {
          'x-token': localStorage.getItem('usertoken'),
        },
      });
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setUser(data.user);
      const extractedCalories = data.user?.foodlogs?.map((foodlog) => foodlog.Calories) || [];
      const extractedDates = data.user?.foodlogs?.map((foodlog) => foodlog.date) || [];
      setCaloriesArray(extractedCalories);
      setDateArray(extractedDates);
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
              {foodlogs.map((foodlog, index) => (
                <MyFoodlogs
                  key={foodlog._id}
                  id={foodlog._id}
                  isUser={true}
                  qty={foodlog.qty}
                  unit={foodlog.Unit}
                  food={foodlog.food}
                  Calories={foodlog.Calories}
                  date={foodlog.date}
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
            <Graph calories={caloriesArray} dates={dateArray} />
          </div>
        )}
      </>
    </>
  );
};

export default Foodlog;
