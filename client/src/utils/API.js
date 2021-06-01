import axios from "axios";

const API = {
  // postLogin: function() {
  //   return axios.post("/api/user/login");
  // },
  // postSignup: function() {
  //   return axios.post("/api/signup");
  // },
  getBeers: function () {
    return axios.get("/api/untappd");
  },
  getCheckins: function () {
    return axios.get("/api/untappd/checkins");
  }
  // getFeedback: function() {
  //   return axios.get("/api/feedback");
  // }
};
export default API;