import Banner from '../Banner';

function WinBanner({ guesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong>{' '}
        Got it in <strong>{guesses.length === 1
          ? '1 guess'
          : `${guesses.length} guesses`}
        </strong>.
      </p>
    </Banner>
  )
}

export default WinBanner;
