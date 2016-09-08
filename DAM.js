var totalGen = 19;
var totalMW = 0;

for(totalGen=1; totalGen<=19; totalGen++){
	
	if(totalGen<=4){  
  		if(totalGen%2==1){
  		console.log("Generator #"+totalGen+" is off.");
    	}else{
    		totalMW += 62;
      		console.log("Generator #"+totalGen+" is on, adding 62 MW, for a total of "+ totalMW +" MW!";
    	}
      
	}else{
  		if(totalGen%2==1){
  		console.log("Generator #"+totalGen+" is off.");
    	}else{
    		totalMW += 124;
    		console.log("Generator #"+totalGen+" is on, adding 124 MW, for a total of "+ totalMW +" MW!";
    	}

	}
	
 }
 
