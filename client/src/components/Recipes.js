// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { Box } from '@mui/material';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
  

// const Recipes = ({data}) => {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//       }));
     
  
//   return (
   
//     <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
//     {data.map(data=>
//        <Card sx={{ maxWidth: 350}}>
//        <CardHeader
//          title={data.recipe.label}
//          subheader={"Total Calories "+data.recipe.calories+" g"}
//        />
//        <CardMedia
//          component="img"
//          height="210"
//          image={data.recipe.image}
//          alt="Paella dish"
//        />
//        <CardActions disableSpacing>
//          <ExpandMore
//            expand={expanded}
//            onClick={handleExpandClick}
//            aria-expanded={expanded}
//            aria-label="show more"
//          >
//            <ExpandMoreIcon />
//          </ExpandMore>
//        </CardActions>
//        <Collapse in={expanded} timeout="auto" unmountOnExit>
//          <CardContent>
//          <Typography>
//          Calories from carbohydrates<br/>
//          {data.recipe.totalNutrients.CHOCDF.quantity} kcal<br/>
//          Total Energy<br/>
//          {data.recipe.totalNutrients.ENERC_KCAL.quantity} kcal<br/>
//          <Typography variant='h5'>Fatty acids<br/></Typography>
//          --- {data.recipe.totalNutrients.FAMS.label}<br/>
//          --- {data.recipe.totalNutrients.FAMS.quantity} g<br/>
//          --- {data.recipe.totalNutrients.FAPU.label} <br/>
//          --- {data.recipe.totalNutrients.FAPU.quantity} g<br/>
//          --- {data.recipe.totalNutrients.FASAT.label}<br/>
//          --- {data.recipe.totalNutrients.FASAT.quantity} g<br/>
//          <Typography variant='h5'>Cholestrol<br/></Typography>
//          {data.recipe.totalNutrients.CHOLE.quantity} {data.recipe.totalNutrients.CHOLE.unit}
//          <Typography variant='h5'>Fiber<br/></Typography>
//          {data.recipe.totalNutrients.FIBTG.quantity} {data.recipe.totalNutrients.FIBTG.unit}
//         </Typography>
//          </CardContent>
//        </Collapse>
//      </Card>
//     )}
// </Stack>
    
//   )
// }

// export default Recipes









import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Grid,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    overflow: 'scroll',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 300,
    margin: 'auto',
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
    marginBottom: theme.spacing(2), // Add margin bottom to create space between cards
    overflowY: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333333',
  },
  nutrientGroup: {
    marginTop: theme.spacing(2),
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    paddingBottom: theme.spacing(1),
  },
  nutrientGroupTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  nutrient: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    color: '#616161',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  },
  label: {
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  vitamins: {
    color: 'blue',
  },
  fattyAcids: {
    color: 'green',
  },
  cholesterol: {
    color: 'red',
  },
  fiber: {
    color: 'purple',
  },
  // quote: {
  //   textAlign: 'center',
  //   margin: theme.spacing(15),
  //   fontFamily: 'Georgia, serif',
  //   fontSize: '2.5rem',
  //   color: 'rgba(0, 0, 0, 0.6)',
  //   [theme.breakpoints.down('sm')]: {
  //     fontSize: '1.8rem',
  //   },
  
}));


const Recipes = ({ data }) => {
  const classes = useStyles();

  const handleRefresh = () => {
   return;
  };

  return (
    <div style={{ height: '100%', padding: 16 }} >
     
      <Grid container spacing={2} className={classes.container}>
        {data.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={data.id}>
            <Card className={classes.card}>
            <CardHeader
         title={data.recipe.label}
         subheader={"Total Calories "+data.recipe.calories+" g"}
       />
       <CardMedia
         component="img"
         height="210"
         image={data.recipe.image}
         alt="Paella dish"
       />
              <CardContent>
                <Typography variant="h4" className={classes.title}>
                  Nutrition Facts
                </Typography>

                {/* Total Calories */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={classes.nutrientGroupTitle}>
                    Total Energy
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Calories:</span>{data.recipe.totalNutrients.ENERC_KCAL.quantity}
                  </Typography>
                </div>

                {/* Calories from Carbohydrates */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={classes.nutrientGroupTitle}>
                    Calories From Carbohydrates
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Total:</span>{data.recipe.totalNutrients.CHOCDF.quantity} kcal
                  </Typography>
                </div>

                {/* Additional Vitamins */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.vitamins}`}>
                    Micro Nutrients
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin E:</span> {data.recipe.totalNutrients.TOCPHA.quantity} g
                  </Typography>
                  {/* Add more vitamins here */}
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin A:</span> {data.recipe.totalNutrients.VITA_RAE.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin B-6:</span>{data.recipe.totalNutrients.VITB6A.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin B-12:</span> {data.recipe.totalNutrients.VITB12.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Thiamin (B1):</span> {data.recipe.totalNutrients.THIA.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin C:</span> {data.recipe.totalNutrients.VITC.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin D:</span> {data.recipe.totalNutrients.VITD.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin K:</span> {data.recipe.totalNutrients.VITK1.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Water:</span> {data.recipe.totalNutrients.WATER.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Zinc:</span> {data.recipe.totalNutrients.ZN.quantity} g
                  </Typography>
                </div>

                {/* Fatty Acids */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.fattyAcids}`}>
                    Fatty Acids
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>{data.recipe.totalNutrients.FAMS.label}</span>{data.recipe.totalNutrients.FAMS.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>{data.recipe.totalNutrients.FAPU.label}</span> {data.recipe.totalNutrients.FAPU.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>{data.recipe.totalNutrients.FASAT.label}</span>{data.recipe.totalNutrients.FASAT.quantity} g
                  </Typography>
                </div>

                {/* Cholesterol */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.cholesterol}`}>
                    Cholesterol
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Total:</span>  {data.recipe.totalNutrients.CHOLE.quantity} {data.recipe.totalNutrients.CHOLE.unit}
                  </Typography>
                </div>

                {/* Fiber */}
                <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.fiber}`}>
                    Fiber
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Total:</span>{data.recipe.totalNutrients.FIBTG.quantity} {data.recipe.totalNutrients.FIBTG.unit}
                  </Typography>
                </div>
              </CardContent>

              {/* Close Button */}
              <IconButton className={classes.closeButton} onClick={handleRefresh}>
              < FavoriteBorderIcon/>
              </IconButton>
            </Card>
          </Grid>
  ))}
  </Grid>
</div>
);
};

export default Recipes;
                  