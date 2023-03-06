function getSum(a,b) {
if (a===b) {
return a;
} else if (a > b) {   
   max = a;
   min = b;
} else {
   max = b;
   min = a;
}
let sum = 0;
 for (let i = min; i <= max; i++) {
    sum += i;
 }
 return sum;
}

getSum(5, 3); // result: 8
getSum(-11, 3); // result: -8
getSum(0.2, 0.7); // result: 0.9 