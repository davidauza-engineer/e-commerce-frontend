import axios from "axios";
import clienteAxios from './axios'
import { setToken } from "./Auth-helpers";

export const sendCodeToBackend = async (code) => {
  const API_URL = clienteAxios;
  await axios
    .post(
      `${API_URL}/login`,
      {
        code: code,
      },
      {
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
      }
    )

    .then((res) => {
      const { token } = res.data;
      setToken(token);

      return res;
    })
    .catch((error) => {
      alert("Error logging in please try again ");
      console.log(error);
    });
};
