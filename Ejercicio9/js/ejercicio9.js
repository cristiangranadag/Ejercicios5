document.write("<h1>"+"While"+"</h1>")
let factorial=1
let contador=1
let numero
numero = parseInt(prompt("Ingrese factorial de número: "))
while (contador <= numero) {
    factorial=factorial*contador
    document.write("Factorial de "+contador+"="+factorial+"</br>")
    contador++
}


document.write("----------------------------------------")
document.write("<h1>"+"Do While"+"</h1>")

let factorial2=1
let contador2=1
let numero2
numero2 = parseInt(prompt("Ingrese factorial de número: "))
do {
    factorial2=factorial2*contador2
    document.write("Factorial de "+contador2+"="+factorial2+"</br>")
    contador2++
} while (contador2 <= numero2) 


document.write("----------------------------------------")
document.write("<h1>"+"For"+"</h1>")
let factorial3=1
let numero3
numero3 = parseInt(prompt("Ingrese factorial de número: "))
for (let i=1; i<=numero3; i++) {
    factorial3=factorial3*i
    document.write("Factorial de "+i+"="+factorial3+"</br>")
} 