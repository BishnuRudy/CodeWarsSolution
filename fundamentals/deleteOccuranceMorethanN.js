function deleteNth(arr,n){
  let onlyKeep = [];
  let numbers = {};
  
  if (arr.length > 0)
    arr.map(elem => {
      if (!numbers.hasOwnProperty(elem)) numbers[elem] = 0
    }); 
  else return onlyKeep;

  for (let elem of arr) {
    let current = String(elem);
    numbers[current] += 1;
    if (numbers[current] <= n) onlyKeep.push(elem)
  }

  return onlyKeep;
}

console.log(deleteNth([1,2,3,1,1,1,1],3))