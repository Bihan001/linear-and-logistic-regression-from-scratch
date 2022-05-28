export default function logisticRegression() {
  const getPredictedClass = (y) => {
    const e = Math.exp(y);
    const p = e / (1 + e);
    return p > 0.5 ? 1 : 0;
  };
  return { getPredictedClass };
}
