import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import PastGuesses from '../PastGuesses/PastGuesses';
import WinBanner from '../Banner/WinBanner/WinBanner';
import LoseBanner from '../Banner/LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const STATE_IN_PROGRESS = "in progress";
const STATE_LOST = "lost";
const STATE_WON = "won";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState(STATE_IN_PROGRESS);

  return (
    <>
      {gameState === STATE_WON && (<WinBanner guesses={guesses} />)}
      {gameState === STATE_LOST && (<LoseBanner answer={answer} />)}

      <PastGuesses guesses={guesses} answer={answer} />

      <GuessInput enabled={gameState === STATE_IN_PROGRESS} addGuess={guess => {
        const newGuesses = [...guesses, guess];
        if (guess === answer) {
          setGameState(STATE_WON);
        } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameState(STATE_LOST);
        }
        setGuesses(newGuesses);
      }} />
    </>
  );
}

export default Game;
