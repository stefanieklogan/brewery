import axios from "axios";

const API = {
  getCheckins: function () {
    return axios.get("/api/untappd/checkins");
  },
  getBeers: function () {
    return axios.get("/api/untappd");
  }
};

export default API;