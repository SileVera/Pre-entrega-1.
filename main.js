// Simulador de adquisición de entradas para evento de Farmasi

// Lista de asistentes confirmados
const asistentes = [];

// Función para validar si una persona cumple los requisitos
function validarRequisitos(edad, ciudad) {
    return edad >= 18 && ciudad.toLowerCase() === "madrid";
};

// Función para registrar un asistente
function registrarAsistente() {
    alert("Bienvenido al sistema de adquisición de entradas para el evento de Farmasi.");
    
    let nombre = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));
    let ciudad = prompt("Ingrese su ciudad de residencia:");
    
    if (validarRequisitos(edad, ciudad)) {
        asistentes.push({ nombre, edad, ciudad });
        alert("¡Felicidades! Su entrada ha sido reservada exitosamente.");
    } else {
        alert("Lo sentimos, no cumple con los requisitos para obtener una entrada.");
    }
};

// Función para mostrar la lista de asistentes
function mostrarAsistentes() {
    console.log("Lista de asistentes confirmados:");
    if (asistentes.length === 0) {
        console.log("Aún no hay asistentes registrados.");
    } else {
        asistentes.forEach((asistente, index) => {
            console.log(`${index + 1}. ${asistente.nombre}, ${asistente.edad} años, residente en ${asistente.ciudad}.`);
        });
    }
};

// Ejecutar el proceso de registro
registrarAsistente();
mostrarAsistentes();