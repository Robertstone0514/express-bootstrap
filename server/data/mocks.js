const mockJokes = {
  type: 'success',
  value: [
    {
      id: 1,
      joke: 'I am a joke',
      categories: [],
    },
    {
      id: 2,
      joke: 'I am another joke',
      categories: [],
    },
  ],
};

const mockRandomJokes = {
  type: 'success',
  value: {
    id: 115,
    joke: 'I am a random joke',
    categories: [],
  },
};

const mockPersonalJokes = {
  type: 'success',
  value: {
    id: 141,
    joke: 'Random joke about manchester codes',
    categories: [],
  },
};

module.exports = {
  mockJokes,
  mockRandomJokes,
  mockPersonalJokes,
};