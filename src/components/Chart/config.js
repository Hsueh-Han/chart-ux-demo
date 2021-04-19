export default {
  legend: {
    onClick: (e) => e.stopPropagation(), // 禁用 labels 點擊功能
    labels: {
      boxWidth: 13,
    },
  },
  maintainAspectRatio: false, // 取消維持寬高比（關閉這個設定可以自訂圖表高度）
  hover: {
    animationDuration: 0, // 防止滑鼠移入事件造成文字閃爍
  },
  animation: {
    duration: 500, // 這邊必須設置，搭配上方hover設置才可使文字不閃爍
    onComplete() {
      const Chart = this.chart;
      let { ctx } = Chart;
      const chartInstance = this.chart;
      ctx = chartInstance.ctx;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      this.data.datasets.forEach((dataset, i) => {
        const meta = chartInstance.controller.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
          const data = dataset.data[index];
          const centerPoint = bar.getCenterPoint(); // 取得每段長條面積的x.y中心點
          if (data !== 0 && bar.height() > 12) { // bar.height() 表示每段長條圖的高度
            ctx.fillText(data, centerPoint.x, centerPoint.y);
          }
        });
      });
    },
  },
  scales: {
    xAxes: [{
      stacked: true,
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: true,
        labelString: '日期區間',
        fontSize: 12,
        padding: {
          top: 30,
          bottom: 10,
        },
      },
      ticks: {
        callback: (value) => value,
        // stepSize: 10,
      },
    }],
    yAxes: [{
      stacked: true,
      scaleLabel: {
        display: true,
        labelString: '人流累積總數',
        fontSize: 12,
      },
      ticks: {
        min: 0,
        // stepSize: 10,
      },
    }],
  },
  tooltips: {
    callbacks: {
      title: (tooltipItem, data) => `${data.labels[tooltipItem[0].index]} 當日累積人流數`,
      label: (tooltipItem, data) => `${data.datasets[tooltipItem.datasetIndex].label} : ${tooltipItem.value}人次`,
    },
  },
  layout: {
    padding: {
      top: 50,
      bottom: 20,
      left: 20,
      right: 20,
    },
  },
};
