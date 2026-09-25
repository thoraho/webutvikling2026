// Henter HTML-elementet med id="ham"
const ham = document.getElementById("ham")

const closeHam = document.getElementById('close-ham')

const menu = document.getElementById('menu')


ham.addEventListener('click', ()=> {
    menu.style.display = 'flex'

    console.log("Knappen er trykket på")
})

closeHam.addEventListener('click', () => {
    menu.style.display = 'none'

    console.log('Menyen er lukket')
})