function createCookie(name, pass,DateToLive){
    let date = new Date()
    date.setMonth(date.getMonth() + DateToLive)
    document.cookie = `userName=${name}; expires=${date.toString()}; path=/`
    document.cookie = `password=${pass}; expires=${date.toString()}' path=/`
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