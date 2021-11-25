document.getElementById("btn-cambiar").addEventListener("click",function(){
    //Variable para guardar el valor del input
    var mensaje = document.getElementById("msg").value;
    //Arreglo vacío para las nuevas letras
    var codigosNuevos = [];
    //Creamos una variable para el nuevo mensaje
    var nuevoMensaje = "";
    //Bucle para recorre las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        //Convertir caracter en minuscula.
        var c = mensaje[i].toLowerCase();
        //Variable para guadar el número de la posición de la letra del mensaje
        var codMsg = c.charCodeAt();
        //Varible para obtener el nuevo código de mi nueva letra
        var codNuevo = codMsg + 2;
        //Condicional para reiniciar desde "A", si se pasa de "Z"
        if( codNuevo > 122){
            var d = codNuevo - 122;
            codNuevo = 96 + d;   
        }
        //Agregar el nuevo código al arreglo
        codigosNuevos.push(codNuevo);
        //Concadenar las nuevas letras en un solo string
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    //Colocar mensaje final en la etiqeta span (Fuera del bucle)
    document.getElementById("new_msg").innerHTML = nuevoMensaje;
})

document.getElementById("btn-descifrar").addEventListener("click",function(){
    //Variable para guardar el valor del input
    var mensaje = document.getElementById("msg").value;
    //Arreglo vacío para las nuevas letras
    var codigosNuevos = [];
    //Creamos una variable para el nuevo mensaje
    var nuevoMensaje = "";
    //Bucle para recorre las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        //Convertir caracter en minuscula.
        var c = mensaje[i].toLowerCase();
        //Variable para guadar el número de la posición de la letra del mensaje
        var codMsg = c.charCodeAt();
        //Varible para obtener el nuevo código de mi nueva letra
        var codNuevo = codMsg - 2;
        //Condicional para reiniciar desde "A", si se pasa de "Z"
        if( codNuevo > 122){
            var d = codNuevo - 122;
            codNuevo = 96 + d;   
        }

        //Concadenar las nuevas letras en un solo string
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    //Colocar mensaje final en la etiqeta span (Fuera del bucle)
    document.getElementById("new_msg").innerHTML = nuevoMensaje;
})

document.getElementById("msg").addEventListener("input",function(){
    var input = document.getElementById("msg");
    var p = document.getElementById("counter");
    p.innerHTML = input.value.length;

})

