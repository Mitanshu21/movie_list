const express = require('express');
const data = require('./data');

const app = express();
const cors = require('cors');
const { json } = require('express');
console.log('app at port 5000');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        res.send(data);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({error: 'something went wrong'});
    }
});

app.get('/:name', (req, res) => {
    try{
        let movie = data?.movies?.filter(item => item.name === req?.params?.name);
        res.send(movie)
    }
    catch(e){
        console.log(e)
    }
})

app.post('/addMovie', async (req, res) => {
    try {
        const fs = require('fs');
        let data = fs.readFileSync('data.json');
        let myObj = JSON.parse(data);

        if(req.body){
            if(req.body?.name || req.body?.rating || req.body?.releasedData){
                myObj.push(req.body);
                let newData = JSON.stringify(myObj);
                fs.writeFile('data.json', newData, err => {
                    if(err) throw err;
                    console.log('updated')
                })
            }
            else res.status(400).json({error: 'invalid data'});
        }
    }
    catch(e) {
        console.log('something went wrong')
    }
})

app.listen(5000);