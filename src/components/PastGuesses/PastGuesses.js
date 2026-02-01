import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function PastGuesses({ guessResults }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess guessResult={guessResults[index]} key={index} />
      ))}
    </div>
  );
}

export default PastGuesses;
