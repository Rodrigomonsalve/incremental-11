const nombre = document.getElementById('inputName').value
const email = document.getElementById('inputEmail').value
const fecha = document.getElementById('inputDate').value
const boton = document.getElementById('btnClick')
let count = 0
let list = []


function Registro(nombre, fecha, email) {
    this.nombre = nombre
    this.email = email
    this.fecha = fecha
}

const registrar = () => {
    let newRegistrado = new Registro(nombre, email, fecha)
    list.push(newRegistrado)
    console.log(list)
    clearInputs()
}

const clearInputs = () => {
    document.getElementById('inputName').value = ''
    document.getElementById('inputEmail').value = ''
    document.getElementById('inputDate').value = ''
}

boton.onclick = function(count) {
    count++
    registrar()
}