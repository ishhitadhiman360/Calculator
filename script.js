// extract all buttons in buttons array
var buttons= document.getElementsByClassName("buttons");
// extract display value 
var display= document.getElementById("display");
// initialising variables 
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0; i< buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {

        // get value of button
        var value= this.getAttribute('data-value');

        //if value is reset
        if(value == 'reset')
        {
            display.innerText=null;
        }
        //check if button clicked is an operator
        else if(value== '+' || value == '-' || value == '*' || value == '/' || value == '%')
        {
            operator = value;
            //also extract operand1 from display
            operand1 = parseFloat(display.innerText);
            console.log("opera 1 = ",operand1);
            display.innerText=null;
            
        }
        else if(value == '=')
        {
            if(operator != null)
            {
                //extract operand2 from display
                 operand2 = parseFloat(display.innerText);
                 if(operand2 == '0' && operator =='/')// if operation is division but denominator is zero 
                 {
                    display.innerText= "Invalid";
                 }
                //use eval to get result
                var result = eval (operand1 + " " + operator + " " + operand2);
                //show result on display
                display.innerText=result;
            }
            else
            {
                display.innerText ="Error";
            }
        }
        else if(value == "sign")
        {
            //change sign of value in display
            display.innerText= eval(parseFloat(display.innerText)*(-1));
        }
        else if(value == '.')
        {
            //if we already have something in display and there is no repeatition of '.'
            if(display.innerText.length && !display.innerText.includes('.'))
            {
                display.innerText += value;
            }
        }
        else 
        {
            //a number is clicked
            display.innerText += value;
        }
    });
}
