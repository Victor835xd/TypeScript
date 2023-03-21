// VARIABLES
//======================================================================

alert("a")
let formulario = document.querySelector('#formulario') as  HTMLFormElement | null;
let erroresUl = document.querySelector('#errores') as  HTMLFormElement | null;
let inputNombre = document.querySelector('#nombre') as  HTMLFormElement | null;
let botonGuardar = document.querySelector('#guardar') as  HTMLFormElement | null;

//======================================================================
// FUNCIONES
//======================================================================

/**
 * Método que valida y enviar el formulario
 */
function enviarFormulario(): void {

    // Variables
    let errores: string[] = []

    // Validamos nombre
    //// ¿Es un numero?
    if(inputNombre)
    if (isNaN(parseInt(inputNombre.value))) errores.push('El nombre no puede ser un número')
    //// Es obligatorio
    if(inputNombre)
    if (inputNombre.value === '') errores.push('El nombre es obligatorio')

    // Mostramos los errores
    imprimirErrores(errores)

    // Enviamos formulario
    if (formulario)
    if (errores.length === 0) formulario.submit()
}

/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores: string[]): void {
    // Limpiamos los errores anteriores en HTML
    if(erroresUl)
    erroresUl.textContent = '' 
    // Generamos todos LI con su mensaje
    errores.forEach(function(mensaje) {
        // Creamos nuevo LI
        let nuevoLi = document.createElement('li')
        nuevoLi.textContent = mensaje
        // Lo añadimos dentro de nuestro UL
        if(erroresUl)
        erroresUl.appendChild(nuevoLi)
    })
}

//======================================================================
// EVENTOS
//======================================================================
if(botonGuardar)
botonGuardar.addEventListener('click', enviarFormulario)