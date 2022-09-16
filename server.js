const express = require('express')
const app = express()
const cors = require(cors)
const PORT = 8000

app.use(cors())

const watches = {
    'rolex':{
        'foundedYear': 1905,
        'founderName': 'Hans Wilsdorf, Alfred Davis', 
        'foundedLocation': 'London, UK'
    },
    'patek philippe':{
        'foundedYear': 1839,
        'founderName': 'Antoni Patek,  Adrien Philippe', 
        'foundedLocation': 'Geneve, Switzerland'  
    },
    'jaeger lecoutre':{
        'foundedYear': 1833,
        'founderName': 'Antoine LeCoultre', 
        'foundedLocation': 'Le Sentier, Switzerland'  
    },
    'unknown':{
        'foundedYear': 0,
        'founderName': 'unknown', 
        'foundedLocation': 'unknown'  

    },

}


app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.get('/api/:brand', (req, res)=>{
    const watchBrand = req.params.brand.toLowerCase()
    if (watches[watchBrand]){
        res.json(watches[watchBrand])
    }else{
        res.json(watches['unknown'])
    }
})

app.listen(process.env.PORT||PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})