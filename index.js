/* eslint no-unused-vars: 0, no-console: 0 */

const express = require('express');
const app = express();
// Added process.env.PORT in case you deploy with a database and the port changes
const port = process.env.PORT || 3030;

const genJokes = require('./server/routes/genJokes')
const randomJokes = require('./server/routes/randomJokes')
const personalJokes = require('./server/routes/personalJokes')

// const app = express();
app.use(express.static('./client/public'));

// This is replacing body parser
app.use(express.json());

// Prepend our routes
app.use('/gen', genJokes)
app.use('/random', randomJokes)
app.use('/personal', personalJokes)

app.listen(port, () => {
  // Added Environment to the console.log
  console.log(`MODE: ${app.get('env')}`)
  console.log(`Now serving your Express app at http://localhost:${port}`); // eslint-disable-line
});