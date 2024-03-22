import React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import card1 from "./cards/card1.png";
import card2 from "./cards/card2.png";
import card3 from "./cards/card3.png";
import card4 from "./cards/card4.png";
import card5 from "./cards/card5.png";
import card6 from "./cards/card6.png";
import bg from "./cards/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const cardList = [
  { path: card1 },
  { path: card2 },
  { path: card3 },
  { path: card4 },
  { path: card5 },
  { path: card6 },
];

function App() {
  const [cards, setCards] = React.useState(cardList);

  const CardsOnScreen = () => {
    setCards([...cardList], [...cardList]);
  };

  React.useEffect(() => {
    CardsOnScreen();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3>Card Matching Game</h3>
        <Button variant="contained" color="secondary">
          Start
        </Button>

        <div className="card-grid">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <div className="card">
                    <img className="cardFront" src={card.path} alt="" />
                    <img className="cardBack" src={bg} alt="" />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
