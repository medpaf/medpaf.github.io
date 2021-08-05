const button = document.getElementById('btn-ham')
function  toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

} 
button.addEventListener('click', toggleMenu)

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}