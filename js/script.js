const nav = document.querySelector('.nackLinks')
const burger = document.querySelector('.burger')


function toggleMeny() {
   nav.classList.toggle('navActive')
   burger.classList.toggle()
}
burger.addEventListener('click', toggleMeny)
