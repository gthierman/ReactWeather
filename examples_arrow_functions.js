var names = ['Geoff', 'John', 'Steve'];

names.forEach(function(name){
  console.log('for Each', name)
});

names.forEach((name) => {
  console.log("arrow Func", name)
});

function add(a, b) {
  return a+b;
}

console.log(add(1,3))
console.log(add(9,3 ))
