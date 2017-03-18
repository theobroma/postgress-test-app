import express from 'express';
import _isEmpty from 'lodash/isEmpty';
import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {

  const { username, password } = req.body;
  User.forge({ username, password }).save()
    .then(user => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

router.get('/', (req, res) => {
  User.fetchAll()
    .then(data => res.json(data) )
    .catch(err => res.status(500).json({ error: err }));
})

export default router;
