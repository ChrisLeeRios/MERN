// 1 
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); //logs undefined 
// hello = 'world'


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
/*
function test(){
    var needle = 'magnet';
    console.log(needle);
}
*/ 
// should float to the top because it is a function

// test() // calls the function 



// 3
var brendan = 'super cool'; 
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan = 'super cool'; // stays at the top
// console.log(brendan); // skips the function because it was never called
/*
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
*/ 
// since the function is never called, it gets overlooked 


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken' // hoisted to the top
// console.log(food) // gets called so its going to log 'chicken'
/*
function eat(){ // hoisted up
    food = 'half-chicken'; // sets the new value of the food variable
    console.log(food); //its going to log half chicken 
    var food = 'gone'; // this sets the new value of food but never gets logged or leaves the function
}
*/
// eat() // its going to call the functioned up above and run it how the comments say



// 5
// mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean; 
// mean(); // its going to throw an error because at this point it does not recognize the variable as a function
// console.log(food); // would log chicken
/*
mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
*/
// mean now gets a function value 
// cosole.log(food) // would log chicken


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// var genre;
// console.log(genre); // should come back as undefined
// genre = "disco";
// rewind();
/*
function rewind() {
    genre = "rock"; // reasigned 
    console.log(genre); // logged as rock 
    var genre = "r&b"; 
    console.log(genre); // logged as r&b
}
*/
// console.log(genre) // logged as disco because the values in the function are within the function scope


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// san jose



// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// its gonna error out because it was assigned to a const and cant be changed
// if it was a let or var it would have been 
// { name: 'Chicago', students: 65, hiring: true }
// closed for now






