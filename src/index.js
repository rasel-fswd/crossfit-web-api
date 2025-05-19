// In src/index.js
const express = require('express');
const bodyParser = require('body-parser');

const v1Router = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/workouts', v1Router);

app.listen(PORT, () => {
  console.log(`Express app is running on PORT:${PORT}`);
});
