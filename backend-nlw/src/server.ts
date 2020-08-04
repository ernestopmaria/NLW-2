import express from 'express';

const app = express();

app.get('/users' , (request, response) =>{
    const users =[{
        name: 'Ernesto', age: 19
    },
    {name: 'Ivanilde', age: 25}
]
    return response.json(users)
})
app.listen(3333);