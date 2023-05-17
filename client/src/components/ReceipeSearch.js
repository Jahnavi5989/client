
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Typography,
//   Button,
//   Box,
//   Divider,
//   CircularProgress, // Import CircularProgress from Material-UI
// } from '@material-ui/core';
// import backgroundImg from '../assets/conscious-design-IMMHJRp4dcM-unsplash.jpg'; // Replace with your image path
// import Recipes from './Recipes';
// const useStyles = makeStyles((theme) => ({
  // formContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  //   backgroundImage: `url(${backgroundImg})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // },
  // form: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: theme.spacing(3),
  //   border: '1px solid #ccc',
  //   borderRadius: theme.spacing(1),
  //   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  //   backgroundColor: 'rgba(255, 255, 255, 0.8)',
  //   maxWidth: '450px',
  //   width: '100%',
  //   height: '500px',
  //   overflowY: 'auto',
  // },
//   formControl: {
//     margin: theme.spacing(1),
//     width: '100%',
//     maxWidth: '300px',
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//     width: '100%',
//     maxWidth: '300px',
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//     width: '100%',
//   },

//    container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '10px',
//     padding: '20px',
//   },
//   progressContainer: {
//     color:"#fff",
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
// }));

// const Form = () => {
//   const classes = useStyles();
//   const [ingredient, setIngredient] = useState('');
//   const [calories, setCalories] = useState('');
//   const [allergy, setAllergy] = useState('');
//   const [dietType, setDietType] = useState('');
//   const [mealType, setMealType] = useState('');
//   const [dishType, setDishType] = useState('');
//   const [cuisineType, setCuisineType] = useState('');
  // const[data,setData]=useState([]);
  // const[state,setState]=useState(false);
  // const [loading, setLoading] = useState(false); 
//   const handleSubmit = (event) => {
//     event.preventDefault();
          //  fetch(`https://api.edamam.com/api/recipes/v2?type=user&q=${ingredient}&app_id=fc5f7548&app_key=996fe6413a1759e0cddddbbb110e5f5d&diet=${dietType}&health=${allergy}&cuisineType=${cuisineType}&mealType=${mealType}&dishType=${dishType}&calories=${calories}&imageSize=REGULAR&random=true&field=image&field=calories&field=totalNutrients&field=uri&field=label`).then(
          //      response=> response.json()
          //  ).then(data=>setData(data)).then( setState(true)).then(setLoading(false));
          //  console.log("running")
//   };

//   console.log(data)

//   return (
//     <Box className={classes.formContainer}>
      // {loading ? ( // Display CircularProgress if loading state is true
      //  <Box className={classes.progressContainer}>
      //  <CircularProgress />
      //  </Box>
      //  ) : !state ? (
//        <form className={classes.form} onSubmit={handleSubmit}>
//         <Typography variant="h5" gutterBottom>
//           Specify your diet details
//         </Typography>

//         <TextField
//           label="Major Ingredient"
//           value={ingredient}
//           onChange={(e) => setIngredient(e.target.value)}
//           fullWidth
//           required
//           className={classes.formControl}
//         />

//         <TextField
//           label="Calories"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           fullWidth
//           required
//           className={classes.formControl}
//         />

//         <Divider className={classes.divider} />

//         <FormControl className={classes.formControl}>
//           <InputLabel>Allergies/Health Types</InputLabel>
//           <Select
//             value={allergy}
//             onChange={(e) => setAllergy(e.target.value)}
//             required
//           >
//             <MenuItem value="alcohol-cocktail">Alcohol Cocktail</MenuItem>
//             <MenuItem value="alcohol-free">Alcohol Free</MenuItem>
//             <MenuItem value="celery-free">Celery Free</MenuItem>
//             {/* Add other allergy options */}
//             <MenuItem value="crustacean-free">Crustacean-free</MenuItem>
            
//         {/* 'dairy-free',
//         'egg-free',
//         'fish-free',
//         'fodmap',
//         'gluten-free',
//         'lupine-free',
//         'mollusk-free',
//         'mustard-free',
//         'no-oil-Added',
//         'peanut-free',
//         'vegan',
//         'vegetarian',
//         'wheat-free', */}
 
