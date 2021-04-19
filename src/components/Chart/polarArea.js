export default {
  maintainAspectRatio: false, // 取消維持寬高比（關閉這個設定可以自訂圖表高度）
  legend: {
    display: false,
    onClick: (e) => e.stopPropagation(), // 禁用 labels 點擊功能
    position: 'top',
  },
  layout: {
    padding: {
      top: 20,
      right: 20,
      left: 20,
      bottom: 0,
    },
  },
};
