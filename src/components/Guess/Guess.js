import { range } from '../../utils';

const NON_BREAKING_SPACE = '\xA0';

function Guess({ guess = '' }) {
  return (
    <p className="guess">
      {range(5).map(index => (
        <span className="cell" key={index}>
          {guess[index] ?? NON_BREAKING_SPACE}
        </span>
      ))}
    </p>
  );
}

export default Guess;