//           </Select>
//         </FormControl>

//         <FormControl className={classes.formControl}>
//           <InputLabel>Diet Type</InputLabel>
//           <Select
//             value={dietType}
//             onChange={(e) => setDietType(e.target.value)}
//             required
//           >
//             <MenuItem value="balanced">Balanced
//             </MenuItem>
//             <MenuItem value="high-fiber">High Fiber</MenuItem>
//             <MenuItem value="high-protein">High Protein</MenuItem>
//             {/* Add other diet type options */}
//           </Select>
//         </FormControl>

//         <FormControl className={classes.formControl}>
//           <InputLabel>Meal Types</InputLabel>
//           <Select
//             value={mealType}
//             onChange={(e) => setMealType(e.target.value)}
//             required
//           >
//             <MenuItem value="Breakfast">Breakfast</MenuItem>
//             <MenuItem value="Dinner">Dinner</MenuItem>
//             <MenuItem value="Lunch">Lunch</MenuItem>
//             {/* Add other meal type options */}
//           </Select>
//         </FormControl>

// <FormControl className={classes.formControl}>
//           <InputLabel>Dish Type</InputLabel>
//           <Select
//             value={dishType}
//             onChange={(e) => setDishType(e.target.value)}
//             required
//           >
//             <MenuItem value="Side dish">Side Dish</MenuItem>
//             <MenuItem value="Soup">Soup</MenuItem>
//             <MenuItem value="Starter">Starter</MenuItem>
//             {/* Add other dish type options */}
//           </Select>
//         </FormControl>

//         <FormControl className={classes.formControl}>
//           <InputLabel>Cuisine Type</InputLabel>
//           <Select
//             value={cuisineType}
//             onChange={(e) => setCuisineType(e.target.value)}
//             required
//           >
//             <MenuItem value="American">American</MenuItem>
//             <MenuItem value="Asian">Asian</MenuItem>
//             <MenuItem value="British">British</MenuItem>
//             {/* Add other cuisine type options */}
//           </Select>
//         </FormControl>

//         <Divider className={classes.divider} />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className={classes.submitButton}
//         >
//          GET RECIPES
//         </Button>
    //   </form>) : (
    //   <div>{ data?.length >= 1?<Typography 
    // justifyContent={'center'}
    // mt="10px"
    // p="20px">Showing results</Typography>:''}
    //   {data?.length >= 1 ? <Recipes data={data}/>:alert("No recipes found")}</div>
      
    //   )}
//     </Box>
//   );
// };

// export default Form;



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Button,
  Box,
  Divider,
  CircularProgress
} from '@material-ui/core';
import Recipes from './Recipes';
import Loader from '../pages/Loader';
import backgroundImg from '../assets/conscious-design-IMMHJRp4dcM-unsplash.jpg'; // Replace with your image path

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '450px',
    width: '100%',
    height: '500px',
    overflowY: 'auto',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    maxWidth: '300px',
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: '300px',
  },
  divider: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}));

