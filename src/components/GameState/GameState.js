import { STATE_IN_PROGRESS, STATE_LOST, STATE_WON } from '../Game/Game';

function GameState({ gameState, guessResults, answer }) {
  if (gameState === STATE_IN_PROGRESS) {
    return;
  }
  return (
    <>
      {gameState === STATE_WON && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong>{' '}
            Got it in <strong>{guessResults.length} guess{guessResults.length > 1 ? 'es' : ''}</strong>.
          </p>
        </div>
      )}
      {gameState === STATE_LOST && (
        <div className="banner sad">
          <p>Sorry, the correct answer was: <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default GameState;
