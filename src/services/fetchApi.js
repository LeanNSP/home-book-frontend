import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3300";
axios.defaults.baseURL = "https://pacific-sands-67465.herokuapp.com";
axios.defaults.headers.get["Accept"] = "application/json";

const fetchApi = {
  post: async (url, reqBody) => {
    try {
      const { data } = await axios.post(url, reqBody);
      return data;
    } catch (error) {
      throw error;
    }
  },

  get: async (url) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchApi;
