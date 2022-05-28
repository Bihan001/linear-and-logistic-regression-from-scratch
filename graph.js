import Chart from "chart.js/auto";

const canvas = document.getElementById("graph_plot");

export default function createGraph(trainData, testData, predictedLineData) {
  const trainingScatterConfig = {
    type: "scatter",
    label: "Training Data",
    data: trainData,
    backgroundColor: "rgb(0, 0, 200)"
  };

  const testScatterConfig = {
    type: "scatter",
    label: "Test Data",
    data: testData,
    backgroundColor: "rgb(200, 0, 0)"
  };

  const lineConfig = {
    type: "line",
    label: "Line Plot",
    data: predictedLineData
  };

  new Chart(canvas, {
    data: {
      datasets: [trainingScatterConfig, testScatterConfig, lineConfig]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: "linear",
          position: "bottom"
        }
      }
    }
  });
}
