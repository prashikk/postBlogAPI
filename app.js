// app.js
const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/errorMiddleware');
const sequelize = require('./controllers/database');
const postRoutes = require('./routes/postRoute');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/posts', postRoutes);
app.use('/tags', tagRoutes);
app.use('/auth', authRoutes);

// Error handling middleware
app.use(errorMiddleware);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
