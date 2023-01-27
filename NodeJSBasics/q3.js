// request package (pre-requisite basic overview on request module and eventEmitter)
// Use request package to download google.com homepage and save it into a file using fs package.
// Use request package and event it emits to stream a file from web as a file in filesystem.

const request = require('request');
const fs = require('fs');

const url = 'https://www.google.com';
request(url, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('Status Code: ', response && response.statusCode);
        fs.writeFile('google.html', body, (err) => {
            if (err) {
                console.log('Error: ', err);
            } else {
                console.log('File saved successfully');
            }
        });
    }
});

// Event to stream a file from web as a file in filesystem
const file = fs.createWriteStream('google.html');
request(url).pipe(file);
