//  var url = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=80c8bc2d96c347cab62f73c7322bf490'

var api = 'https://newsapi.org/v2/top-headlines?country='

var apiKey = '&apiKey=80c8bc2d96c347cab62f73c7322bf490';

function setup() {
    document.getElementById('submit').
        onclick = clickHandler;
    function clickHandler() {
        var city = document.getElementById('city').value;
        console.log(city);
        var url = api + city + apiKey;
        loadJSON(url, gotData);
    }
}

function gotData(data) {
    //console.log(data)
    var articles = data.articles
    for (var i = 0; i < articles.length; i++) {
        var newsapi = document.getElementById('headlines').
        innerHTML += `<p>${articles[i].source.name} </p><p>${articles[i].title}</p><a href="${articles[i].url}">${articles[i].url}`
        console.log(articles[i].source.name)
        console.log(articles[i].title)   

    }
}
setup();

function settup() {
    var sourcesApi = 'https://newsapi.org/v2/sources?apiKey=80c8bc2d96c347cab62f73c7322bf490'
    document.getElementById('click').
        onclick = clickHandler;
    function clickHandler() {
         var city = document.getElementById('source').value;
        //console.log(city);
        // var url = api + city + apiKey;
        loadJSON(sourcesApi, getData);
    }
}

function getData(data) {
    console.log(data)
    var sources = data.sources
    for (var i = 0; i < sources.length; i++) {
        var newsapi = document.getElementById('news').
        innerHTML += `<p>${sources[i].name}
        <a href="${sources[i].url}">${sources[i].url}</a>`
        // console.log(sources[i].url)
        // console.log(sources[i].name)
        

    }
}
settup()