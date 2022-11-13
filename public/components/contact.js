
const form = document.querySelector('#form-contact')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(e)
    var data = {
        name : e.target[0].value,
        email : e.target[2].value,
        phone : e.target[4].value,
        text : e.target[6].value
    }
    axios.post('http://localhost:5050/insert',data)
    .then(() =>{
        alert('successful')
    })
    .catch( e =>console.log(e))
    
})  