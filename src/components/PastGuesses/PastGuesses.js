import React from 'react';

function PastGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(guess => (
        <p className="guess" key={guess.key}>
          {guess.guess}
        </p>
      ))}
    </div>
  );
}

export default PastGuesses;
