function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {

    let shooter = function() { // create a shooter function,
      alert( i )
      ; // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();
console.log(army[0])
console.log(army.length)

function alert(arg) {
  console.log(arg)
}