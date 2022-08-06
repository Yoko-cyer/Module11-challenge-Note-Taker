const express = require('express');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// static middleware - serving the folder statically 
app.use(express.static('public'));

// teach express on how to understand incoming json req body
app.use(express.json());

// teach express on how to understand incoming form data req body
app.use(express.urlencoded({extended: true}));

// load the routes
app.use(webRoutes);
app.use('/api', apiRoutes);

app.get("*", (req, res) => {
  res.status(404).send('page not found');
})


app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
})

