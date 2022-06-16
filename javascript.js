let input = document.querySelector('.display');

function display(number){
    
    const a = document. createElement('a');
    a.textContent= number;
    a.classList.add('buttonClass');
    a.setAttribute('id', 'Num')
    input.appendChild(a); 
}

function reset(){
    let selectButtonClass = document.querySelectorAll('.buttonClass');
    for (each of selectButtonClass){
        each.parentElement.removeChild(each);
    }   
}

let operationNo = 0;

function store(operator){
    selectnumber = document.querySelector('.display');
    console.log(selectnumber.textContent);
    number1 = selectnumber.textContent;
    
    if (operator == 'add'){operationNo = 1;}
    else if (operator == 'multiply'){operationNo = 2;}
    else if (operator == 'divide'){operationNo = 3;}
    else if (operator == 'subtract'){operationNo = 4;}
    else{operationNO = 0;}
    reset();
    
    
}

function equals(){
    
    selectnumber2 = document.querySelector('.display');
    console.log(selectnumber2.textContent);
    number2 = selectnumber2.textContent;
    console.log(operationNo);
    if (operationNo == 1){
    answer = Number(number1) + Number(number2);
    console.log(answer)
    }
    else if (operationNo == 2){
    answer = Number(number1) * Number(number2);   
    console.log(answer)
    }
    else if (operationNo == 3){
    answer = Number(number1) / Number(number2);   
    console.log(answer)
    }
    else if (operationNo == 4){
    answer = Number(number1) - Number(number2);   
    console.log(answer)
    }
    else if (operationNo == 0){
    answer = 0;   
    console.log(answer)
    }
    reset();
    const a = document. createElement('a');
    a.textContent= answer;
    a.classList.add('buttonClass');
    a.setAttribute('id', 'Num')
    input.appendChild(a); 
    operationNo = 0;
}

