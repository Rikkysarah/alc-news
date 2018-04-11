// function setup() {
//     var sourcesApi = 'https://newsapi.org/v2/sources?apiKey=80c8bc2d96c347cab62f73c7322bf490'
//     document.getElementById('click').
//         onclick = clickHandler;
//     function clickHandler() {
//         var city = document.getElementById('source').value;
//         console.log(city);
//         // var url = api + city + apiKey;
//         loadJSON(sourcesApi, getData);
//     }
// }

// function getData(data) {
//     console.log(data.sources[0].url)
//     var sources = data.sources
//     for (var i = 0; i < sources.length; i++) {
//         var newsapi = document.getElementById('source').
//             innerHTML += `<p>${sources[i].id}<a href="${sources[i].url}">${sources[i].url}</a>`
        
        

//     }
// }

// Fetching sources from the API and populating them in the select tag
// function newsFromSource(source) {
//     fetch(`https://newsapi.org/v2/${source}?apiKey=80c8bc2d96c347cab62f73c7322bf490`)
//       .then(response => response.json())
//       .then(results => {
//         document.getElementById("search_nav").innerHTML = `<option>Select news source... </option>` + results.sources.map(result => `<option value="${result.name}">${result.name}</option>`).join("");
//       });
//       console.log(response)
//   }
  
  