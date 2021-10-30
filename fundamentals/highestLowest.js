function highAndLow(numbers){
  
 let numberArr = numbers.split(/\s+/).map(elem => parseInt(elem));
   let highest = numberArr[0];
    let lowest = numberArr[0];
  console.log(numberArr)
  numberArr.map(elem => {
    if (elem > highest)
      highest = elem;
    if (elem < lowest)
      lowest = elem;
  })

  return highest+" "+lowest;
}