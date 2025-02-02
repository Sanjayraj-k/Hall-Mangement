const express = require('express');
const app = express();
const dbConfig= require('./db.js');
const port = 4012;
const roomsRouter = require('./routes/roomRoutes');
app.use(express.json());
app.use('/api/rooms',roomsRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
