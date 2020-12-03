document.write("<h1>"+"While"+"</h1>")
let sal=1500
let tot=0
let w=1
while (w<=6) {
    document.write("el año "+w+", salario: "+sal+"</br>")
    sal+=(sal*.1)
    tot+=sal
    w++
}
document.write("Total de salario "+tot)


document.write("<h1>"+"Do While"+"</h1>")
let sal2=1500
let tot2=0
let d=1
do {
    document.write("el año "+d+", salario: "+sal2+"</br>")
    sal2+=(sal2*.1)
    tot2+=sal2
    d++
} while (d<=6)
document.write("Total de salario "+tot2)


document.write("<h1>"+"For"+"</h1>")
let sal3=1500
let tot3=0
for(let i=1; i<=6; i++) {
    document.write("el año "+i+", salario: "+sal3+"</br>")
    sal3+=(sal3*.1)
    tot3+=sal3
} 
document.write("Total de salario "+tot3)
