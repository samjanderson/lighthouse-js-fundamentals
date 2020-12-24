/*The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
At some point in your code, you may want to use some_array.push(some_value)*/

const range = (start, end, step) => {
  let list = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0 )) {
    return [];
  }
  else {
    for (let i = start; i <= end; i += step){
    list.push(i);
  }
}
return list;
}
