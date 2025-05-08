let numeroFila
let numeroColumna
let sumaFilaColumna = 0

function obtenerNumeroCuadricula(){
    numeroFila = document.getElementById('Fila').value;
    numeroColumna = document.getElementById('Columna').value;
}

function sumarFilaColumna(){
    obtenerNumeroCuadricula();

    sumaFilaColumna =parseFloat(numeroFila) + parseFloat(numeroColumna);
    return sumaFilaColumna;
}

function sumaFinalParImpar(){
    let suma = sumarFilaColumna();

}

//Para cambiar el color
function identificarFilaColumna(){
    num1 = '1x'+ numeroColumna;
    num2 = '2x'+ numeroColumna;
    numeroFila = document.getElementById('Fila').value;
    numeroColumna = document.getElementById('Columna').value;
   // let fila = document.getElementById('1x' + numeroFila);
  //  let columna = document.getElementById(numeroColumna + 'x1');
    let suma = sumarFilaColumna();
    if (suma % 2 == 0 && num1){
       numeroCero = document.getElementById(num1).innerHTML = "<button>0</button>";
       
    }
    
    
    if (suma % 2 != 0){
        numeroX = document.getElementById('1x' + numeroColumna ).innerHTML = "<button>X</button>";
       
    }

}

    function felicitaciones(){
        
    }
