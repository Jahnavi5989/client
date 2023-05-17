import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Typography,
  TextField,
  CircularProgress,
  Grid,
  Card,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import Analysis from '../components/Analysis';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.edamam.com/api/nutrition-details';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#000000',
  },
  button: {
    margin: theme.spacing(1),
    backgroundcolor: '#ffffff',
    color:'black'

  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginRight: theme.spacing(2),
    backgroundColor: 'transparent',
    color: '#000000',
  },
  processingText: {
    marginTop: theme.spacing(2),
  },
}));

function CalorieAnalysisPage() {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');
  const [calories, setCalories] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [showCard, setShowCard] = useState(true);
  let recognition;

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      stopListening();
    };
  }, [isListening]);

  const startListening = () => {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      recognition.onresult = null;
      recognition.onerror = null;
      setInputText(''); // Reset input text to empty
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProcessing(true);

    fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=e79dd53d&app_key=1748567d604623b18ceea3d675cd0064&nutrition-type=logging&ingr=${inputText}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCalories(data);
        setProcessing(false);
        setAnalyzing(true);
        setShowCard(false);
        console.log(data.totalNutrients)
      })
      .catch((error) => {
        setError('Error analyzing calories. Please try again.');
        setProcessing(false);
        setAnalyzing(false);
        setShowCard(false);
      });
  };

  useEffect(() => {
    if (analyzing) {
      // Simulating analyzing time
      const timeout = setTimeout(() => {
        setAnalyzing(false);
        setInputText('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [analyzing]);

  return (
    <div className={classes.root}>
      {showCard && (
        <Card className={classes.card}>
         <Typography variant="h4" className={classes.title}>
  Calorie Analysis
</Typography>

          <div className={classes.buttonContainer}>
            {isListening ? (
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<MicOffIcon />}
                onClick={() => setIsListening(false)}
              >
                Stop Listening
              </Button>
            ) : (
              <Button
                variant="contained"
                className={classes.button}
                startIcon={<MicIcon />}
                onClick={() => setIsListening(true)}
              >
                Start Listening
              </Button>
            )}
          </div>

          <Typography variant="body1">Spoken Text: {inputText}</Typography>
          <form onSubmit={submitHandler}>
            <div className={classes.inputContainer}>
              <TextField
                className={classes.textField}
                label="Enter Text"
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Analyze
              </Button>
            </div>
          </form>
          {processing && (
            <CircularProgress className={classes.processingText} />
          )}
          {analyzing && <Typography variant="body1">Analyzing...</Typography>}
          {error && <Typography variant="body1">{error}</Typography>}
          {calories && <Typography variant="body1">Done</Typography>}
        </Card>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        {calories ? <Analysis data={calories} search={inputText} /> : null}
      </div>
    </div>
  );
}

export default CalorieAnalysisPage;
