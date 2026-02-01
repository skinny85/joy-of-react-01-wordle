import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PastGuesses from '../PastGuesses/PastGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <PastGuesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={guess => {
        setGuesses([...guesses, guess]);
      }} />
    </>
  );
}

export default Game;
