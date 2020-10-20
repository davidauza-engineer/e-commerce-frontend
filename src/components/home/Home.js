import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clienteAxios from "../../config/axios";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 50,
      marginBottom: 50,
    },
  }));

  const [datos, setDatos] = useState([]);
  const cargarDatos = async () => {
    try {
      const respuesta = await clienteAxios.get("/products", {
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("auth_token")}`,
        },
      });
      setDatos(respuesta.data);
    } catch (error) {
      console.log(error);
      console.log("mal");
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const classes = useStyles();
  let activeTrips = [1, 1, 1, 1, 1];
  return (
    <div>
      {activeTrips.length === 0 ? (
        <h3>No hay productos</h3>
      ) : (
        <Grid container className={classes.container}>
          {datos.map((information, index) => (
            <Card key={index} information={information} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;
