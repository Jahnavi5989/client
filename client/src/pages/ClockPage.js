// import React, { useState, useEffect } from 'react';
// import { Typography, Button, Grid, TextField, CircularProgress } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timerContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   timerText: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     marginTop: theme.spacing(2),
//     textAlign: 'center',
//   },
//   button: {
//     margin: theme.spacing(1),
//     minWidth: '120px',
//   },
//   progress: {
//     margin: theme.spacing(2),
//   },
// }));

// function ClockPage() {
//   const classes = useStyles();
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [timerRunning, setTimerRunning] = useState(false);
//   const [timerDuration, setTimerDuration] = useState(0);
//   const [timerIntervalId, setTimerIntervalId] = useState(null);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const startTimer = () => {
//     if (!timerRunning) {
//       const totalSeconds = hours * 3600 + minutes * 60;
//       setTimerDuration(totalSeconds);
//       setTimerRunning(true);
//       setTimerIntervalId(
//         setInterval(() => {
//           setTimerDuration((prevDuration) => prevDuration - 1);
//         }, 1000)
//       );
//     }
//   };

//   const stopTimer = () => {
//     if (timerRunning) {
//       setTimerRunning(false);
//       clearInterval(timerIntervalId);
//     }
//   };

//   const resetTimer = () => {
//     stopTimer();
//     setHours(0);
//     setMinutes(0);
//     setTimerDuration(0);
//   };

//   const formatTime = (time) => {
//     const hours = Math.floor(time / 3600)
//       .toString()
//       .padStart(2, '0');
//     const minutes = Math.floor((time % 3600) / 60)
//       .toString()
//       .padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');

//     return `${hours}:${minutes}:${seconds}`;
//   };

//   const calculateProgress = () => {
//     if (timerRunning) {
//       const progress = (timerDuration / (hours * 3600 + minutes * 60)) * 100;
//       return Math.floor(progress);
//     }
//     return 0;
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes.timerContainer}>
//         <CircularProgress
//           variant="determinate"
//           value={calculateProgress()}
//           size={120}
//           className={classes.progress}
//         />
//         <Typography variant="h3" className={classes.timerText}>
//           {formatTime(timerDuration)}
//         </Typography>
//         <Grid container spacing={2} justify="center">
//           <Grid item>
//             <TextField
//               label="Hours"
//               variant="outlined"
//               type="number"
//               value={hours}
//               onChange
//               ={(e) => setHours(Number(e.target.value))}
//               />
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Minutes"
//                 variant="outlined"
//                 type="number"
//                 value={minutes}
//                 onChange={(e) => setMinutes(Number(e.target.value))}
//               />
//             </Grid>
//           </Grid>
//           <div className={classes.buttonContainer}>
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.button}
//               onClick={startTimer}
//               disabled={timerRunning || (hours === 0 && minutes === 0)}
//             >
//               Start Timer
//             </Button>
//             <Button
//               variant="contained"
//               color="secondary"
//               className={classes.button}
//               onClick={stopTimer}
//               disabled={!timerRunning}
//             >
//               Stop Timer
//             </Button>
//             <Button
//               variant="outlined"
//               className={classes.button}
//               onClick={resetTimer}
//               disabled={timerRunning}
//             >
//               Reset Timer
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default ClockPage;


import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, TextField, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  timerText: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
    minWidth: '120px',
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

function ClockPage() {
  const classes = useStyles();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [reminderTime, setReminderTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const startTimer = () => {
    if (!timerRunning) {
      const totalSeconds = hours * 3600 + minutes * 60;
      setTimerDuration(totalSeconds);
      setTimerRunning(true);
      setTimerIntervalId(
        setInterval(() => {
          setTimerDuration((prevDuration) => prevDuration - 1);
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    if (timerRunning) {
      setTimerRunning(false);
      playReminderSound();
      clearInterval(timerIntervalId);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setHours(0);
    setMinutes(0);
    setTimerDuration(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  const calculateProgress = () => {
    if (timerRunning) {
      const progress = (timerDuration / (hours * 3600 + minutes * 60)) * 100;
      return Math.floor(progress);
    }
    return 0;
  };

  const handleSetReminder = () => {
    if (!timerRunning && (hours !== 0 || minutes !== 0)) {
      const totalSeconds = hours * 3600 + minutes * 60;
      setReminderTime(totalSeconds);
    }
  };


  useEffect(() => {
    if (reminderTime > 0) {
      const reminderIntervalId = setInterval(() => {
        playReminderSound();
      }, reminderTime * 1000);

      return () => {
        clearInterval(reminderIntervalId);
      };
    }
  }, [reminderTime]);

  
    const playReminderSound = () => {
      // Implement your sound playing logic here
      // For example, you can use the HTML Audio element to play an audio file
      const audio = new Audio('../assets/mixkit-retro-game-emergency-alarm-1000.wav');
      audio.play();
    };
  
    return (
      <div className={classes.root}>
        <div className={classes.timerContainer}>
          <CircularProgress
            variant="determinate"
            value={calculateProgress()}
            size={120}
            className={classes.progress}
          />
          <Typography variant="h3" className={classes.timerText}>
            {formatTime(timerDuration)}
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <TextField
                label="Hours"
                variant="outlined"
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Minutes"
                variant="outlined"
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
            </Grid>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={startTimer}
              disabled={timerRunning || (hours === 0 && minutes === 0)}
            >
              Start Timer
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={stopTimer}
              disabled={!timerRunning}
            >
              Stop Timer
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={resetTimer}
              disabled={timerRunning}
            >
              Reset Timer
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSetReminder}
              disabled={timerRunning || (hours === 0 && minutes === 0)}
            >
              Set Reminder
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ClockPage;
  