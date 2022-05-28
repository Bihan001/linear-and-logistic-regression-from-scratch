import generateGraph from "./graph";
import linearRegression from "./linear-regression";

const xpoints = [1, 2, 3, 3.5, 4, 2.4, 2.7];
const ypoints = [3, 5, 10, 11, 12, 10, 7];

const generatePoints = (xData, yData) => {
  if (xData.length !== yData.length) return [];
  return xData.map((x, i) => ({ x: x, y: yData[i] }));
};

const trainData = generatePoints(xpoints, ypoints);

const { M, B, getPredictedY } = linearRegression(trainData, 300, 0.01);

const testData = [5.0, 6.0, 6.7, 7.3, 8.5].map((x) => ({
  x,
  y: getPredictedY(x, M, B)
}));

const predictedLineData = [...trainData, ...testData].map((data) => ({
  x: data.x,
  y: M * data.x + B
}));

generateGraph(trainData, testData, predictedLineData);
