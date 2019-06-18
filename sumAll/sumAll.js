const sumAll = function(a,b) {
sum = 0
f = 9
if (typeof a != typeof f || typeof b != typeof f || a < 0 || b < 0 ){
  return 'ERROR';
}
if (a < b){
  for(i=a; i<=b;i++){
    sum+=i;
  }
}
else{
  for(i=b; i<=a;i++){
    sum+=i;
  }
}
return sum;
}
module.exports = sumAll
