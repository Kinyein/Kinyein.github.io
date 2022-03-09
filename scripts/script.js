const body = document.querySelector('body');
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const backGroundSelector = document.querySelector('.bGCircle');
const pantallaValorAnterior  = document.querySelector('.valorAnterior');
const pantallaValorActual  = document.querySelector('.valorActual');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

theme1.addEventListener('click', e=>{
    e.preventDefault();
    body.setAttribute('class', 'theme1')
})

theme2.addEventListener('click', e=>{
    e.preventDefault();
    body.setAttribute('class', 'theme2')
})

theme3.addEventListener('click', e=>{
    e.preventDefault();
    body.setAttribute('class', 'theme3')
})

let n = 1;
backGroundSelector.addEventListener('click',()=>{

    n++
    
    if(n > 3){
        n = 1
        body.setAttribute('class', 'theme1')
    }else{
        body.setAttribute('class', 'theme'+n)
    }

})


const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);


numberButtons.forEach(button=>{ //Se usa el forEach para agregarle el evento click a cada boton capturado dentro de la variable
    button.addEventListener('click', ()=> pantalla.addNumber(button.innerHTML)); //cada vez que se presiona un boton agrega el numero pulsado
});

operatorButtons.forEach(button=>{
    button.addEventListener('click', ()=> pantalla.computar(button.value));
});