const Form = () => {
  const classes = useStyles();
  const [ingredient, setIngredient] = useState('');
  const [calories, setCalories] = useState('');
  const [allergy, setAllergy] = useState('');
  const [dietType, setDietType] = useState('');
  const [mealType, setMealType] = useState('');
  const [dishType, setDishType] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const[data,setData]=useState([]);
  const[state,setState]=useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=78e081ce&app_key=194a54a66916600d7ec751ede42c9565&diet=${dietType}&health=${allergy}&cuisineType=${cuisineType}&mealType=${mealType}&dishType=${dishType}&calories=${calories}&imageSize=REGULAR&random=true&field=image&field=calories&field=totalNutrients&field=uri&field=label`).then(
        response=> response.json()
    ).then(data=>setData(data.hits)).then((console.log(data))).then( setState(true)).then(setLoading(false)).then(console.log("runned"));
  };
  return (
    <Box className={classes.formContainer}>
    {loading ? ( // Display CircularProgress if loading state is true
      //  <Box className={classes.progressContainer}>
       <Loader/>
      // </Box>
       ) : !state ? (
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Specify your diet details
        </Typography>

        <TextField
          label="Major Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          fullWidth
          required
          className={classes.formControl}
        />

        <TextField
          label="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          fullWidth
          required
          className={classes.formControl}
        />

        <Divider className={classes.divider} />

        <FormControl className={classes.formControl}>
          <InputLabel>Allergies/Health Types</InputLabel>
          <Select
            value={allergy}
            onChange={(e) => setAllergy(e.target.value)}
            required
          >
            <MenuItem value="alcohol-cocktail">Alcohol Cocktail</MenuItem>
            <MenuItem value="alcohol-free">Alcohol Free</MenuItem>
            <MenuItem value="celery-free">Celery Free</MenuItem>
            <MenuItem value="crustacean-free">Crustacean-free</MenuItem>
            <MenuItem value="dairy-free">dairy Free</MenuItem>
            <MenuItem value="egg-free">Egg Free</MenuItem>
            <MenuItem value="fish-free">Fish Free</MenuItem>
            <MenuItem value="gluten-free">Gluten Free</MenuItem>
            <MenuItem value="keto-friendly">Keto Friendly</MenuItem>
            <MenuItem value="kidney-friendly">kidney-friendly</MenuItem>
            <MenuItem value="vegan">vegan</MenuItem>
            <MenuItem value="vegetarian">vegetarian</MenuItem>
            <MenuItem value="pork-free">pork-free</MenuItem>
            <MenuItem value="sesame-free">sesame-free</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Diet Type</InputLabel>
          <Select
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
            required
          >
            <MenuItem value="balanced">Balanced</MenuItem>
            <MenuItem value="high-fiber">High Fiber</MenuItem>
            <MenuItem value="high-protein">High Protein</MenuItem>
            <MenuItem value="low-carb">Low carb</MenuItem>
            <MenuItem value="low-fat">Low fat</MenuItem>
            <MenuItem value="low-sodium">Low Sodium</MenuItem>
           
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Meal Types</InputLabel>
          <Select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
          >
            <MenuItem value="breakfast">Breakfast</MenuItem>
            <MenuItem value="brunch">Brunch</MenuItem>
            <MenuItem value="lunch">Dinner</MenuItem>
            <MenuItem value="lunch">Lunch</MenuItem>
            <MenuItem value="snack">Snack</MenuItem>
            <MenuItem value="teamtime">TeaTime</MenuItem>
            {/* Add other meal type options */}
          </Select>
        </FormControl>
<FormControl className={classes.formControl}>
          <InputLabel>Dish Type</InputLabel>
          <Select
            value={dishType}
            onChange={(e) => setDishType(e.target.value)}
            required
          >
            <MenuItem value="side dish">Side Dish</MenuItem>
            <MenuItem value="soup">Soup</MenuItem>
            <MenuItem value="starter">Starter</MenuItem>\
            <MenuItem value="main course">Main Course</MenuItem>
            <MenuItem value="salad">Salads</MenuItem>
            <MenuItem value="seafood">SeaFood</MenuItem>
            <MenuItem value="desserts">desserts</MenuItem>
            <MenuItem value="drinks">Breakfast</MenuItem>
            {/* Add other dish type options */}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Cuisine Type</InputLabel>
          <Select
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
            required
          >
            <MenuItem value="american">American</MenuItem>
            <MenuItem value="asian">Asian</MenuItem>
            <MenuItem value="british">British</MenuItem>
            <MenuItem value="chinese">Chinese</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="greek">Greek</MenuItem>
            <MenuItem value="indian">Indian</MenuItem>
            <MenuItem value="italian">Italian</MenuItem>
            <MenuItem value="japanese">Japanese</MenuItem>
            <MenuItem value="korean">Korean</MenuItem>
            <MenuItem value="mexican">Mexican</MenuItem>
            {/* Add other cuisine type options */}
          </Select>
        </FormControl>

        <Divider className={classes.divider} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>) : (
      <div>{ data?.length >= 1?<Typography 
    justifyContent={'center'}
    mt="10px"
    p="20px">Showing results</Typography>:''}
      {data?.length >= 1 ? <Recipes data={data}/>:null}</div>
      
      )}
    </Box>
  );
};

export default Form;