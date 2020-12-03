document.write("<h1>"+"While"+"</h1>")

let con=0
let suma=0
let num 
num = parseInt(prompt("(While) Ingrese un número: "))
while (con<num) {
    con++
    suma=suma+con
}
document.write("Suma entre el 1 y "+con+" es "+suma)


document.write("<h1>"+"Do While"+"</h1>")

let con2=0
let suma2=0
let num2 
num2 = parseInt(prompt("(Do While) Ingrese un número: "))
do {
    con2++
    suma2=suma2+con2
} while (con2<num2)
document.write("Suma entre el 1 y "+con2+" es "+suma2)


