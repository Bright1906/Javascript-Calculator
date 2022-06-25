var opr = prompt("Operator: ")
var num1 = parseInt(prompt("Number 1: "))
var num2 = parseInt(prompt("Number 2: "))
var num3 = parseInt(prompt("Number 3: "))
var num4 = parseInt(prompt("Number 4: "))
var num5 = parseInt(prompt("Number 5: "))

if(opr == "+")
{
    console.log(num1 + num2)
} else if(opr == "-")
{
    console.log(num1 - num2)
} else if(opr == "*")
{
    console.log(num1 * num2)
} else if(opr == "/")
{
    console.log(num1 / num2)
}