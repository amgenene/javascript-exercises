const repeatString = function(m, n) {
console.log('Hi')
var str = '';
if (n < 0){
  return 'ERROR'
}
for(i = 0; i < n; i++){
  str += m
}
return str;
console.log(str);
}
repeatString('5', 3)
module.exports = repeatString
