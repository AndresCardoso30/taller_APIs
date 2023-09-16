const CONTAINER = document.querySelector('#container')
const boton_si = document.getElementById('si')
const boton_no = document.getElementById('no')
let URL =  'https://v2.jokeapi.dev/joke/Programming?lang=es';
const mostrar_chiste = document.getElementById('mostrar')


boton_no.addEventListener('click', () => {
    categorias.classList.add("filtro")
    CONTAINER.innerHTML=`
    <img src='triste.png' height="420" width="420"/>
    `
})

function obtenerDatos(funcion){
    try{
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            funcion(data)
        }) 
    } catch {
        console.warn('No funciona el fetch')
    }
}

function mostrarChiste(data) {
    CONTAINER.innerHTML = `
        <h1>${data.setup}</h1>
        <h2>${data.delivery}</h2>
    `
}

boton_si.addEventListener('click', ()=> {
    obtenerDatos(mostrarChiste)
})