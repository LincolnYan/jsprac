var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true; 

// add properties and assign values
//There are 8 "Torpedoes". -> vehicle3
vehicle3["# of weapons"] = 8;
//There are 4 "Lasers". -> vehicle2
vehicle2["# of weapons"] = 4;
//There is 1 "Rear-Mounted Slingshot". -> vehicle1
vehicle1["# of weapons"] = 1;

/*
var vehicles = [vehicle1, vehicle2, vehicle3];

console.log(vehicle3.submersible);
*/
