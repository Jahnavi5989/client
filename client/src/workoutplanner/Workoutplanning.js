import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const API_HOST = 'workout-planner1.p.rapidapi.com';

function WorkoutPlannerPage() {
  const [time, setTime] = useState('');
  const [muscle, setMuscle] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState('');
  const [workoutPlans, setWorkoutPlans] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://workout-planner1.p.rapidapi.com/', {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST,
        },
        params: {
          time,
          muscle,
          location,
          equipment,
        },
      });

      setWorkoutPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Workout Planner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Time Duration:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <label>
          Target Muscle:
          <input type="text" value={muscle} onChange={(e) => setMuscle(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Equipment:
          <input type="text" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Workout Plans</button>
      </form>

      <h2>Workout Plans:</h2>
      <ul>
        {workoutPlans.map((plan) => (
          <li key={plan.id}>{plan.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutPlannerPage;
