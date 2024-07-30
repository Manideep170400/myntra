import React from "react";
import axios from "axios";

const API_URL = "http://localhost/8080";

async function login() {
  const payload = {
    email: "",
    password: "",
  };
  const response = await axios.post(API_URL + "/login", payload);
  console.log(response.data);
}
async function crateAccount() {
  const payload = {
    email: "",
    password: "",
    createPassword: "",
  };
  const response = await axios.post(API_URL + "/createAccount", payload);
  console.log(response.data);
}
const homePage = () => {
  return {
    login: login(),
    createAccount: crateAccount(),
  };
};

export default homePage;
