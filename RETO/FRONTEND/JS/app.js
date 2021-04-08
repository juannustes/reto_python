const btnRegistrarPaciente = document.querySelector('#regpaciente')
const nombre = document.querySelector('#nombre')
const formulario = document.querySelector('#formulario')
const edad = document.querySelector('#edad')
const seleccion = document.querySelector('#seleccion')
const opciones = document.querySelector('#opciones')
const fuma = document.querySelector('#fuma')
const fumador = document.querySelector('#fumador')
const fumadorTiempo = document.querySelector('#divfumador')
cargaeventos();
//eventlisteners
function cargaeventos() {
    btnRegistrarPaciente.addEventListener('click', (e) => {
        console.log(e.target)
    });
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target)
    });
    edad.addEventListener('blur', validarEdad);
    // fumador.addEventListener('blur', ()=>{
    //     console.log('check');
    //     const divfumador = document.createElement('div');
    //     divfumador.classList.add('mb-3 shadow-sm')
    //     divfumador.id='divfumador'
    //     // <input type="text" class="form-control" placeholder="Edad" id="edad" >
    //     const textanios = document.createElement('input')
    //     textanios.id='tiempoFumando'
    //     textanios.type='text'
    //     textanios.classList.add('form-control')
    //     textanios.placeholder='Tiempo de fumador en años'
    //     divfumador.appendChild(textanios)
    //     seleccion.appendChild(divfumador)
    // });

}


//funciones
function validarEdad(e) {
    limpiarHTML(opciones)
    const edad = parseInt(e.target.value)
    if (edad <= 15) {
        opciones.classList.remove('collapse');
        fuma.classList.add('collapse')
        fumadorTiempo.classList.add('collapse')
        cargarselector(0);

    } else if (edad >= 16 && edad <= 40) {
        fumador.checked=false;
        fumadorTiempo.classList.add('collapse')
        opciones.classList.add('collapse')
        fuma.classList.remove('collapse')
        fumador.addEventListener('change', capturarTiempoFumador);
    } else if (edad > 40) {
        opciones.classList.remove('collapse');
        fuma.classList.add('collapse')
        fumadorTiempo.classList.add('collapse')
        cargarselector(2);
    } else {
        opciones.classList.add('collapse')
        fuma.classList.add('collapse')
        fumadorTiempo.classList.add('collapse')
    }
}

function cargarselector(tipoPaciente) {
    const opcion1 = document.createElement('option');
    opcion1.value = ''
    if (tipoPaciente === 0) {
        opcion1.textContent = 'Indice Peso/estatura'
        opciones.appendChild(opcion1)
        for (let i = 1; i <= 4; i++) {
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            opciones.appendChild(opcion)
        }
    } else if (tipoPaciente === 2) {
        const opcionN = document.createElement('option');
        const opcionS = document.createElement('option');
        opcion1.textContent = 'Dieta'
        opciones.appendChild(opcion1);
        opcionN.value = 0
        opcionN.textContent = 'No'
        opciones.appendChild(opcionN);
        opcionS.value = 1
        opcionS.textContent = 'Si'
        opciones.appendChild(opcionS);
    }
}

function limpiarHTML(control) {
    while (control.firstChild) {
        control.removeChild(control.firstChild);
    }
}

function capturarTiempoFumador(e) {

    if (e.target.checked) {
        console.log(e.target.checked);
        // const divfumador = document.createElement('div');
        // divfumador.classList.add('mb-3', 'shadow-sm')
        // divfumador.id = 'divfumador'
        // // <input type="text" class="form-control" placeholder="Edad" id="edad" >
        // const textanios = document.createElement('input')
        // textanios.id = 'tiempoFumando'
        // textanios.type = 'text'
        // textanios.classList.add('form-control')
        // textanios.placeholder = 'Tiempo de fumador en años'
        // divfumador.appendChild(textanios)
        // seleccion.appendChild(divfumador)
        fumadorTiempo.classList.remove('collapse')
    } else {
        fumadorTiempo.classList.add('collapse')
            //formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        }
    }