const contactButton = document.getElementById('contact-button')
const contactArea = document.getElementById('contact-form')
const closeButton = document.getElementById('fa-xmark')
const load = document.getElementById('load')
contactButton.addEventListener('click' , () =>{
    window.location.href = '/components/contact.html'
})
closeButton.addEventListener('click', () =>{
    contactArea.style.display = 'none'
})
window.addEventListener('load' ,() =>{
    setTimeout(() => {
       load.style.display = 'none'
    }, 3000);
})
