
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    
    if( numeroDigitado < 8 ){
        alert("La contraseña debe tener 8 o más caracteres");
    }
    else{
    let contrase = "";

    for(let i = 0 ; i < numeroDigitado ; i++){
        let caracterNuevo = Math.floor(Math.random() * cadenaCaracteres.length);
        
        let password = cadenaCaracteres[caracterNuevo];
    
        contrase+= password;
    } 
    contrasena.value = contrase ;
    }

};









