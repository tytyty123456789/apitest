const express = require('express');
const router = express.Router();
const axios = require('axios').default;


const domesticService = require('../service/domesticService');

const testService = require('../service/test');
// const API_KEY = '380ce161b7e444158a7e387fec0419d0';
// const getApiData = async (countryCode, category = 'business') => {
//     return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
//                     .then(function(response) {
//                         console.log(response.data.articles);
//                         return response.data.articles;
//                     });
// }

router.get('/', async (req, res, next) => {
    const result = await domesticService.getApiData('kr');
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

router.get('/sports', async (req, res, next) => {
    testService.getlog('hihihihihihihih');
    const data = await  domesticService.getApiData('kr', 'sports');
    res.render('domestic-sports', {
        one: "this is one",
        two: "this is two",
        data: data
    });
});

module.exports = router;