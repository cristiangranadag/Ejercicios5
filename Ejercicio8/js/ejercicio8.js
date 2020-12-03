let codigo 
let contraseña 

codigo = prompt("(While) Ingrese codigo de usuario: ")
contraseña = prompt("(While) Ingrese contraseña: ")
while (codigo!=1 || contraseña!=1234) {
    alert("(While) Incorrecto")
    codigo = prompt("(While) Ingrese codigo de usuario: ")
    contraseña = prompt("(While) Ingrese contraseña: ")
}
alert("(While) Correcto")



let codigo2 
let contraseña2 

do {
    codigo2 = prompt("(Do While) Ingrese codigo de usuario: ")
    contraseña2 = prompt("(Do While) Ingrese contraseña: ")
        if (codigo2 !=1 || contraseña2 !=1234) {
            alert("(Do While) Incorrecto")  
        } 
} while (codigo2 !=1 || contraseña2 !=1234)
alert("(Do While) Correcto")



let codigo3
let contraseña3 

for(let i=0; i<100; i++) {
    codigo3 = prompt("(For) Ingrese codigo de usuario: ")
    contraseña3 = prompt("(For) Ingrese contraseña: ")
    if (codigo3 !=1 || contraseña3 !=1234) {
        alert("(For) Incorrecto")  
    } else {
        alert("(For) Correcto")
        break
    }
}
