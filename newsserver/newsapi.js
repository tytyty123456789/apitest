const express = require('express');
const app = express();
const axios = require('axios').default;

apiKey = `66b85476fba14cb6a5c4967a2edfe3c2`;
const getApiData = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
        console.log(response.data); // 확인용 로그
        return response.data.articles; // API에서 articles 배열을 가져옴
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return []; // 오류 발생 시 빈 배열 반환
    }
};

app.get('/', async (request, response) => {
    try {
        const data = await getApiData();
        
        let html = '';
        data.forEach((d) => {
            html += `
                <p>${d.title}</p>
                <p>${d.author}</p>
                <p>${d.publishedAt}</p>
                <a href="${d.url}">${d.url}</a>
                <hr/>
            `;
        });

        response.send(`
            <html>
            <body>
                <div id="wrapper">
                    ${html}
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error processing request:', error);
        response.status(500).send('Internal Server Error'); // 오류 발생 시 500 에러 응답
    }
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});