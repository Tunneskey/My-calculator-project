var opr= prompt('Please Enter operator you want to perform ');
var num1= parseInt(prompt('number 1: '));
var num2= parseInt(prompt('number 2: '));

if(opr == "+")
{
    console.log(num1 + num2)
}else if(opr == "-")
{
    console.log(num1 - num2)  
}else if(opr == "*")
{
    console.log(num1 * num2)  
}else if(opr == "/")
{
    console.log(num1 / num2)
}