export default {
  legend: {
    onClick: (e) => e.stopPropagation(), // 禁用 labels 點擊功能
    labels: { // 只回傳顯示 labels 中帶有文字的項目
      filter: (item) => item.text,
      boxWidth: 13,
    },
  },
  maintainAspectRatio: false, // 取消維持寬高比（關閉這個設定可以自訂圖表高度）
  hover: {
    animationDuration: 0, // 防止滑鼠移入事件造成文字閃爍
  },
  // animation: {
  //   duration: 2000, // 這邊必須設置，搭配上方hover設置才可使文字不閃爍
  //   onComplete() {
  //     const Chart = this.chart;
  //     let { ctx } = Chart;
  //     const chartInstance = this.chart;
  //     ctx = chartInstance.ctx;
  //     ctx.fillStyle = '#ffffff';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';

  //     this.data.datasets.forEach((dataset, i) => {
  //       const meta = chartInstance.controller.getDatasetMeta(i);
  //       meta.data.forEach((bar, index) => {
  //         const data = dataset.data[index];
  //         const centerPoint = bar.getCenterPoint(); // 取得每段長條面積的x.y中心點
  //         if (data !== 0 && bar.height() > 12) { // bar.height() 表示每段長條圖的高度
  //           ctx.fillText(`${data}%`, centerPoint.x, centerPoint.y);
  //         }
  //       });
  //     });
  //   },
  // },
  scales: {
    xAxes: [{
      stacked: false,
      gridLines: {
        display: true,
      },
      scaleLabel: {
        display: true,
        labelString: '造訪時段 ( 24時制 )',
        fontSize: 12,
      },
      ticks: {
        min: 0,
        max: 24,
        stepSize: 2,
      },
    }],
    yAxes: [{
      stacked: true,
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: false,
        labelString: '場域',
        fontSize: 12,
      },
      ticks: {
        fontSize: 10,
      },
    }],
  },
  tooltips: {
    enabled: false,
    // callbacks: {
    //   title: (tooltipItem, data) => data.labels[tooltipItem[0].index],
    //   label: (tooltipItem, data) => {
    //     console.log(tooltipItem, data);
    //   },
    // },
  },
  layout: {
    padding: {
      top: 50,
      left: 20,
      right: 20,
      bottom: 10,
    },
  },
};
