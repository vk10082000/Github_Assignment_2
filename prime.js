let num=13;
let count=0;
for (let i=2; i<num/2; i++)
{
if(num%i==0){
count++;
}
}
 if (count==0)
{ console.log(num, "is a Prime number")
}
else {
console.log(num, "is not a Prime number")
}
