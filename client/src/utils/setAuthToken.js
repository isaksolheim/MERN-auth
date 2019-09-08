import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // apply authorization token to every requrest if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;