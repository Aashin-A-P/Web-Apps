var x="Under Weight";//Global Variable
var y="Healthy Weight";
var z="Over Weight";
var l="Obesity";
function BMI()
{   
    var n=document.getElementById('name').value;//Local Variable
    var a=document.getElementById('age').value;
    var g=document.getElementById('gen').value;
    let h=document.getElementById('height').value;
    let w=document.getElementById('weight').value;
    document.getElementById('name1').innerHTML="Name: "+n;
    document.getElementById('age1').innerHTML="Age:"+a;
    document.getElementById('gen1').innerHTML="Gender: "+g;
    let h1=h/100;
    let BMI=w/(h1*h1);
    document.getElementById('bmi1').innerHTML="BMI: "+BMI;
    if (BMI<18.5)
    {
        document.getElementById('comm').innerHTML=x;
    }
    else if (BMI<25)
    {
        document.getElementById('comm').innerHTML=y;
    }
    else if (BMI<30)
    {
        document.getElementById('comm').innerHTML=z;
    }
    else
    {
        document.getElementById('comm').innerHTML=l;
    }
}