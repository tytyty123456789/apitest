const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '380ce161b7e444158a7e387fec0419d0';
const getApiData = async (countryCode) => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=${API_KEY}`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}





//스포츠 기사 api 가져오기
const getApiData2 = async (countryCode) => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}&category=sports`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}


app.set('view engine', 'ejs');
app.set('views', './views');

// 국내기사 메뉴 클릭 시
app.get('/domestic', async (req, res) => {
    const result = await getApiData('kr');
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});


//스포츠기사 클릭시

app.get('/sports', async (req, res) => {
    const result = await getApiData2('kr');
    res.render('sports', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});









app.get('/', async (req, res) => {
    const data = await getApiData('us');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('index', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})