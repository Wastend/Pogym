require('dotenv').config();

const app = require('./app');

const BACKENDPORT = process.env.BACKENDPORT || 3001;

app.listen(BACKENDPORT, () => {
    console.log(`Server is running on port ${BACKENDPORT}`);
});