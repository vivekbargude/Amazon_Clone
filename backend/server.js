//IMPORT
const dotenv = require('dotenv');
const colors = require('colors');
const authRouter = require('./routes/auth');
const db = require('./config/db');
const app = require('./app/app');
const PORT = 3000


//SERVER CONNECTION
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is listening at http://localhost:${PORT}`.blue.underline.bold);
})