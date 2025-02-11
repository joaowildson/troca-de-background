let button = document.getElementById('bnt')

button.addEventListener('click', mudar)

function mudar() {
    let variante = (Math.floor(Math.random()*1000000))
    console.log(variante)
    let body = document.getElementsByTagName('body')
    body[0].style.backgroundColor = `#${variante}`
}