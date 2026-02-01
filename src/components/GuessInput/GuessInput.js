import React from 'react';

function GuessInput({ addGuess, enabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault();
      addGuess(guess);
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"
        disabled={!enabled}
        pattern="[a-zA-Z]{5}"
        maxLength="5"
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
        title="Guess must be a 5-letter word"
      />
    </form>
  );
}

export default GuessInput;
