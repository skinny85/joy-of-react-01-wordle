import { STATE_IN_PROGRESS, STATE_LOST, STATE_WON } from '../Game/Game';

function GameState({ gameState, guesses, answer }) {
  if (gameState === STATE_IN_PROGRESS) {
    return;
  }
  return (
    <>
      {gameState === STATE_WON && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong>{' '}
            Got it in <strong>{guesses.length} guess{guesses.length > 1 ? 'es' : ''}</strong>.
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
