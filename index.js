//fetch('http://jsonplaceholder.typicode.com/posts')
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})


//const fs = require('fs')

//fs.writeFile('/result/posts.json', JSON.stringify(fetch()), (err) => {
//    if (err) throw err;
 //   console.log('File created successfully');
//})



//obj = JSON.parse(data); //now its an object
json = JSON.stringify(json); //convert it back to json
fs.writeFile('posts.json', json, 'utf8', function(err) {
    console.log(err); // if there is an error
});