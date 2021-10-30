function comp(array1, array2){
  if (!(array1 && array2)) return false; 
  if (array1.length !== array2.length) return false;

  let sorter = (a, b) => a - b; 

  array1.sort( sorter ); 
  array2.sort( sorter )
  
  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i] ** 2 === array2[i]))
      return false
  }
  return true;
}

console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 231, 14641, 20736, 361, 25921, 361, 20736, 361 ]));