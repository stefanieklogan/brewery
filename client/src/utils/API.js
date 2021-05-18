import axios from "axios";

export default {
  // postLogin: function() {
  //   return axios.post("/api/user/login");
  // },
  // postSignup: function() {
  //   return axios.post("/api/signup");
  // },
  getBeers: function() {
    return axios.get("/api/untappd");
  },
  getFeedback: function() {
    return axios.get("/api/feedback");
  }
};
