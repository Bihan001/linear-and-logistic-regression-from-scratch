import generateGraph from "./graph";
import linearRegression from "./linear-regression";
import logisticRegression from "./logistic-regression";

const canvasLinear = document.getElementById("canvasLinear");
const canvasLogistic = document.getElementById("canvasLogistic");

const linearXPoints = [1, 2, 3, 3.5, 4, 2.4, 2.7];
const linearYPoints = [3, 5, 10, 11, 12, 10, 7];

const logisticXPoints = [0.5, 1, 2, 3, 4, 5, 15, 16, 17, 18, 19];
const logisticYPoints = [-3, -1, -1.5, -3.5, -2, -4, 8, 9.5, 7, 8.5, 7];

const runLinearRegression = (xpoints, ypoints) => {
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

  generateGraph(trainData, testData, predictedLineData, canvasLinear);
};

const runLogisticRegression = (xpoints, ypoints) => {
  const generatePoints = (xData, yData) => {
    if (xData.length !== yData.length) return [];
    return xData.map((x, i) => ({ x: x, y: yData[i] }));
  };

  const trainData = generatePoints(xpoints, ypoints);

  const { M, B, getPredictedY } = linearRegression(trainData, 300, 0.001);
  const { getPredictedClass } = logisticRegression();

  const testData = [1, 2, 3, 6.7, 8, 9.5, 10.3, 15.5, 19].map((x) => ({
    x,
    y: getPredictedY(x, M, B)
  }));

  const predictedLineData = [...trainData]
    .sort((a, b) => a.x - b.x)
    .map((data) => ({
      x: data.x,
      y: getPredictedClass(getPredictedY(data.x, M, B))
    }));

  generateGraph(trainData, testData, predictedLineData, canvasLogistic);
};

runLinearRegression(linearXPoints, linearYPoints);
runLogisticRegression(logisticXPoints, logisticYPoints);
