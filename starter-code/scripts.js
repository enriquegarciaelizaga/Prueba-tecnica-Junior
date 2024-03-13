const datos= {
    nombre: '',
    email: '',
    mensaje: '',
}


const email= document.querySelector('#email') 
const mensaje= document.querySelector('#mensaje')
const nombre= document.querySelector('#nombre')
const formulario=document.querySelector(".formulario")

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)



formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Comprobar que no haya campos en datos vacíos
    const{nombre,email,mensaje}=datos;

    if(nombre===""||email===""||mensaje===""){
        //Si está vacío algún campo mostrar error
        mostrarMensaje("error", "Todos los campos son obligatorios")
        return;
    }
  

     //Si todo está correcto enviar y mostrar mensaje de enviado
    console.log("Todo bien")
    mostrarMensaje("correct","Mensaje enviado correctamente")
   
})

function leerTexto(e){
    
    datos[e.target.id]=e.target.value;
    console.log(datos)
    
}



function mostrarMensaje(tipo, mensaje){
    const alerta=document.createElement('p')
    alerta.textContent= mensaje
    alerta.classList.add(tipo);
    formulario.appendChild(alerta)

    setTimeout(()=>{
        alerta.remove();
    },2000)

    

}
