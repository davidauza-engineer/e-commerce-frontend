import React from "react";
import Card from "../card/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



const Home = () => {




    
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 50,
        marginBottom: 50
    },
    
  }));
  const classes = useStyles();
  let activeTrips = [1,1,1,1,1]
  return (
    <div>
    {activeTrips.length === 0 ? (
      <h3>No hay productos</h3>
    ) : (
      <Grid container className={classes.container}>
        {activeTrips.map((activeTrip, index) => (
          <Card key={index} activeTrip={activeTrip} />
        ))}
      </Grid>
    )}
  </div>
  );
};

export default Home;


