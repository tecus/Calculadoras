const display = document.getElementById('display')
const displayTwo = document.querySelector('.item1')
const boton = document.querySelector('.grid-container')
const limpiar = document.getElementById('limpiar')
const igual = document.getElementById('igual')


window.addEventListener('keyup',(e) =>{
    let numero = parseInt([e.key])
   if(!isNaN(numero) || e.key=="+" || e.key=="-"){
        [e.vale]=display.textContent+=e.key;
   }
    else if(e.key=="=" || e.key=="Enter"){
        display.innerHTML = eval(display.innerHTML)
    }
    if(e.key=="c"){
        display.textContent = ""
    }
})

window.addEventListener('keydown',(e)=>{
    if(e.key=="/"){
        [e.vale]=display.textContent+=e.key;
    }
    if(e.key=="*"){
        [e.vale]=display.textContent+=e.key;
    }
    if(e.key=="Backspace" || e.key=="Escape"){
        if(display.textContent){
            let displayTwo = document.querySelector('.item1').textContent
            display.textContent = displayTwo.substring(0, displayTwo.length -1);
        }
    }   
})

function ingresar(valor) {
    display.textContent += valor;
}

function limpiarDisplay() {
    display.textContent = ""
}
function resultadoFinal() {
        display.innerHTML = eval(display.innerHTML)
}
