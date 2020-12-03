document.write("<br>" +"<h2>" +"Ciclo While"+ "</h2>")
let con=1
let num
while (con <= 10) {
    num = Number(prompt('(While) Ingrese número #'+con))
    con++
    if (num>0) {
        document.write("El número positivo "+num+'<br>')
    }
}


document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
let con2=1
let num2
do {
    num2 = Number(prompt('(Do While) Ingrese número #'+con2))
    con2++
    if (num2>0) {
        document.write("El número positivo "+num2+'<br>')
    } 
} while (con2 <= 10)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
let num3
for (let i = 1; i <= 10; i++) {
    num3 = Number(prompt('(For) Ingrese número #'+i))
    if (num3>0) {
        document.write("El número positivo "+num3+'<br>')
    } 
}