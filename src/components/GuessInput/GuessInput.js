import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault();
      console.log({ guess });
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"
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
