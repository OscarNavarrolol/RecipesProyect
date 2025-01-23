const express = require('express');
const { Router } = require('express')
const { signin, signup, saludo }= require('./userController');
const { verify } = require('../../utils/jwt')

const router = Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.get('/user', verify, saludo);
module.exports = router;
