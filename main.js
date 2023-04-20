const display = document.getElementById('display')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const boton = document.querySelector('.grid-container')

boton.addEventListener('click',(e)=>{
    e.target.id=='suma' ? operando.textContent="+":  e.target.id=='rest' ? operando.textContent="-" :  e.target.id=='multi' ? operando.textContent="*": e.target.id=='divi' ? operando.textContent="/":"" 
    let num1Parse = parseFloat(num1.value)
    let num2Parse = parseFloat(num2.value)
    if(isNaN(num1Parse) || isNaN(num2Parse) || operando.textContent==''){
        return
    }
   if(e.target.id==='igual'){
        switch (operando.textContent) {
            case "+":  
            display.value=num1Parse+num2Parse;
            break;
            case "-":
            display.value=num1Parse-num2Parse;
            break;
            case "*":
            display.value=num1Parse*num2Parse;
            break;
            case "/":
            display.value=num1Parse/num2Parse;
            break;
            default:
            console.log('¡Ups! tenemos un Error');
            break;
        } 

   }
   if(e.target.id==='limpiar'){
        display.value='';
        num1.value='';
        num2.value='';
        operando.textContent='';
   }
})
