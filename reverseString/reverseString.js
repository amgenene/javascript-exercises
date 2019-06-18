const reverseString = function(a) {
  empty_str = ''
  for (i=a.length-1; i>=0; i--){
    empty_str += a[i];
  }
  return empty_str;
console.log(empty_str);
}
reverseString('hello')
module.exports = reverseString
