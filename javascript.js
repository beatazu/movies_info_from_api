let usermovie; 

const getFilm = function (searchText) {
	let request = new XMLHttpRequest();
	request.open('GET',`http://www.omdbapi.com/?t=${searchText}&apikey=384c433a`, false);
	request.send(null);

	console.log(request.responseText);

	let jsonObject = JSON.parse(request.responseText);
	return jsonObject;
}



const getPoster = function(searchText){
    let request = new XMLHttpRequest();

	request.open('GET',`http://img.omdbapi.com/?t=${searchText}&apikey=384c433a`, false);
	request.send(null);

	console.log(request.responseText);

	let jsonObject = JSON.parse(request.responseText);
	return jsonObject;
    
}

const button = document.getElementById('button');

const usertitle = document.getElementsByClassName('title')[0];
const usersynopsis = document.getElementsByClassName('synopsis')[0];
const userposter = document.getElementsByClassName('poster')[0];




button.addEventListener('click', function(event) {
    
    usermovie = document.getElementById('title').value;
	
	let a = getFilm(usermovie);
//	console.log(a.Title);
//  console.log(a.Plot);
    
//    usertitle.innerHTML = ('> >   ' + a.Title +'   < <');
//    usertitle.innerHTML = ('   ' + a.Title +'   ');
    usertitle.innerHTML = (a.Title);
    usersynopsis.innerHTML = (a.Plot);
    
    if (a.Title == null) {
        usertitle.innerHTML = (`There is no such a film as ${a.Title}`);    
    } else {
         usertitle.innerHTML = (a.Title);    
    }
    
    if (a.Plot == null) {
        usersynopsis.innerHTML = ('no plot to display');    
    } else {
        usersynopsis.innerHTML = (a.Plot);    
   
    }
            
    
    if (a.Poster == null) {
        userposter.innerHTML = ('no poster to ');    
    } else {
        userposter.innerHTML = (`<img src="${a.Poster}" alt="${a.Title} poster" >`);    
    }
       
 
});


let formElement = document.getElementById('form');

formElement.addEventListener('submit', (e) =>{
	console.log('gfghf');
	e.preventDefault();
});
