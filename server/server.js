import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import mongoose from 'mongoose';
import morgan from 'morgan';
// server routes
import users from './routes/users';

const app = express();
app.set('port', (process.env.PORT || 8080));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(path.join(__dirname, 'public','build','favicon.png')));
app.use(express.static(path.join(__dirname, 'public', 'build')));

app.use('/api/users', users);
// Redirect all non api requests to the index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'build','index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
