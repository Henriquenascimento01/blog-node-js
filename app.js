import express from 'express';
import router from "./router.js";
import bodyParser from 'body-parser';
import connect from './database/database.js';
import Article from './Models/Article.js';
import Category from './Models/Category.js';

const app = express();

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(8080, async () => {

    await connect();
    await Article.sync();
    await Category.sync();

    console.log('Connection success access http://localhost:8080')
}); 