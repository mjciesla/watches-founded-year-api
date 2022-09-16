document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const watchBrand = document.querySelector('input').value
    try{
        const response = await fetch(`https://watches-founded-year-api.herokuapp.com/api/${watchBrand}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.foundedYear
    }catch(error){
        console.log(error)
    }
}