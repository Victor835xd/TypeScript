window.alert('prueba');
console.log("prueba")
let JsNombre = document.querySelector('#f_nombre') 
function valida_registro(){
    // let JsNombre: HTMLInputElement = document.querySelector('#f_nombre')
    //let js_nom = getTextInputId('f_nombre') as  HTMLInputElement; 
    let js_nom = document.getElementById('f_nombre') as  HTMLInputElement; 

    if(JsNombre){
    if (JsNombre.nodeName.length < 3) {
        echo:'Error en el nombre'
        return false;
    }}
}

function getTextInputId(id:string) {
    return document.getElementById(id); 
}

