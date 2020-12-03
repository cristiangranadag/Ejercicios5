let terminar
let sumaa = 0
let sumab = 0
let sumac = 0
let conta = 0
let pagar
let clave
let pagara
let pagarb
let pagarc
let cont=0
terminar="no"
while(terminar=="no") {
    pagar=parseFloat(prompt("Cúantos pagar el automovil? "))
    clave=parseInt(prompt("Cual es categoria?"))
    if (clave==1){
        pagara=pagar+(pagar*.1)
        sumaa+=pagara
    } else if (clave==2){
        pagarb=pagar+(pagar*.07)
        sumab+=pagarb
    } else if (clave==3){
        pagarc=pagar+(pagar*.05)
        sumac+=pagarc
    } else {
        document.write("Error")
    }
    cont++
    terminar=prompt("Terminar? si o no?")
}
document.write("total de clave 1:"+sumaa+"</br>")
document.write("total de clave 2:"+sumab+"</br>")
document.write("total de clave 3:"+sumac)
