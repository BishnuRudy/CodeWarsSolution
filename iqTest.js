function iqTest(numbers){
  let odd = [];
  let even = [];

  let allNumbers = numbers.split(/\s+/).map( (value) => {
    (value % 2) === 0 ? even.push(value) : odd.push(value);
    return value;
  } );

  if (odd.length < even.length) return odd.length == 1 ? allNumbers.indexOf(odd[0]) + 1 : null;
  return even.length == 1 ? allNumbers.indexOf(even[0]) + 1: null
}

let result = iqTest("1 2 1 1");
console.log(result);
