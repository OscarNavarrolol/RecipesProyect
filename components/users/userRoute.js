const express = require('express');
const { Router } = require('express')
const { signin, signup }= require('./userController');


const router = Router();

router.post('/signin', signin);

router.post('/signup', signup);

module.exports = router;
