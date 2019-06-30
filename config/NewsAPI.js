const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env['NEWS_API_KEY']);

newsapi.v2.topHeadlines({
  language: 'en',
  country: 'us'
}).then(response => {
  // console.log(response);
});

module.exports = { topHeadLines: newsapi.v2.topHeadlines }