class Pantalla {         //Esta es la clase Pantalla
    constructor(pantallaValorAnterior, pantallaValorActual){  //el metodo constructor lo que hace es que cuando se instanciemos la clase se le pasaran valores
        //estas son propiedades de la clase
        this.pantallaValorAnterior = pantallaValorAnterior;  
        this.pantallaValorActual = pantallaValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x'
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    addNumber(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString() //pone el numero recibido en la pantalla convertido en string
        this.imprimirValores()
    }

    imprimirValores(){
        this.pantallaValorActual.textContent = this.valorActual; //muestra el valor del segundo espacio, osea el numero por el que se esta realizando la operacion
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || '' }`;  //muestra en pantalla el resultado y el operador segun 'signos' y en caso de que signo sea '=' no se mostrara
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); // se pasa de string a numero
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior) ) return //si la string esta vacia 
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
}