var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planet){
	console.log("",planet);
	el.innerHTML += planet + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
// 

function capiTalize(string){
	for (var i = 0; i < planets.length; i++) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};

var caps = planets.map(capiTalize);
console.log("caps", caps);


// Use the filter method to create a new array that contains planets with the letter 'e'
// 


var filtered = caps.filter(function(element,index,array){
	for (var i = 0; i < array.length; i++) {
		if (element.charAt(i).toLowerCase() === "e"){
			return element;
		}
	}
});
console.log("filtered", filtered );

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];



var sentence = words.reduce(function(previousValue, currentValue, index, array){
	return previousValue + " " + currentValue;
});
console.log(sentence);







