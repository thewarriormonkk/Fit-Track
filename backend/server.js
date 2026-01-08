// server.js contains all infra & execution logic
// main entry point of backend

require('dotenv').config();
const app = require('./app');
const connectToDB = require('./config/db');


const startServer = async () => {
    try {
        await connectToDB();

        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(`Listening for request on port: ${port}`)
        });

    } catch (err) {
        console.error(`Statup failed: ${err.message}`);
        process.exit(1);
    }
};

startServer();
