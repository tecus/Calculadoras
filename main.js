const display = document.getElementById('display')
const num1 = document.getElementById('num1')
const operando = document.getElementById('operando')
const boton = document.querySelector('.grid-container')
const limpiar = document.getElementById('limpiar')
const igual = document.getElementById('igual')

window.addEventListener('DOMContentLoaded', ()=>{
    display.value=''
})

let guardar;
boton.addEventListener('click',(e)=>{
    let num1Parse = parseFloat(num1.value)
    if(isNaN(num1Parse)){
        return
    }
    if(e.target.id=='suma'){
        operando.textContent="+" 
        guardar = num1Parse
        num1.value=''
    }else if(e.target.id=='rest'){
        operando.textContent="-"
        guardar = num1Parse
        num1.value=''
    }else if(e.target.id=='multi'){
        operando.textContent="*"
        guardar = num1Parse
        num1.value=''
    }else if(e.target.id=='divi'){
        operando.textContent="/"
        guardar = num1Parse
        num1.value=''
    }else{
        return
    }
})

igual.addEventListener('click', ()=>{
    let  num2Parse = parseFloat(num1.value)
    switch (operando.textContent) {
        case "+":  
        isNaN(num2Parse) ? display.value=guardar :  display.value=guardar+num2Parse;
        guardar = 0;
        num1.value='';
        break;
        case "-":
        isNaN(num2Parse) ? display.value=guardar :  display.value=guardar-num2Parse;
        guardar = 0;
        num1.value='';
        break;
        case "*":
        isNaN(num2Parse) ? display.value=guardar :  display.value=guardar*num2Parse;
        guardar = 0;
        num1.value='';  
        break;
        case "/":
        isNaN(num2Parse) ? display.value=guardar :  display.value=guardar/num2Parse;
        guardar = 0;
        num1.value='';  
        break;
        default:
        console.log('¡Ups! tenemos un Error');
        break;
    } 
})

limpiar.addEventListener('click', ()=>{
    display.value='';
    num1.value='';
    operando.textContent='';
})