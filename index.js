const express = require('express');

const getArticle = require('./getArticle');

const app = express();

app.use(express.static('public'))

app.get('/api/article', async (req, res) => {
  const fullArticle = await getArticle();
  res.json(fullArticle);
})

const port = process.env.PORT || 4242;

app.listen(4242, () => {
  console.log(`server is running on a port ${port}`)
});