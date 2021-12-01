const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.static("client"))
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile("client/index.html")
})


app.get("/api/compliment", (req,res) => {
    const compliments = [ "You are so special!",
        "Cute shirt!",
        "You are so smart!",
        "Thank you for being you!",
        "You are one of a kind.",
        "Your future is so bright"
    ];


    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
});

const ctrl = require('./controller');
const { getInspos, deleteInspo, createInspo} = ctrl
 
app.get('/api/inspo', getInspos)
app.delete('/api/inspo/:id', deleteInspo)
app.post('/api/inspo', createInspo)



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`You're good on ${port}`));