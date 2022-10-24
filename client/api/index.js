import axios from 'axios';

// Jokes
const general = (payload) => axios.put('/gen/jokes', payload);
const random = (payload) => axios.put('/random/jokes', payload);
const personal = (payload) => axios.put('/personal/jokes', payload);

const apis = {
  general,
  random,
  personal
};

export default apis;