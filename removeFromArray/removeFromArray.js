const removeFromArray = function() {
  a = arguments;
  b = arguments[0];
  len = b.length;
  for (i =1; i < arguments.length; i++){
    console.log();
    if(a[i] <= len || b.includes(a[i])){
      console.log(a[i]);
      b.splice(b.indexOf(a[i]),1);
      // b.splice(b.indexOf(a[i],1));
    }
  }
  return b;

}
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
module.exports = removeFromArray
