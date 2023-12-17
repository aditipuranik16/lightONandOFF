let btn = document.getElementById('togglebtn')
let bulb = document.getElementById('bulb')

btn.addEventListener('click', toggleBulb)

function toggleBulb(e) {
    bulb.src = "images/bulbon.png"
}