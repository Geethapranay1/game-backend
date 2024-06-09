const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/game', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
