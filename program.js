//To check prime number or not  program

let num=25;

let count=0; 

for (let i=0; i<=num-1; i++)
{
	if(num%i==0)
	{
		count++;
	} 
}
if(count==1)
{
	console.log(num,"is a prime number");
}
else
{
	console.log(num,"is not a prime number");
}


//To check palindrome or not program


let arr="vamshi"; 

let bag="";

for (let i=0; i<arr.length-1; i++){
  bag+=arr[i];
}

if(arr===bag)
{
	console.log("Palindrome")
} 
else
{
	console.log("Not A Palindrome")
}