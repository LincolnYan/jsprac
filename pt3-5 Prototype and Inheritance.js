//lv3.5.1 prototype and Inheritance
String.protopype.countAll = function ( letter ){
	var letterCount = 0;
	for (var i = 0; i < this.length; i++ ) {
		if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
			letterCount++;
		}
	}
	return letterCount;
};

witch.countAll("I"); 

=============================================================  
// 5.2 - 5.3
Array.prototype.countCattle = function (kind) {     
	var numKind = 0;     
	for (var i = 0; i < this.length; i++) {         
		if ( this[i].type == kind) { 
		numKind++;         
		}     
	}     
	return numKind; 
};

alert( canyonCows.countCattle(calf) +
	   valleyCows.countCattle(bull) + 
	   forestCows.countCattle(cow));

=============================================================
//5.4 - 5.5
Object.prototype.noCalvesYet = function () {
	if (this.type == "cow" && this.hadCalf == null ) {
		return true;
	}else{
		return false;
	}
};

Array.prototype.countForBreeding = function() {
	var numToBreed = 0;
	for(var i = 0; i < this.length; i++){
		if(this[i].noCalvesYet()) {
			numToBreed ++;

		}
	}
	return numToBreed;
};

var numPriorityCows = canyonCows.countForBreeding() +
					  valleyCows.countForBreeding() +
					  forestCows.countForBreeding() +
					  badlandsCows.countForBreeding();

alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");

=============================================================
//5.6 Inheritance and Constructors
var shoe = {size: 6, gender: "women", construction: "slipper"};
var magicShoe = Object.create(shoe);
magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionRequired = 3;
/////////////////

function Shoe (shoeSize, shoeColor, forGender, constructStyle) {

	this.size = shoeSize;
	this.color = shoeColor;
	this.gender = forGender;
	this.construction = constructStyle;
}

Shoe.prototype = {
	putOn: function () { alert("Your " + this.construction + "'s" + "on!");},
	takeOff: function () { alert("Phew! Somebody's size " + this.size + "'s" +
									" are fragrant!");}
}

var beachShoe = new Shoe(10, "blue", "women", "flipflop");
beachShoe.putOn();

=============================================================
//5.7- Creation with Prototype I
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};
//5.8
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

post1.x = -2;
post1.y = 4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;

post1.sendRopeTo(post2);
post2.sendRopeTo(post1);


var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post10.x = -2;
post10.y = 3;
post10.postNum = 10;


post8.sendRopeTo(post10);
post10.sendRopeTo(post8);
post9.sendRopeTo(post10);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;

=============================================================
//5.9
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};
//5.10
function Fencepost (x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost){
    this.connectionsTo.push(connectedPost);
  }; 
}

Fencepost.prototype = { 
  var connectionsTo = [];
  sendRopeTo: function() {
    this.connectionsTo.push(connectedPost);
  };
}

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);
=======================================================
//5.11
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  
}

Fencepost.prototype = {
  var connectionsTo = [];
   sendRopeTo = function(connectedPost) {
    connectionsTo.push(connectedPost);
  };
  removeRope = function(removeTo) {
    var temp = [];
    for (var i = 0; i < connectionsTo.length; i++) {
      if (connectionsTo[i].postNum != removeTo) {
        temp.push(connectionsTo[i]);
      }
    }
    connectionsTo = temp;
  };
  movePost = function(x, y) {
    x = x;
    y = y;
  };
}





















































