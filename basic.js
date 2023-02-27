let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBlub)
function toggleBlub(e) {
bulb.src = "on.png"
}