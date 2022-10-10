import confetti from "canvas-confetti";

export default function End(props) {
  const { setState, phrase } = props;

  setTimeout(() => {
    setState((prev) => ({ ...prev, num: 0, end: false }));
  }, 3000);

  if (phrase === "🥳 Tadaa! 🥳") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  return (
    <div className="end">
      <h1 className="end-phrase">{phrase}</h1>
    </div>
  );
}
