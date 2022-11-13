const form = document.getElementById('login-form')

function createCookie(name,DateToLive){
    let date = new Date()
    date.setMonth(date.getMonth() + DateToLive)
    document.cookie = `userName=${name}; expires=${date.toString()}; path=/`
} 
function checkCookie(cookieName){
    const query = document.cookie.split('; ')
    .some(item => item.trim().startsWith(`${cookieName}=`))
    return query
}
function deleteCookie(){
    document.cookie = `userName=; expires = Thu, 01 Jan 1970 00:00:00 GTM; path=/`
    document.cookie = `password=; expires = Thu, 01 Jan 1970 00:00:00 GTM; path=/`
}
function getValueOfCookie(value){
    const cookies = document.cookie.split(';')
    .find( item => item.trim().startsWith(`${value}=`))
    ?.split('=')[1]   
    return cookies 
}
if(checkCookie('userName')){
    window.location.href = '/components/admin/admin/panel.html'
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const data = {
        adminUserName : e.target[0].value,
        adminPass : e.target[1].value
    }
    axios.post('http://localhost:5050/admin',data)
    .then(() =>{
        alert('Logged')
        createCookie(data.adminUserName,1)
        setTimeout(() => {
            window.location.href = '/components/admin/admin/panel.html'
        }, 2000);
    })
    .catch(() =>{
        alert('Admin! User Name Or Password Not Correct')
    })
})

