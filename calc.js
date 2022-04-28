
let x=document.getElementById("result")
function display(num)
{
	x.value+=num;
}
function calculate()
{
x.value=eval(x.value);
}
function Del()
{
x.value=x.value.substring(0,x.value.length-1);
}
function Clr()
{
x.value="0";
}
function On()
{
x.value=" ";
}



