const axios = require('axios');

const generalJokes = (req, res) =>
  axios
    .get('https://api.icndb.com/gen/jokes')
    .then(response => res.send({ jokes: response.data.value }))
    .catch(error => res.status(error.statusCode).send({ error: error.message }));

const randomJokes = (req, res) =>
  axios
    .get('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(response => res.send({ randomJoke: response.data.value }))
    .catch(error => res.status(error.statusCode).send({ error: error.message }));

const personalJokes = async (req, res) => {
  const { first, last } = req.params;

  return axios
    .get(
      `https://api.icndb.com/personal/jokes/random?firstName=${first}&lastName=${last}&exclude=[explicit]`,
    )
    .then(response => res.send({ personalJoke: response.data.value }))
    .catch(error => res.status(error.statusCode).send({ error: error.message }));
};

module.exports = {
  generalJokes,
  randomJokes,
  personalJokes,
};