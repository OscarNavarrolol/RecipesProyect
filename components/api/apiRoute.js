const express = require('express');
const { Router } = require('express')
const { getMealDetails, getMealsByCategory, getCategory } = require('./apiController');
const { verify } = require('../../utils/jwt')
const router = Router();

router.get('/meal/category', verify, getCategory);

router.get('/meal/category/:category', verify, getMealsByCategory);

router.get('/meal/details/:id', verify, getMealDetails);

module.exports = router;
