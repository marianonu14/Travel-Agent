import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
    .then(() => console.log('DB Connected'))
    .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.set('view engine', 'pug');

app.use(express.static('public'))

app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.siteName = 'Travel Agent';

     next();
})

app.use('/', router);

app.listen(port, ()=> {
    console.log(`Server running in Port ${port}`);
})


