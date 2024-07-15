function prime(event)
{	event.preventDefault(); var isprime=true;
 
var a=document.getElementById('no').value; if (a<=1)
{
isprime=false;
}
for(let i=2; i<=Math.sqrt(a);i++)
{
if (a%i===0)
{
isprime=false; break;
}
}
if (isprime)
{
document.getElementById('e').innerHTML="Prime Number";
}
else{
document.getElementById('e').innerHTML="Composite Number";
}

}
function conc(event)
{	event.preventDefault();
var a=document.getElementById('fn').value; var b=document.getElementById('ln').value;
document.getElementById('a').innerHTML='Your full name is '+a+' '+b;
}
function dob(event)
{
event.preventDefault();
const dob = new Date(document.getElementById('date').value); const currentDate = new Date();
const diff = currentDate - dob;
const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); document.getElementById('b').innerHTML="Your age is "+age;
}
function dtime(event)
{
event.preventDefault();
var a=document.getElementById('time').value; document.getElementById('c').innerHTML="The time was:"+a;
}
function dfile(event)
{
event.preventDefault();
var f=document.getElementById('myfile').value; document.getElementById('d').innerHTML="<img src = \""+f+"\" alt = \"image\">";
}
function change(event)
{
event.preventDefault();
 
var c=document.getElementById('favcolor').value; document.getElementById('ap').style.backgroundColor=c;
}
function armstrong(event)
{
event.preventDefault();
var num=document.getElementById('no').value; var strNum = num.toString();
var power = strNum.length; var sum = 0;
for (var i = 0; i < strNum.length; i++)
{
var digit = parseInt(strNum[i]); sum += Math.pow(digit, power);
}
if (sum === parseInt(num))
{
document.getElementById('f').innerHTML="Armstrong Number";
}
else{
document.getElementById('f').innerHTML="Not Armstrong Number";
}
}
function sumof(event)
{
event.preventDefault(); var sum = 0;
var num=parseInt(document.getElementById('no').value);

while (num > 0) {
var digit = num % 10; // Get the last digit sum += digit;
num = parseInt(num / 10); // Remove the last digit
}
document.getElementById('g').innerHTML=`The sum of digits is ${sum} `;
}
function reverse(event)
{
event.preventDefault();
var num=document.getElementById('no').value; var reversed = 0;
while (num !== 0) {
var digit = num % 10; // Get the last digit reversed = (reversed * 10) + digit;
num = Math.floor(num / 10); // Remove the last digit
}
document.getElementById('h').innerHTML="The reversed number is "+reversed;
}
function palindrome(event)
{
event.preventDefault();
var input=document.getElementById('no').value;
 
var str = String(input);
var reversedStr = str.split('').reverse().join(''); if (input==reversedStr)
{
document.getElementById('i').innerHTML="Palindrome Number";
}
else{
document.getElementById('i').innerHTML="Not a Palindrome Number";
}
}
function factorial(event)
{
event.preventDefault(); num=document.getElementById('no').value; if (num === 0 || num === 1)
{
return 1;
}
else {
var result = 1;
for (var i = 2; i <= num; i++) { result *= i;
}
}
document.getElementById('j').innerHTML="Factorial of number is "+result;
}
