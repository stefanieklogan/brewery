import axios from "axios";

export default {
  getBeers: function() {
    return axios.get("/api/untappd");
  }
};
