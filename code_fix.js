//prime problem

let num=7;
for (let i=0; i<=num-1; i++){
if(num%i==0){
console.log("Prime Number");
} else {
console.log("Not A Prime Number");
}
}




//palindrome

let bag="";
let arr="lalit";
for (let i=0; i<=arr.length-1; i++){
  bag+=arr[i];
}
if(arr===bag){
console.log("Palindrome")
} else {
console.log("Not A Palindrome")
}