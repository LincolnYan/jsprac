function mystery(input) {
  var secret = 4;
  input += 2; //3+2=5 input==5
  function mystery2(multiplier) {
    multiplier *= input;//mutiplier *=5
    return secret * multiplier;//4*(multiplier*5),20*multiplier
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }      //20*6+bonus, 120+bonus
  return mystery4;
}

var hidden = mystery(3);
 // hidden = 20*muliplier;

var jumble = mystery3(hidden);
//  jumble = mystery3(20*multiplier)
//  jumble = 120 + bonus;

var result = jumble(2);
//  result = 120 + 2 =122;