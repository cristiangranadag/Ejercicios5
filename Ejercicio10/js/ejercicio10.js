document.write("<h1>"+"While"+"</h1>")
let responde
responde=prompt("Desea continuar? Si=S, No=N")
while (responde == "S" || responde == "s") {
    responde=prompt("Desea continuar? Si=S, No=N")
}
document.write("Terminar ")


document.write("<h1>"+"Do While"+"</h1>")
let responde2
responde2=prompt("Desea continuar? Si=S, No=N")
do {
    responde2=prompt("Desea continuar? Si=S, No=N")
} while (responde2 == "S" || responde2 == "s") 
document.write("Terminar ")