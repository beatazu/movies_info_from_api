const getFilm = function (searchText) {
	let request = new XMLHttpRequest();
	request.open('GET',`http://www.omdbapi.com/?t=${searchText}&apikey=384c433a`, false);
	request.send(null);
	let jsonObject = JSON.parse(request.responseText);
	return jsonObject;
}

const button = document.getElementById('button');
const userTitle = document.getElementsByClassName('title')[0];
const userSynopsis = document.getElementsByClassName('synopsis')[0];
const userPoster = document.getElementsByClassName('poster')[0];

button.addEventListener('click', function(event) {
    
    let userMovie = document.getElementById('title').value;
	
	let filmData = getFilm(userMovie);
    
    if (filmData.Title == null) {
        userTitle.innerHTML = `There is no such a film as ${filmData.Title}`;    
    } else {
        userTitle.innerHTML = filmData.Title;    
    }
    
    if (filmData.Plot == null || filmData.Plot == 'N/A') {
        userSynopsis.innerHTML = 'no plot to display';    
    } else {
        userSynopsis.innerHTML = filmData.Plot;    
    }
            

    if (filmData.Poster == null || filmData.Poster == 'N/A') {
        userPoster.innerHTML = 'no poster to display';    
    } else {
        userPoster.innerHTML = `<img src="${filmData.Poster}" alt="${filmData.Title} poster" >`;    
    }
});


let formElement = document.getElementById('form');

formElement.addEventListener('submit', (e) =>{
	e.preventDefault();
});
