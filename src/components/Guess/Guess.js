import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const NON_BREAKING_SPACE = '\xA0';

function Guess({ guess, answer }) {
  const guessStatus = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map(index => (
        <span className={`cell ${guessStatus?.[index]?.status ?? ''}`} key={index}>
          {guess?.[index] ?? NON_BREAKING_SPACE}
        </span>
      ))}
    </p>
  );
}

export default Guess;
