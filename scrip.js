console.log("Zona de pruebas");

const readInput =(id)=>document.getElementById(id).value;


function calcularFecha(día,mesaño){
const num1 = readInput("mesaño");
const num2 = readInput("dia");
const mesyaño = num1.split("-");


const d = new Date(mesyaño[0],mesyaño[1]-1, num2);
let day = d.getDay();
let mensaje = " "

switch (day) {
    case 0:
        mensaje = "Domingo, No laboral" 
        break;
    case 1:
        mensaje = "Lunes, Laboral"
        break;
    case 2:
        mensaje ="Martes, Laboral"
        break;
    case 3:
        mensaje = "Miercoles, Laboral"
        break;
    case 4: 
        mensaje ="Jueves, Laboral"
        break;
    case 5: 
        mensaje = "Viernes, Laboral"
        break;
    case 6:
        mensaje = "Sábado, No laboral"
        break;                

}

let resultados = "Ese día fue: " + mensaje
document.getElementById("fechaFinal").value = resultados;
}





