const addData = document.querySelector('#add-data')
const logOutButton = document.getElementById('logout-button')
const adminButton = document.getElementById('admin-button')
const tableArea = document.getElementById('table-area')
const rowAdmin = document.getElementById('row-admin')
const form = document.getElementById('login-form')
function checkCookie(cookieName){
    const query = document.cookie.split('; ')
    .some(item => item.trim().startsWith(`${cookieName}=`))
    return query
}

function deleteCookie(){
    document.cookie = `userName=; expires = Thu, 01 Jan 1970 00:00:00 GTM; path=/`
}

if(!checkCookie('userName')){
    setTimeout(() => {
        window.location.href = '/'
    }, 300);
}
logOutButton.addEventListener('click',(e) =>{
    e.preventDefault()
    deleteCookie();
    setTimeout(() => {
        window.location.reload()
    }, 1000);
})
adminButton.addEventListener('click', (e) =>{
    e.preventDefault()
    tableArea.style.display = 'none'
    rowAdmin.style.display = 'block'
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = {
        userName : e.target[0].value,
        password : e.target[1].value
    }
    axios.post('http://localhost:5050/add-admin', data)
    .then(() =>{
        alert('admin added')
    })
    .catch(() =>{
        alert('admin did not added')
    })
})

function getDataFront(){
    axios.get('http://localhost:5050/getdata')
    .then((res) =>{
        console.log(res)
        const result = res.data.data        
        for(let i = 0; i < result.length ; i ++){
            const text = result[i]['text']
            const name = result[i]['name']
            const email = result[i]['email']
            const phone = result[i]['phone']
            addData.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${text}</td>
                </tr>
            `
        }
        
    })
    .catch(() =>{
        alert('hata var')
    })
}
getDataFront()