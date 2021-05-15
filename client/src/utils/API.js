import axios from "axios";

export default {
  searchBeers: function() {
    return axios.get("/api/untappd");
  }
};
