import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map(index => (
        <Cell key={index}
          letterStatus={guessResult?.[index]}/>
      ))}
    </p>
  );
}

const NON_BREAKING_SPACE = '\xA0';

function Cell({ letterStatus }) {
  let className = 'cell';
  if (letterStatus?.status) {
    className += ` ${letterStatus.status}`;
  }
  return (
    <span className={className}>
      {letterStatus?.letter ?? NON_BREAKING_SPACE}
    </span>
  );
}

export default Guess;
