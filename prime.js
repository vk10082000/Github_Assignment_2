let num=7;
letr count=0;
for(let i=2;i<Math.sqrt(num);i++)
{

if(num%i==0)
{
count++;
}
}
if(count==0)
{
console.log(num,"is a Prime number");
}else
{
console.log(num,"is Not Prime number");
}