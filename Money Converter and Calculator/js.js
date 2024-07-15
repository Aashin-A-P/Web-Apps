var l="Enter Valid Option";//Global variable function calc()
{
let a=document.getElementById('fn').value;//Local Variable let b=document.getElementById('sn').value;
let c=document.getElementById('opt').value; if (c==1)
{
document.getElementById("pid").innerHTML="Sum = " + (parseInt(a) + parseInt(b));
}
else if (c==2)
{
document.getElementById("pid").innerHTML="Difference = " + (parseInt(a) - parseInt(b));
}
else if (c==3)
{
document.getElementById("pid").innerHTML="Product = " + (parseInt(a) * parseInt(b));
 
}
else if (c==4)
{
document.getElementById("pid").innerHTML="Quotient = " + (parseInt(a) / parseInt(b));
}
else if (c==5)
{
document.getElementById("pid").innerHTML="Remainder= " + (parseInt(a) % parseInt(b));
}
else
{
document.getElementById("pid").innerHTML=l;
}
}
function monconv()
{
let x=document.getElementById('curr').value; let y=document.getElementById('curren').value; if (y=='USD')
{
document.getElementById("pid2").innerHTML=USD(x)+" INR";
}
else if (y=='KID')
{
document.getElementById("pid2").innerHTML=KID(x)+" INR";
}
else if (y=='EU')
{
document.getElementById("pid2").innerHTML=EU(x)+" INR";
}
else
{
document.getElementById("pid2").innerHTML=BP(x)+" INR";
}
}
function USD(a)
{
return a*81.87;
}
function KID(a)
{
return a*266.98;
}
function EU(a)
{
return a*89.66;
}
function BP(a)
{
return a*101.95;
 
}
function feedback()
{
var msg=confirm("Are you satisfied with our webpage? Click OK for 'yes'"); if (!msg)
{
prompt('Enter your Valuable Feedback:');
}
else{
alert('Thanks for visiting.')
}

}

