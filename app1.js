
function calcularPromedio (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3;
}

const nota1 = parseFloat(prompt(`ingrese la primera nota`)); 
const nota2 = parseFloat(prompt(`ingrese la segunda nota`)); 
const nota3 = parseFloat(prompt(`ingrese la tercera nota`)); 
const promedio = calcularPromedio (nota1, nota2, nota3)

if(promedio>=3.0){
    console.log(`Tu nota es ${promedio} Felicidades, aprobaste`)
}else{
    console.log(`Su nota es ${promedio} Se rajo, chino, reprobo`)
}