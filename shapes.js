//Shape constructor, having a property called type.
function Shape(type){
	// this.type = type;
	if (this instanceof Shape){
		console.log(this);
		console.log(" This is an instanceof Shape");
    	this.type = type;
	}
	else {
		console.log("This is not an instanceof Shape");	
	   return new Shape(type)
	}
}

//Attach get_type() to console type of on object
Shape.prototype.get_type = function(){
	console.log(this.type);
}; 


//Set the prototype equal to a new Shape() for triangle, square and pentagon. 

Triangle.prototype = new Shape("triangle");
Square.prototype = new Shape("square");
Pentagon.prototype = new Shape("pentagon");

//create Triangle and call get_type() to get the type of newly created object.
var newTriangle = new Triangle(4,7,10);
newTriangle.constructor=Triangle;
console.log(newTriangle.constructor);
console.log(newTriangle);
newTriangle.get_type();

//create Square and call get_type() to get the type of newly created object.
var newSquare = new Square(10);
newSquare.constructor=Square;
console.log(newSquare.constructor);
console.log(newSquare);
newSquare.get_type();

//create Pentagon and call get_type() to get the type of newly created object.
var newPentagon = new Pentagon(5,5,5,3,3);
newPentagon.constructor=Pentagon;
console.log(newPentagon.constructor);
console.log(newPentagon);
newPentagon.get_type();


//Define Constructors for Triangle, Square and Pentagon.

function Triangle(side1,side2,side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

// Passing only 1 value as it is a square!!!  All sides should be equal length.
function Square(side){
	this.side1 = this.side2 = this.side3 = this.side4 = side;
}


//Create a Pentagon object, analogous to your other shapes. Your getType method should work without any additional work.
function Pentagon(side1, side2, side3, side4, side5){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}
