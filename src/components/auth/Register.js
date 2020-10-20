import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "../alert/Alert";
import clienteAxios from "../../config/axios";
import {withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'

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

const SignIn = (props) => {
  const classes = useStyles();
  const [userInfo, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendInformation = async (e) => {
    e.preventDefault();
    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.password === "" ||
      userInfo.password_confirmation === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    const api_user = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      password_confirmation: userInfo.password_confirmation,
    };

    try {
      const respuesta = await clienteAxios.post(`/users`, { api_user });
      Swal.fire("Tu Registro fue exitoso", "Puedes hacer Login", "success");
      console.log(respuesta);
      
      props.history.push("/login");
    } catch (error) {
      console.log(error);
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
          Registro
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendInformation}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password_confirmation"
            label="Confirma tu contraseña"
            type="password"
            id="password_confirmation"
            autoComplete="password_confirmation"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registro
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignIn)