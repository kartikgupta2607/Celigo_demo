// check packages which shorten a url. (eg. bitly, rebrandly). Write a UrlShortner, which takes as input an array/file of URLs and saves a CSV of original and new shortened url
// Package to shorten URL

const shortener = require("node-url-shortener");
const fs = require("fs");

urls = [
    "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
]
let shortenedUrls = {};
function shorten(url, callback){
    shortener.short(url, (err, shortenedUrl) => {
        callback(shortenedUrl);
});
}

urls.forEach(function(url){shorten(url, function(shortenedUrl){
    console.log("Got Url: ", shortenedUrl);
})});

console.log("Hello");

// let prom = new Promise(function(resolve, reject)  {
//     urls.forEach(function(url){shorten(url, function(shortenedUrl){
//     shortenedUrls[url] = shortenedUrl;
//     // console.log(`Shortened URLs Length: ${Object.keys(shortenedUrls).length} and URLs Length: ${urls.length}`);
//     })});

//     // Find number of elements in an object
//     console.log(Object.keys(shortenedUrls).length);
//     if(Object.keys(shortenedUrls).length === urls.length){
//         console.log("All URLs shortened");
//         resolve(shortenedUrls);
//     }
// });

// Log the shortened URLs after promise is resolved
// prom.then((response) => {
//     console.log("Shortened URLs: ", shortenedUrls);
//     console.log(shortenedUrls);
// });



// // Shorten all the URLs in the array and save them in a CSV file with original and shortened URL in each row


// // async function shorten(){
// //     urls.forEach(url => {
// //     let prom = new Promise(function(resolve, reject){
        
// //         shortener.short(url, function(err, shortenedUrl){
// //         if(shortenedUrl != 'undefined'){
// //             console.log(shortenedUrl);
// //             resolve(shortenedUrl);
// //         }
// //         else {
// //             console.log("ERROR");
// //             reject("Error");
// //         }
// //         });
// //     });
// //         // prom.then((shortenedUrl) => {
// //         // console.log("Shortened URL: ", shortenedUrl);
// //     shortenedUrls[url] = await prom;
// //     });
// // };
// url = urls[0];

// let shorten = async() => {
//     let temp = "";
// const shortenedUrls = {};
// const url = "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg"

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });
//   shortener.short(url, (err, shortenedUrl) => {
//     temp = shortenedUrl;
//      console.log('Output',shortenedUrl);
//     // console.log("GHSVH",shortenedUrls);
//     shortenedUrls[url] = shortenedUrl;
// }).then(shortenedUrl){

// }
//     let surl = new Promise((res, rej) => {
//         res(shortener.short(url, (err, shortenedUrl) => {
//             temp = shortenedUrl;
//              console.log('Output',shortenedUrl);
//             // console.log("GHSVH",shortenedUrls);
//             shortenedUrls[url] = shortenedUrl;
//         }))
//         //res(temp);
//     });
//     console.log('Before')
//     let newUrl = await surl;
//     console.log('Mid')
//     console.log("Fetched URL");
//     let promise1R = await promise1;
//     console.log('After')
//     //newUrl.then()
//     console.log(newUrl);
//     setTimeout(function(){console.log('SHortened Url',JSON.stringify(shortenedUrls))},2000);
//     console.log(shortenedUrls);
// }
// shorten();
// console.log("HELLO");

// shorten().then((shortenedUrls) => {
//     console.log(shortenedUrls);
// });
// var shortUrl = require("node-url-shortener");
// shortUrl.short("https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg", function (err, url) {
//     console.log(url);
// });

// const bitly = require("bitly");
// const bitlyClient = bitly( "c0d3p0rtal");

// const shortenUrls = async () => {
//     const shortenedUrls = await Promise.all(
//         urls.map(async (url) => {
//             let response = await shortener.short(url, function(err, shortenedUrl){
//                 return shortenedUrl;
//             });
//             return response;
//         })
//     );
//     return shortenedUrls;
// }

// shortenUrls().then((shortenedUrls) => {
//     console.log(shortenedUrls);
//     // fs.writeFileSync("shortenedUrls.csv", shortenedUrls);
// }
// );

