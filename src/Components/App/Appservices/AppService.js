import axios from "axios";
import API_URL from "./API_URL";
import authHeader from "./auth-header";
// This file holds a series of functions containing axios functions to interact with the API
const BASEURL = "stringsonline";

const GetList = (e) => {
  return axios.get(`${API_URL}/${BASEURL}/${e}`, {
    headers: authHeader(),
  });
};

const Get = (e) => {
  return axios.get(`${API_URL}/${BASEURL}/${e}`, {
    headers: authHeader(),
  });
};
const GetDetails = (e, id) => {
  return axios.get(`${API_URL}/${BASEURL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const Create = (e, data) => {
  return axios.post(`${API_URL}/${BASEURL}/${e}`, data, {
    headers: authHeader(),
  });
};

const Login = async (username, password) => {
  return await axios.post(`${API_URL}/token`, { username, password });
};

const Update = (e, id, data) => {
  return axios.put(`${API_URL}/${BASEURL}/${e}/${id}`, data, {
    headers: authHeader(),
  });
};

const Remove = (e, id) => {
  return axios.delete(`${API_URL}/${BASEURL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const appService = {
  GetList,
  Get,
  GetDetails,
  Create,
  Remove,
  Login,
  Update,
};
export default appService;
