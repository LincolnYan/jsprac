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


