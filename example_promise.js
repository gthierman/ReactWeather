// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
// getTempCallback("Philadelphia", function(err, temp){
//   if (err) {
//     console.log('error', err);
//   }else{
//     console.log('success', temp)
//   }
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   });
// }
//
// getTempPromise("Philadelphia").then(function(temp){
//   console.log("Promise success", temp)
// }, function(err){
//   console.log("Promise error", err)
// });


//Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else{
      reject("Both need to be numeros dude!")
    }
  });
}


addPromise(1,"g").then(function(temp){
  console.log("promise success", tmp)
}, function(err){
  console.log("Promise fail", err)
});

addPromise(1,2).then(function(temp){
  console.log("promise success", temp)
}, function(err){
  console.log("Promise fail", err)
});
