export default {
  legend: {
    display: false,
  },
  circumference: 1 * Math.PI, // 半圓形設定
  rotation: -1 * Math.PI,
  maintainAspectRatio: false, // 取消維持寬高比（關閉這個設定可以自訂圖表高度）
  hover: {
    animationDuration: 0, // 防止滑鼠移入事件造成文字閃爍
  },
  tooltips: {
    callbacks: {
      title: (tooltipItem, data) => data.labels[tooltipItem[0].index],
      label: (tooltipItem, data) => ` ${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]} %`,
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
};
