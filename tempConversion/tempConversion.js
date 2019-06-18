const ftoc = function(ftemp) {
  var temp = ((ftemp - 32) * 5/9);
  if (temp % 1 != 0){
    return temp.toFixed(1);
  }
  else {
    return temp.toFixed(0);
  }
}

const ctof = function(ctemp) {
  var temp = ((ctemp  * 9/5) + 32);
  if (temp % 1 != 0){
    return temp.toFixed(1);
  }
  else {
    return temp.toFixed(0);
  }
}
console.log(ctof(-10));
module.exports = {
  ftoc,
  ctof
}
