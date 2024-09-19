import express from "express";
import session from "express-session";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import { router as gymRouter } from "./gym/index.js";
import auth from './auth.js';

const app = express();

app.use(session({
  secret: 'iamcodeegush@037',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge:  24 * 60 * 60 * 1000, 
  },
}));

app.set('views', `${dirname(fileURLToPath(import.meta.url))}/gym/views`);
app.set('view engine','ejs');
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));
app.use(express.urlencoded({ extended: false }));

auth(app);
app.use('/gym',gymRouter);
app.get('/',(req,res) => res.redirect('/gym'));
app.get('*',(req,res) => res.redirect('/gym'));



app.listen(3001,() => {
  console.log("Gym is listening...");
});