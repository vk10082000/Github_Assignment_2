//prime problem

let num=7;
let count=0;
for (let i=1; i<=num; i++){
if(num%i==0){
count++

} 
}
if(count==2){
console.log(number,"is prime number")
}else{
console.log(number, "is not a prime number");
}




//palindrome

let bag="";
let str="lalit";
for (let i=str.length-1; i>=0; i--){
  bag+=str[i];
}
if(str===bag){
console.log("Palindrome")
} else {
console.log("Not A Palindrome")
}