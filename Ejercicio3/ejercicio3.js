document.write("<br>" +"<h2>" +"Ciclo While"+ "</h2>")
let prom
let con = 0
let nota
let acum=0
   
while (con < 7) {
    con = con + 1 
    nota = Number(prompt('(While) Calificación '+con+':'))
    acum = acum+nota
}
prom = acum/7
document.write("El promedio de 7 calificaciones: "+prom)


document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
let prom2
let con2 = 0
let nota2
let acum2=0
   
do {
    con2 = con2 + 1 
    nota2 = Number(prompt('(Do While) Calificación '+con2+':'))
    acum2 = acum2+nota2
} while (con2 < 7)
prom2 = acum2/7
document.write("El promedio de 7 calificaciones: "+prom2)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
let prom3
let nota3
let acum3=0
   
for (let i = 1; i <= 7; i++) { 
    nota3 = Number(prompt('(For) Calificación '+i+':'))
    acum3 = acum3+nota3
} 
prom3 = acum3/7
document.write("El promedio de 7 calificaciones: "+prom3)

