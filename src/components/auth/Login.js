import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";
import Alert from "../alert/Alert";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const sendInformation = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await clienteAxios.post("/registrar", user);

      const { token } = respuesta.data;
      localStorage.setItem("token", token);

      //alerta
      Swal.fire("Inicio Correcto", "Has iniciado Sesion", "success");

      //redireccionar
      props.history.push("/");
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: error.response.data.mensaje,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: "Hubo un error2",
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {error && (
          <Alert mensaje="Todos los campos deben estar diligenciados" />
        )}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingreso
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendInformation}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Login);
