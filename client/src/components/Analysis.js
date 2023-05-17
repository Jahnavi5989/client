import React from 'react';
import { Card, CardContent, Typography, makeStyles, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 400,
    margin: 'auto',
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
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
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)', // Bold and darker border line
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
}));




const NutritionFactsCard = ({ data }) => {
  const classes = useStyles();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ height: 500, overflow: 'hidden' }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            Nutrition Facts
          </Typography>

          {/* Total Calories */}
          <div className={classes.nutrientGroup}>
            <Typography variant="h6" className={classes.nutrientGroupTitle}>
            <span className={classes.label}>Total Calories</span>{data.calories} kcal
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Calories fat</span>{data.totalNutrientsKCal.FAT_KCAL.quantity} kcal
            </Typography>

            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Calories protein</span>{data.totalNutrientsKCal.PROCNT_KCAL.quantity} kcal
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Calories From Carbohydrates</span>  {data.totalNutrientsKCal.CHOCDF_KCAL.quantity} kcal
            </Typography>
            

          </div>

          {/* Total Energy */}
          <div className={classes.nutrientGroup}>
            <Typography variant="h6" className={classes.nutrientGroupTitle}>
              Total Energy
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Energy</span>{data.totalNutrientsKCal.ENERC_KCAL.quantity}
            </Typography>
          </div>


         {/* Additional Vitamins */}
         <div className={classes.nutrientGroup}>
                  <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.vitamins}`}>
                   Micro Nutrients
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin E:</span> {data.totalNutrients.TOCPHA.quantity} g
                  </Typography>
                  {/* Add more vitamins here */}
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin A:</span> {data.totalNutrients.VITA_RAE.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin B-6:</span>{data.totalNutrients.VITB6A.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin B-12:</span> {data.totalNutrients.VITB12.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Thiamin (B1):</span> {data.totalNutrients.THIA.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin C:</span> {data.totalNutrients.VITC.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin D:</span> {data.totalNutrients.VITD.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Vitamin K:</span> {data.totalNutrients.VITK1.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Water:</span> {data.totalNutrients.WATER.quantity} g
                  </Typography>
                  <Typography variant="body1" className={classes.nutrient}>
                    <span className={classes.label}>Zinc:</span> {data.totalNutrients.ZN.quantity} g
                  </Typography>
                </div>

          {/* Fatty Acids */}
          <div className={classes.nutrientGroup}>
            <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.fattyAcids}`}>
              Fatty Acids
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>{data.totalNutrients.FAMS.label}</span> {data.totalNutrients.FAMS.quantity} g
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>{data.totalNutrients.FAPU.label}</span>{data.totalNutrients.FAPU.quantity} g
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>{data.totalNutrients.FASAT.label}</span>{data.totalNutrients.FASAT.quantity} g
            </Typography>
          </div>

          {/* Cholesterol */}
          <div className={classes.nutrientGroup}>
            <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.cholesterol}`}>
              Cholesterol
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Total:</span> {data.totalNutrients.CHOLE.quantity} {data.totalNutrients.CHOLE.unit}

            </Typography>
          </div>

          {/* Fiber */}
          <div className={classes.nutrientGroup}>
            <Typography variant="h6" className={`${classes.nutrientGroupTitle} ${classes.fiber}`}>
              Fiber
            </Typography>
            <Typography variant="body1" className={classes.nutrient}>
              <span className={classes.label}>Total:</span>  {data.totalNutrients.FIBTG.quantity} {data.totalNutrients.FIBTG.unit}

            </Typography>
          </div>
        </CardContent>

        {/* Close Button */}
        <IconButton className={classes.closeButton} onClick={handleRefresh}>
            <CloseIcon />
          </IconButton>
          </Card>
    </div>
  );
};

export default NutritionFactsCard;
