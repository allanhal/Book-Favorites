
// setar um item no 

export const setItem = (key, value) => {
// Transformar o array em string  
    localStorage.setItem(key,JSON.stringify(value))
}


export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
}