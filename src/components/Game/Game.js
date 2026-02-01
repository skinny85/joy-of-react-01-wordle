import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import PastGuesses from '../PastGuesses/PastGuesses';
import GameState from '../GameState/GameState';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const STATE_IN_PROGRESS = "in progress";
export const STATE_LOST = "lost";
export const STATE_WON = "won";

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameState, setGameState] = React.useState(STATE_IN_PROGRESS);

  return (
    <>
      <GameState gameState={gameState} guessResults={guessResults} answer={answer} />

      <PastGuesses guessResults={guessResults} />

      <GuessInput enabled={gameState === STATE_IN_PROGRESS} addGuess={guess => {
        const guessResult = checkGuess(guess, answer);
        const newGuessResults = [...guessResults, guessResult];
        if (winningGuess(guessResult)) {
          setGameState(STATE_WON);
        } else if (newGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
          setGameState(STATE_LOST);
        }
        setGuessResults(newGuessResults);
      }} />
    </>
  );
}

function winningGuess(guessResult) {
  return guessResult.every(g => g.status === "correct");
}

export default Game;
