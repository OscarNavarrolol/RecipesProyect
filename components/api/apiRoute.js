const express = require('express');
const { Router } = require('express')
const { getMealDetails, getMealsByCategory }= require('./apiController');
const { verify } = require('../../utils/jwt')
const router = Router();


router.get('/category/:category', verify, getMealsByCategory);
router.get('/details/:id', verify, getMealDetails);

module.exports = router;
