import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_URL,
});

export default $api;
