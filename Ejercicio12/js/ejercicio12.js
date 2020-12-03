document.write("<h1>"+"While"+"</h1>")
let acum = 0
let cont = 0
let promedio
let num = parseInt(prompt("Ingrese número natural:"))
while (num > -1) {
    acum+=num
    cont++
    promedio=acum/cont
    num = parseInt(prompt("Ingrese número natural:"))
}
document.write("Cuántos números: "+cont+"</br>")
document.write("La suma total: "+acum+"</br>")
document.write("El promedio: "+promedio)


document.write("<h1>"+"Do While"+"</h1>")
let acum2 = 0
let cont2 = 0
let promedio2
let num2 = parseInt(prompt("Ingrese número natural:"))
do {
    acum2+=num2
    cont2++
    promedio2=acum2/cont2
    num2 = parseInt(prompt("Ingrese número natural:"))
} while (num2 > -1)
document.write("Cuántos números: "+cont2+"</br>")
document.write("La suma total: "+acum2+"</br>")
document.write("El promedio: "+promedio2)
