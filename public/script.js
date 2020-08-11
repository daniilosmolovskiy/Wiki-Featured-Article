const articleDom = document.querySelector('#article');

async function getArticle() {
  const response = await fetch('/api/article')
  const json = await response.json();
  const {imageSrc, text, articleLink} = json;
  
  displayImage(imageSrc);
  displayText(text);
  displayFullArticleLink(articleLink);
}

function displayImage(imageSrc) {
  const img = document.createElement("img");
  img.src = imageSrc;
  articleDom.append(img);
}

function displayText(text) {
  text.forEach(elem => {
    const text = document.createElement("p");
    text.innerText = elem;
    articleDom.append(text);
  })
}

function displayFullArticleLink(articleLink) {
  const link = document.createElement("a");
  link.href = `https://ru.wikipedia.org/${articleLink}`;
  link.text = "Full Article";
  articleDom.append(link);
}

getArticle()