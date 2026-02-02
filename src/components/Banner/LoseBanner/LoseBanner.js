import Banner from "../Banner";

function LoseBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>Sorry, the correct answer was: <strong>{answer}</strong>.</p>
    </Banner>
  );
}

export default LoseBanner;
