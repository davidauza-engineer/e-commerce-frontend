import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {

    if(localStorage.getItem("auth_token")){
    // La ruta
    return <Route path={props.path} component={props.component} />
    }
    return <Redirect to="/login" />
    }

export default  PrivateRoute
