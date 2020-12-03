document.write("<h1>"+"While"+"</h1>")
let acum = 0
let cont = 1
let num = parseFloat(prompt("Ingrese hasta un número:"))
while (cont <= num) {
    acum+=cont
    cont++
}
document.write("La suma es: "+acum+"</br>")


document.write("<h1>"+"Do While"+"</h1>")
let acum2 = 0
let cont2 = 1
let num2 = parseFloat(prompt("Ingrese hasta un número:"))
do {
    acum2+=cont2
    cont2++
} while (cont2 <= num2)
document.write("La suma es: "+acum2+"</br>")


document.write("<h1>"+"For"+"</h1>")
let acum3 = 0
let cont3 = 1
let num3 = parseFloat(prompt("Ingrese hasta un número:"))
for (let i=1;i<=num3;i++) {
    acum3+=cont3
    cont3++
} 
document.write("La suma es: "+acum3+"</br>")