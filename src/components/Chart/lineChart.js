export default {
  legend: {
    labels: {
      boxWidth: 12,
    },
  },
  maintainAspectRatio: false, // 取消維持寬高比（關閉這個設定可以自訂圖表高度）
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: true,
        labelString: '時間 ( 24 時制 )',
        fontSize: 12,
      },
      ticks: {
        callback: (value) => value,
        // stepSize: 10,
      },
    }],
    yAxes: [{
      gridLines: {
        display: true,
      },
      scaleLabel: {
        display: true,
        labelString: '場域即時人流',
        fontSize: 12,
      },
      ticks: {
        min: 0,
        // stepSize: 20,
      },
    }],
  },
  tooltips: {
    mode: 'index',
    // intersect: false,
    callbacks: {
      title: (tooltipItem, data) => `今日 ${data.labels[tooltipItem[0].index]}：00`,
      label: (tooltipItem, data) => {
        if (Number(tooltipItem.value)) {
          return `${data.datasets[tooltipItem.datasetIndex].label} 人流數: ${tooltipItem.value} 人`;
        }
        return '';
      },
    },
  },
};
