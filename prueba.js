let nombre = ["matias", "jarot", "carlos", "emilio"];
let habilidades = [[70, 75, 80], [65, 80, 60], [80, 60, 90], [90, 50, 70]];

function calcularpromedios(habilidades) {
    let promedio = [];
    for (let i = 0; i < habilidades.length; i++) {
        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad) => total + habilidad, 0);
        promedio[i] = suma / fila.length;
    }
    return promedio;
}

function evaluaraptitudes(nombre, promedio) {
    for (let i = 0; i < promedio.length; i++) {
        if (promedio[i] >= 70) {
            console.log(nombre[i] + " : " + promedio[i]);
            console.log("ha superado el promedio");
        } else {
            console.log(nombre[i] + " : " + promedio[i]);
            console.log("NO ha superado el promedio");
        }
    }
}

let promedio1 = calcularpromedios(habilidades);
evaluaraptitudes(nombre, promedio1);


/// experimentacion /// 

function ingresarDatos() {
    const cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));

    const nombres = [];
    const habilidades = [];

    for (let i = 0; i < cantidadPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        nombres.push(nombre);

        const habilidad1 = parseFloat(prompt(`Ingrese la habilidad 1 para ${nombre}:`));
        const habilidad2 = parseFloat(prompt(`Ingrese la habilidad 2 para ${nombre}:`));
        const habilidad3 = parseFloat(prompt(`Ingrese la habilidad 3 para ${nombre}:`));

        habilidades.push([habilidad1, habilidad2, habilidad3]);
    }

    return { nombres, habilidades };
}