const inputBuscar = document.getElementById('buscar')
// const tarjetas = document.getElementsByTagName('b-card')


inputBuscar.addEventListener('keyup', (e) => {
    let texto = e.target.value
    console.log(texto)
})