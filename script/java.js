let nombre 
let apellido 
let usuario 
let email
let address
let departamento

let formulario= document.getElementById('form')

formulario.addeventListener('submit',(e) =>{
    e.preventDefault()
})

function letdata(){
    let nombre = document.getElementById('firstname').value
    let apellido = document.getElementById('firstname').value
    let usuario= document.getElementById('firstname').value
    let email= document.getElementById('firstname').value
    let address= document.getElementById('firstname').value
    let departamento= document.getElementById('firstname').value

}

function guardarlocalstorage(){

localStorage.setItem("nombre",nombre)
localStorage.setItem("apellido",apellido)
localStorage.setItem("ciudad",ciudad)
localStorage.setItem("usuario",usuario)
localStorage.setItem("email",email)
localStorage.setItem("cvv",cvv)
}
function ExtraerData(){
    let nom =localStorage.getItem('nombre')
    alert('Bienvenido'), nom
    
}









