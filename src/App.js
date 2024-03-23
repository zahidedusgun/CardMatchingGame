import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import card1 from "./cards/card1.png";
import card2 from "./cards/card2.png";
import card3 from "./cards/card3.png";
import card4 from "./cards/card4.png";
import card5 from "./cards/card5.png";
import card6 from "./cards/card6.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cards from "./components/Cards";

const cardList = [
  { path: card1, matched: false },
  { path: card2, matched: false },
  { path: card3, matched: false },
  { path: card4, matched: false },
  { path: card5, matched: false },
  { path: card6, matched: false },
];

function App() {
  const [cards, setCards] = React.useState([]);
  const [firstSelected, setFirstSelected] = React.useState(null);
  const [secondSelected, setSecondSelected] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);

  const CardsOnScreen = () => {
    const ShuffleCards = [...cardList, ...cardList]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(ShuffleCards);
    setFirstSelected(null);
    setSecondSelected(null);
  };

  const handleSelected = (card) => {
    firstSelected ? setSecondSelected(card) : setFirstSelected(card);
  };

  useEffect(() => {
    CardsOnScreen();
  }, []);

  useEffect(() => {
    if (firstSelected && secondSelected) {
      setDisabled(true);
      if (firstSelected.path === secondSelected.path) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.path === firstSelected.path) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetState();
      } else {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }
  }, [firstSelected, secondSelected]);

  const resetState = () => {
    setFirstSelected(null);
    setSecondSelected(null);
    setDisabled(false);
  };
  return (
    <div className="App">
      <div className="container">
        <h3>Card Matching Game</h3>
        <Button variant="contained" color="secondary" onClick={CardsOnScreen}>
          Start
        </Button>

        <div className="card-grid">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              {cards.map((card) => (
                <Cards
                  card={card}
                  key={card.id}
                  handleSelected={handleSelected}
                  disabled={disabled}
                  rotated={
                    card === firstSelected ||
                    card === secondSelected ||
                    card.matched
                  }
                />
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
