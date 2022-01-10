require('dotenv').config({path: 'backend/config/config.env'});
const connectDB = require('./config/database');
const app = require('./app');

// connect to DB
connectDB();

// handling uncaught errors
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err}`);
    console.log('Shutting down the server due to uncaught exceptions.');
    process.exit(1);
})

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// unhandled promise rejection error
process.on('unhandledRejection', (err) => {
    console.log('Error:', err);
    console.log('Shutting down the server due to unhandler promise rejections.');

    server.close(() => {
        process.exit(2);
    })
})