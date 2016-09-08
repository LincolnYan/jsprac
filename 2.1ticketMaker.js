function ticMaker(transport){
	return function(name){
		alert("here is your " + transport + " ticket. " + name +" gets it.");
	}
}

var getSubTicket = ticMaker ("sub");
var getShipTicket = ticMaker("Ship");
var getBirdTicket = ticMaker("bird");

getSubTicket("Bob"); // "here is your sub ticket. Bob gets it."
getShipTicket("Jane"); //"here is your Ship ticket. Jane gets it."
getBirdTicket("lave"); //"here is your bird ticket. lave gets it."

