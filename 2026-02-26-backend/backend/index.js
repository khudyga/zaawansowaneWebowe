import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())

let messages = [
    {name: "Serwer", message: "Pozdrowienia z serwera"}
]

app.get('/messages', (req, res) => {
    res.json(messages)

})

app.post('/messages', (req,res) =>{
    const {name,message} = req.body;
    if (!name || !message){
        return res.status(400).json({error: " Pola nie mogą być puste"})
    }
    const newMessage = {name,message};
    messages.push(newMessage);
    res.status(201).json({success: true, data: newMessage})
})

app.listen(3001,()=>{
    console.log("Serwer śmiga na http://localhost:3001")
})