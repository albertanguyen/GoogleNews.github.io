const TechNewshtml = () => document.getElementById("TechnewsList");
const MusicNewshtml = () => document.getElementById("MusicNews");

const renderTechNewsFeed = newsArticles => {
  let html = "";
  // console.log(newsArticles.length)
  
  newsArticles.map(
    ({ title, description, urlToImage, publishedAt, url, content }) => {
      const htmlnode = `
			<h1 style="font-family: Oswald; color:white;">${title}</h1>
			<img src="${urlToImage}" style="display: inline-block; height: auto; width: 80% ">
      <h3>${description}</h3> <h5>${moment(publishedAt).startOf('day').fromNow()}</h5>
            <p>${content}</p>
            <p><a href="${url}">Jump right here for more...</a></p>`;
      const jsnode = (html += htmlnode);
      TechNewshtml().innerHTML = jsnode;
    }
  );
};

const getTechNewsData = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=techradar&from=2019-05-20&to=2019-05-22&sortBy=popularity&apiKey=c8b325b75f2a418f902770811641994c";
  const req = new Request(url);
  const res = await fetch(req);
  const { articles } = await res.json();
  renderTechNewsFeed(articles);
};

// const renderMusicNewsFeed = newsArticles => {
//     let html = "";
//     newsArticles.map(
//       ({
//         title,
//         urlToImage,
//         publishedAt,
//         url,
//         author,
//         content,
//       }) => {
//         const node = (html += `
//             <li class="jumbotron">
// 			<img src="${urlToImage}" style="display: inline-block; height: auto; width: 80% ">
//         	</li>
//     `);
//         MusicNewshtml().innerHTML = node;
//       }
//     );
// };

// const getMusicNewsData = async () => {
//   const url =
//     "https://newsapi.org/v2/top-headlines?sources=techradar&from=2019-05-20&to=2019-05-22&sortBy=popularity&apiKey=c8b325b75f2a418f902770811641994c";
//   const req = new Request(url);
//   const res = await fetch(req);
//   const { articles } = await res.json();
//   renderMusicNewsFeed(articles);
// };

getTechNewsData();
//getMusicNewsData();

// var settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://www.techradar.com/news",
//   method: "GET",
//   headers: {
//     "User-Agent": "PostmanRuntime/7.13.0",
//     Accept: "*/*",
//     "Cache-Control": "no-cache",
//     "Postman-Token":
//       "7eb83f0a-06a9-4a71-923a-99ee07a6cc22,eac8a239-a6a7-4393-b5d4-d99b4094d86c",
//     Host: "www.techradar.com",
//     cookie: "FTR_Country_Code=VN",
//     "accept-encoding": "gzip, deflate",
//     Connection: "keep-alive",
//     "cache-control": "no-cache",
//   },
// };

// $.ajax(settings).done(function(response) {
//   console.log(response);
// });
