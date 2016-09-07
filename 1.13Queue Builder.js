var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, queue){
//Your loop parameters are very important. Consider what might happen if your queue begins to shrink at the same time that a loop condition checks the length of the queue’s array? You also wouldn’t want to hard code the length as a number, since you wouldn’t be able to reuse your function on other queues with different lengths. Think of a storage solution prior to the loop.
	var length = queue.length;
	for (var i = 0; i < length; i++) {
		input = queue.shift()(input);
	}
	return input;
};

alert(applyAndEmpty(start, puzzlers));
 
