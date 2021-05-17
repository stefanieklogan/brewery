import axios from "axios";

export default {
  getBeers: function() {
    return axios.get("/api/untappd");
  },
  getFeedback: function() {
    return axios.get("/api/feedback");
  }
};
