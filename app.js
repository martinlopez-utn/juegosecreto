//let subtit = document.querySelector('p');
//subtit.innerHTML = 'Ingrese un numero';
//(numeroSecreto === numeroDeUsuario); // 1.Asignacion-2.comparacion simple de valor si lo reconoce-3.Comparacion de valor y tipo
//return Math.floor(Math.random()*intMax)+1; //Se puede poner la accion de la funcion directamente en el retorno.    
let numeroSecreto = 0;
let intentos = 0;
let listaAleatorios = [];
let intMax = 10;

function verificarIntento(){ //Ingresa y toma el valor del campo
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//funcion que permite traer algo (al poner.value trae el valor//al poner parseint forzamos q el valor se tome como INT) de html basado en su ID
   
    if (numeroSecreto===numeroDeUsuario){
        ParamDinam('p','Acertaste en '+ intentos + `${(intentos === 1) ? ' vez': ' veces'}`); // Dentro de una funcion se pueden usar otras funciones creadas
        document.getElementById('reiniciar').removeAttribute('disabled'); //Con la funcion va al id reiniciar, y el removeatt le quita ese atributo.
    } else {
        if (numeroSecreto>numeroDeUsuario) {
            ParamDinam('p','El numero es mayor');
        } else {
             ParamDinam('p','El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;   
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    return;
}

function ParamDinam(elemento,texto){ //Le pone el titulo a las secciones. Abajo lo vemos ejecutarse en h1 y p 
    let elemHTML = document.querySelector(elemento);//funcion que permite traer algo de html basado en su nombre de objeto
    elemHTML.innerHTML = texto;
    return; //aca se pone lo que retorna la funcion, pero sino se deja vacio como buena practica.
}

function generarNroSecreto(){//Genero nro secreto
    let nroGenerado = Math.floor(Math.random()*intMax)+1; //Se puede poner la accion de la funcion directamente en el retorno.
   console.log(nroGenerado);
   console.log(listaAleatorios);
   
    if(listaAleatorios.length==intMax){
        ParamDinam('p','Ya se sortearon todos los numeros posibles');
        document.querySelector('#intentar').setAttribute('disabled','true'); //Lo mejore porque INTENTAR tambien tenia que estar gris para mi
    } else {
        if(listaAleatorios.includes(nroGenerado)){
            return generarNroSecreto();
        } else{
            listaAleatorios.push(nroGenerado);
            return nroGenerado;
        }
    }
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //indicar intervalo de nros
    //inicializar el nro de intentos
    //generar nro aleatorio
    condicionesIniciales();  
    //deshabilitar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

function condicionesIniciales(){
    ParamDinam('h1','Juego nuevo'); //Llama a la funcion
    ParamDinam('p','Ingrese un numero');
    intentos = 1;
    numeroSecreto = generarNroSecreto (); //Aca se guarda el nro secreto
    
}

condicionesIniciales();