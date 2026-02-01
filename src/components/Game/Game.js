import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import PastGuesses from '../PastGuesses/PastGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  return (
    <>
      <PastGuesses guessResults={guessResults} />
      <GuessInput addGuess={guess => {
        const guessResult = checkGuess(guess, answer);
        setGuessResults([...guessResults, guessResult]);
      }} />
    </>
  );
}

export default Game;
