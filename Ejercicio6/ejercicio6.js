document.write("<br><br>" +"<h2>" +"Ciclo While"+ "</h2>")
let n
let c=1
let p
n=Number(prompt('(While) Ingresa un número:'))
while (c<=10) {
    p = n * c
    document.write(n+' X '+c+' = '+p+'<br>')
    c++
}

document.write("<br><br>" +"<h2>" +"Ciclo Do While"+ "</h2>")
let n2
let c2=1
let p2
n2=Number(prompt('(Do While) Ingresa un número:'))
do {
    p2 = n2 * c2
    document.write(n2+' X '+c2+' = '+p2+'<br>')
    c2++
} while (c2<=10)


document.write("<br><br>" +"<h2>" +"Ciclo For"+ "</h2>")
let n3
let p3
n3=Number(prompt('(For) Ingresa un número:'))
for (let i = 1; i <= 10; i++) {
    p3 = n3 * i
    document.write(n3+' X '+i+' = '+p3+'<br>')
} 