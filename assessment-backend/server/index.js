const express = require("express");
const cors = require("cors");

const app = express();

const ctrl = require('./controller')


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// End Points

app.get("/api/houses", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/houses", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
           "A feather in the hand is better than a bird in the air.",
           "A fresh start will put you on your way."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get('/api/houses', ctrl.getAllHouses) //get Method
app.delete('/api/houses/:id', ctrl.deleteHouse) //delete Method
app.post('/api/houses', ctrl.createHouse) //post Method
app.put('/api/houses/:id', ctrl.updateHouse) //put Method

app.listen(4000, () => console.log("Server running on 4000"));
