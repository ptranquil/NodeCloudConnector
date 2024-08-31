/** This file is used to test the app locally */

const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

app.use('/api/users', routes);

app.get('/health-check',(req, res) => {
  return res.json({
    status: true,
    message: 'API is working!!'
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});