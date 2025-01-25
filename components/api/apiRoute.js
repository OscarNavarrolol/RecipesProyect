const express = require('express');
const { Router } = require('express')
const { getMealDetails, getMealsByCategory, getCategory, getMealsByName, getRandomMeal } = require('./apiController');
const { verify } = require('../../utils/jwt')
const router = Router();

router.get('/meal/category', verify, getCategory);

router.get('/meal/category/:category', verify, getMealsByCategory);

router.get('/meal/details/:id', verify, getMealDetails);

router.get('/meal/search/:name', verify, getMealsByName);

router.get('/meal/random', verify, getRandomMeal);

module.exports = router;
