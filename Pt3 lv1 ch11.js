function adventureSelector(userChoice) {
  	if(userChoice == 1){
  		return function() {
  			alert("You select the Vines of Doom!");
  		};
  	}else if(userChoice == 2) {
  		return function (){
  			alert("Looks like you want the Lake of Despair!");
  		};
  	}else if (userChoice == 3) {
  		return function(){
  			alert("The Caves of Catastrophe!");
  		};
  	}
}
