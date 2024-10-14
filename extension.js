//variables
let username = "Josué Guerra" //string
const cedula = 1752370344 //int
let user = true
const mail = "josue.guerra@epn.edu.ec" //string 

//tipo compuesto
let datosUser = {user1: "Josué", estado: true} //objeto
let datosUserCompleto = ["Josué Guerra", 19, false] //array

let producto = "CyberPowerPC Gamer Xtreme VR Gaming PC" //string
let precio = 1839.99 //float
let cantidad = 500 //ejemplo tomado de la imagen

// propiedades
console.log(mail.toLocaleLowerCase())

// Template strings
console.log(`El producto ${producto.toUpperCase()} tiene un precio de ${precio} y están disponibles ${cantidad} en stock`)

let impuestos = 0.15
let precioString = "1839.99"

// casting 
console.log(+precioString + (precio * impuestos))

//operador ternario
console.log(user ? "El usuario está activo" : "El usuario está inactivo")

//comparación estricta
let cupon = 12345
cupon === "1234" ? console.log("Descuento aplicado correctamente") : console.log("Error")

//lops
const dispositivosCompatibles = ["Windows 11 Home", "WiFi", "Bluetooth 4.2", "USB 3.1", "HDMI", "DisplayPort"]
dispositivosCompatibles.forEach((dispositivosCompatible) => console.log(dispositivosCompatible))

//función declarada
function getAvatar() {
    console.log("Obteniendo avatar")
}

// función expresada
const descuentos = function () {
    console.log("Cupón aplicado con éxito")
}

// argumentos 
const validarCredenciales = function (mail, password) {
    console.log(`El usuario ${mail} ha ingresado con la contraseña ${password}`)
}
validarCredenciales("asd", 123)

//retorno
function infoUser() {
    return {
        name: "Josué",
        age: 19,
        username: "Josué2024",
        id: 121212
    }
}

infoUser()

// función flecha
const descuentoAplicado = () => { console.log("Descuento aplicado") }
descuentoAplicado()

const codigos = (codigo) => {
    console.log("Descuento aplicado")
}
codigos("1231")

// objetos
const factura = {
    idd: 123,
    nombre: "Josué Guerra",
    producto: "CyberPowerPC Gamer Xtreme VR Gaming PC",
    precio: 1839.99,
    descuento: 10,
}
console.log(factura.descuento)

// destructuración
const { idd, nombre, producto: productoFactura, precio: descuento } = factura
console.log(nombre)

//propiedades
factura.direccion = "San Miguel de los Bancos y Madrid"
delete factura.descuento
console.log(factura)

Object.values(factura).includes("") ? console.log("Factura mal generada") : console.log("Factura guardada")

// operador spread

const productoVerificacion = {
    nombre: "CyberPowerPC Gamer Xtreme VR Gaming PC", price: 1839.99
}

const Enviar = { ...factura, ...productoVerificacion }
console.log(Enviar)

// nombres abreviados de propiedades
const product = "CyberPowerPC Gamer Xtreme VR Gaming PC"
const price = 1839.99
const info = { product, price }
console.log(info)
