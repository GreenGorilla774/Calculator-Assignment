

window.addEventListener("load", () => {
    var keys = document.querySelectorAll('.buttons');

    var operators = ['/', '*', '-', '+', '^', '+/-', '%'];
    
    var decimal = false;
    
    for(var i = 0; i < keys.length; i++){
        keys[i].onclick = function(e){
            var input = document.querySelector('.view');
            var inputValue = input.innerHTML;
            var buttonValue = this.innerHTML;
    
    
            if(buttonValue == 'C'){
                input.innerHTML = '';
                decimal = false;
            }
    
            else if(buttonValue == '='){
                var equation = inputValue;
                var lastChar = equation[equation.length - 1];
    
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*').replace(/%/g, '/1000');
                
                if(operators.indexOf(lastChar) > -1 || lastChar == '.') 
                equation = equation.replace(/.$/, '');
    
                if(equation)
                input.innerHTML = eval(equation);
                decimal = false;
    
            }
    
            else if(operators.indexOf(buttonValue) > -1){
                var lastChar = inputValue[inputValue.length - 1];
    
                if(inputValue != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += buttonValue;
    
                else if(inputValue != '' && buttonValue == '-')
                input.innerHTML += buttonValue;
    
                if(operators.indexOf(lastChar) > -1 && inputValue.length > 1){
                    input.innerHTML = inputValue.replace(/.$/, buttonValue);
                }
    
                decimal = false;
            }
    
            else if(buttonValue == '.'){
                if(!decimal){
                    input.innerHTML += buttonValue;
                    decimal = true;
                }
            }
    
    
            else{
                input.innerHTML += buttonValue;
            }
    
            e.preventDefault();
    
        }
    }

   
    
    document.onkeydown = function(event){
        var key_press = String.fromCharCode(event.keyCode);
        var key_code = event.keyCode;
        var input = document.querySelector('.view');
        var inputValue = input.innerHTML;
        var buttonValue = this.innerHTML;
        var lastChar = inputValue[inputValue.length - 1];
        var equation = inputValue;
    
        equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**').replace(/%/g, '/1000');
    
    
        if(key_press==1 || key_code == 97){
            document.querySelector('.view').innerHTML += '1';
        }
    
        if(key_press==2 || key_code == 98){
            document.querySelector('.view').innerHTML += '2';
        }
    
        if(key_press==3 || key_code == 99){
            document.querySelector('.view').innerHTML += '3';
        }
    
        if(key_press==4 || key_code == 100){
            document.querySelector('.view').innerHTML += '4';
        }
    
        if(key_press==5 || key_code == 101){
            document.querySelector('.view').innerHTML += '5';
        }
    
        if(key_press==6 && event.shiftKey == false || key_code == 102){
            document.querySelector('.view').innerHTML += '6';
        }
    
        if(key_press==7 || key_code == 103){
            document.querySelector('.view').innerHTML += '7';
        }
    
        if(key_press==8 && event.shiftKey == false || key_code == 104){
            document.querySelector('.view').innerHTML += '8';
        }
    
        if(key_press==9 || key_code == 105){
            document.querySelector('.view').innerHTML += '9';
        }
    
        if(key_press==0 || key_code == 96){
            document.querySelector('.view').innerHTML += '0';
        }
    
    
        
    
    
        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && 
        event.shiftKey) || (inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 107)){
            document.querySelector('.view').innerHTML += '+';
        }
    
        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 189) || (inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 109)){
            document.querySelector('.view').innerHTML += '-';
        }
    
        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && 
        event.shiftKey) || (inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 106)){
            document.querySelector('.view').innerHTML += 'x';
        }
    
        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || 
        (inputValue != '' && operators.indexOf(lastChar) == -1 &&key_code == 111)){
             document.querySelector('.view').innerHTML += '÷';
        }
    
        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && 
        event.shiftKey)){
            document.querySelector('.view').innerHTML += '^';
        }

        if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 53 && 
        event.shiftKey)){
            document.querySelector('.view').innerHTML += '%';
        }
      
      
       if((inputValue != '' && operators.indexOf(lastChar) == -1 && key_code == 190 ||  
        operators.indexOf(lastChar) == -1 && key_code == 110)){
            document.querySelector('.view').innerHTML += '.';
        }
    
        if(key_code==13 || key_code==187 && event.shiftKey == false){
            input.innerHTML = eval(equation);
    
            decimal = false;
        }
    
        if(key_code==8 || key_code==46){
            input.innerHTML = '';
            decimal = false;
        }
    
    
    
    }
});













