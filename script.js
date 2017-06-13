
/*var imagen= document.getElementsByClassName('imgC');

for(var i=0; i<imagen.length; i++){
    aumentarImagen(imagen[i]);
}


function aumentarImagen(imagen){
     imagen[i].addEventListener('click', function(){
        imagen[i].style.width= '1200px';
        imagen[i].style.height='700px';
        imagen[i].style.zIndex= '5';
        imagen[i].style.transition= '0.5s';
        imagen[i].style.opacity='1';

    })
}

imagen.addEventListener('dblclick',function(){
    imagen.style.width= '450px';
    imagen.style.height='300px';
    imagen.style.transition= '0.5s';
    imagen.style.opacity='0.7';

})*/



///////////////////////////////////////
var enviar= document.getElementById('send');

var nombre= document.getElementById('name');
var correo= document.getElementById('email');
var mensaje= document.getElementById('message');


var validarForm= function(){

        var complete= true;
    if(nombre.value===""){
        alert("Ingrese nombre.");
        complete=false;
    }
    if(email.value===""){
        alert("Ingrese correo.");
        complete=false;
    }
    if(mensaje.value===""){
        alert("Deje un mensaje.");
        complete=false;
    }

    if(complete){
        alert("Mensaje enviado exitosamente");
    }

}

enviar.addEventListener('click', validarForm);