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
    numeroFila = document.getElementById('Fila').value;
    numeroColumna = document.getElementById('Columna').value;
   // let fila = document.getElementById('1x' + numeroFila);
  //  let columna = document.getElementById(numeroColumna + 'x1');
    let suma = sumarFilaColumna();
    if (suma % 2 == 0){
        console.log("La suma de filas y columnas es par")
//        document.getElementById('1x' + numeroFila).innerHTML = "<button>0</button>";
        document.getElementById('1x' + numeroColumna).innerHTML = "<button>0</button>";
    }
    else{
        console.log("La suma de filas y columnas es impar")
        document.getElementById('1x' + numeroColumna ).innerHTML = "<button>X</button>";
    }

}

    function felicitaciones(){
        
    }
