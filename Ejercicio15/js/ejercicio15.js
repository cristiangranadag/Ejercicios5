document.write("<h1>"+"While"+"</h1>")
let acu=0
let m=1
let dato
while (m<=10) {
    dato = Number(prompt("(While) Digite dato: "+m))
    if (dato<0){
        acu+=dato
    }
    m++
}
document.write(acu+" es suma de negativos")


document.write("<h1>"+"Do While"+"</h1>")
let acu2=0
let m2=1
let dato2
do {
    dato2 = Number(prompt("(Do While) Digite dato: "+m2))
    if (dato2<0){
        acu2+=dato2
    }
    m2++
} while (m2<=10)
document.write(acu2+" es suma de negativos")


document.write("<h1>"+"For"+"</h1>")
let acu3=0
// let m3=0
let dato3
for (let i=1;i<=10;i++) {
    dato3 = Number(prompt("(For) Digite dato: "+i))
    if (dato3<0){
        acu3+=dato3
    } 
}
document.write(acu3+" es suma de negativos")