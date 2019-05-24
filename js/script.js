const TechNewshtml = () => document.getElementById("TechnewsList");
const BusinessNewshtml = () => document.getElementById("BusinessNews");
const NumArticleshtml = () => document.getElementById('NumberArticles')

const getTechNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=techradar&from=2019-05-20&to=2019-05-22&sortBy=popularity&apiKey=c8b325b75f2a418f902770811641994c";
  const req = new Request(url);
  const res = await fetch(req);
  const { articles } = await res.json();
  renderTechNewsFeed(articles);
};

const getBusinessNews = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?domains=businessinsider.com&language=en&from=2019-05-22&to=2019-05-22&apiKey=c8b325b75f2a418f902770811641994c";
  const req = new Request(url);
  const res = await fetch(req);
  const { articles } = await res.json();
  renderBusinessNewsFeed(articles);
};


const renderTechNewsFeed = newsArticles => {
  let html = "";
  // console.log(newsArticles.length) 
  newsArticles.map( (element, idx) => {
          const htmlnode = `
			<h1 style="font-family: Oswald; color:white;">${element.title}</h1>
			<img src="${element.urlToImage}" style="display: inline-block; height: auto; width: 80% ">
      <h3>${element.description}</h3> <h5>${moment(element.publishedAt).startOf("day").fromNow()}</h5>
            <p>${element.content}</p>
            <p><a href="${element.url}">Jump right here for more...</a></p>`;
          const jsnode = html += htmlnode;
          TechNewshtml().innerHTML = jsnode;      
  }
  );
  NumArticles(newsArticles);

};

const renderBusinessNewsFeed = newsArticles => {
  let html = "";
  // console.log(newsArticles.length)
  newsArticles.map((element, idx) => {
    const htmlnode = `
      <div class="carousel-item active">
      <div class="jumbotron">                       
			<img src="${element.urlToImage}" style="height: auto; width: 80% ">
      </div>
      </div>
            `;
    const jsnode = (html += htmlnode);
    BusinessNewshtml().innerHTML = jsnode;
  });
  // NumArticles(newsArticles);
};


const NumArticles = newsArticles => {
  NumArticleshtml().innerHTML = `Currently: ${newsArticles.length} articles`;
}; 

const FeedNews = (shortNewsList, addNewsList) => addNewsList.forEach(element => shortNewsList.push(element))

getTechNews();

      // <div class="carousel-item active">
      // <div class="jumbotron">                       
			// <h1 style="font-family: Oswald; color:white;">${element.title}</h1>
			// <img src="${element.urlToImage}" style="display: inline-block; height: auto; width: 80% ">
      // <h3>${element.description}</h3> <h5>${moment(element.publishedAt).startOf("day").fromNow()}</h5>
      // <p>${element.content}</p>
      // <p><a href="${element.url}">Jump right here for more...</a></p>
      // </div>
      // </div>
