//STEP 1
/*
let favMovies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out"];
console.log(favMovies[1]);
*/

//STEP 2
/*
let movies = new Array(5);
movies[0] = 'Back to the Future';
movies[1] = 'The Mummy';
movies[2] = 'Thor Ragnarock';
movies[3] = 'Into the Spiderverse';
movies[4] = 'Knives Out';
console.log(movies[0]);
*/


//STEP 3
/*
let movies = new Array(5);
movies[0] = 'Back to the Future';
movies[1] = 'The Mummy';
movies[2] = 'Thor Ragnarock';
movies[3] = 'Into the Spiderverse';
movies[4] = 'Knives Out';

movies.splice(2,0,"Star Wars");
console.log(movies);
*/


//STEP 4
/*
let movies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out"];
delete movies[0];
console.log(movies);             
*/


//STEP 5
/*
let movies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
for (let movie in movies) {
	console.log(movies[movie]);
}
*/


//STEP 6
/*
let movies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
for (let x of movies) {
	console.log(x);
}
*/

//STEP 7
/*
let movies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
for (let x of movies.sort()) {
	console.log(x);
}
*/


//STEP 8
/*
let movies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
let leastFavMovies = ['Cats','The Last Airbender',"Morbius"];

console.log('Movies I like: \n ');
for (let x of movies) {
	console.log(x);
}

console.log(' \nMovies I regret watching: \n ');
for (let i of leastFavMovies) {
	console.log(i);
}
*/


//STEP 9
/*
let favMovies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
let leastFavMovies = ['Cats','The Last Airbender',"Morbius"];

movies = favMovies.concat(leastFavMovies);
for (let i of movies.sort().reverse()) {
	console.log(i);
}
*/

//STEP 10
/*
let favMovies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
let leastFavMovies = ['Cats','The Last Airbender',"Morbius"];

movies = favMovies.concat(leastFavMovies);

console.log(movies.pop());
*/

//STEP 11
/*
let favMovies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
let leastFavMovies = ['Cats','The Last Airbender',"Morbius"];

movies = favMovies.concat(leastFavMovies);

console.log(movies.shift());
*/

//STEP 12
/*
let favMovies = ["Back to the Future","The Mummy","Thor Ragnarock","Into the Spiderverse","Knives Out","Booksmart","Legally Blonde"];
let leastFavMovies = ['Cats','The Last Airbender',"Morbius"];

movies = favMovies.concat(leastFavMovies);

movies.splice(7,3,'Scott Pilgrim','Mask of Zorro','Shrek 2');
console.log(movies);
*/

//STEP 13
/*
movies = [["Back to the Future", 1], ["The Mummy", 2], ["Legally Blonde", 3], ["Spiderman", 4], ["Star Wars", 5]];

movies.forEach(function (movies) {
    let movieTitles = movies.filter(function(names){
    return typeof names == "string";}); 
    console.log(movieTitles);
})
*/

//STEP 14
/*
let employees = ['Diana','Clark','Bruce','Kara','Jon'];
function showEmployees(){
    console.log('Employees: \n ');
    for (let i of employees){
	console.log(i);
    }
}
showEmployees(employees);
*/

//STEP 15
/*
let testData = [58,'','abcd',true,null,false,0];
let result = testData.filter(filterValues);

function filterValues(array){
	if(array !== false || array !== null || array !== 0 || array !== "") {
        return array;
   	}
}
console.log(result);
*/

//STEP 16
/*
let testArray = [22,97,37,43,12,5,2];

function randomNum(result){
	return result[Math.floor(Math.random()*result.length)];
}
console.log(randomNum(testArray));
*/

//STEP 17
/*
let testArray = [22,97,37,43,12,5,2];
largestNum(testArray);

function largestNum(array){
	array.sort(function(a, b){return b-a});
	console.log('Sorted array: ' + array);
	console.log('Largest Number: ' + array[0]);
}
*/

