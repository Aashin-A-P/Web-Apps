var unarray=[]; var pwarray=[]; function save()
{
var fn=document.getElementById('fn').value; var ln=document.getElementById('ln').value; var em=document.getElementById('em').value; var un=document.getElementById('un').value; var pw=document.getElementById('pw').value; var a=validateUsername(un);
var b=validatePassword(pw); if (a && b)
{
unarray.push(un); pwarray.push(pw); console.log(unarray); console.log(pwarray);
document.getElementById('fn').value=''; document.getElementById('ln').value=''; document.getElementById('em').value=''; document.getElementById('un').value=''; document.getElementById('pw').value='';
}

}
function validateUsername(username) { var isValid = true;
// Check for minimum length 
if (username.length < 4) {
isValid = false;
alert("Username should be at least 4 characters long.");
}

// Check for maximum length 
if (username.length > 20) {
isValid = false;
alert("Username should not exceed 20 characters.");
 
}

// Check for valid characters (only letters, numbers, and underscores allowed) 
if (!/^[a-zA-Z0-9_]+$/.test(username)) {
isValid = false;
alert("Username should only contain letters, numbers, and underscores.");
}
return isValid;
}
function validatePassword(password) { var isValid = true;
// Check for minimum length 
if (password.length < 8) {
isValid = false;
alert("Password should be at least 8 characters long.");
}

// Check for at least one uppercase letter 
if (!/[A-Z]/.test(password)) {
isValid = false;
alert("Password should contain at least one uppercase letter.");
}

// Check for at least one lowercase letter 
if (!/[a-z]/.test(password)) {
isValid = false;
alert("Password should contain at least one lowercase letter.");
}

// Check for at least one digit 
if (!/\d/.test(password)) {
isValid = false;
alert("Password should contain at least one digit.");
}

// Check for at least one special character 
if (!/[!@#$%^&*]/.test(password)) {
isValid = false;
alert("Password should contain at least one special character (!@#$%^&*).");
}
return isValid;
}
function check()
{
console.log(unarray); console.log(pwarray);

var un=document.getElementById('un1').value; var pw=document.getElementById('pw1').value; if (unarray.includes(un))
 
{
var a=unarray.indexOf(un); if (pwarray[a]===pw)
{
alert('Login Successful'); document.getElementById('un1').value=''; document.getElementById('pw1').value=''; window.location.href='aashin.html';
}
}
}
function change()
{
document.getElementById('l').classList.toggle('z'); document.getElementById('s').classList.toggle('z');
}
