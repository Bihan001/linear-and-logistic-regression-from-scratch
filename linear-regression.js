export default function linearRegression(
  trainData,
  epochs = 300,
  learningRate = 0.001
) {
  const gradientDescent = (currentM, currentB, trainData) => {
    const n = trainData.length;
    let changeInM = 0;
    let changeInB = 0;
    for (let i = 0; i < n; i++) {
      const xi = trainData[i].x;
      const yi = trainData[i].y;
      const e = yi - currentM * xi - currentB;
      changeInM += xi * e;
      changeInB += e;
    }
    changeInM *= -(2 / n);
    changeInB *= -(2 / n);
    return [changeInM, changeInB];
  };

  let M = 0;
  let B = 0;

  for (let i = 0; i < epochs; i++) {
    const [changeInM, changeInB] = gradientDescent(M, B, trainData);
    M = M - learningRate * changeInM;
    B = B - learningRate * changeInB;
  }

  const getPredictedY = (x, m, b) => m * x + b;

  return { M, B, getPredictedY };
}
