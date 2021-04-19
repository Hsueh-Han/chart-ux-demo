<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],
  mounted() {
    this.addPlugin({
      afterDraw: (chart) => {
        const images = [
          'https://upload.cc/i1/2021/04/14/4PWcne.png',
          'https://upload.cc/i1/2021/04/14/5cDFZE.png',
          'https://upload.cc/i1/2021/04/14/fEJWue.png',
          'https://upload.cc/i1/2021/04/14/oWGviI.png',
          'https://upload.cc/i1/2021/04/14/GpeYNQ.png',
          'https://upload.cc/i1/2021/04/14/MtIcN1.png',
          'https://upload.cc/i1/2021/04/14/ykDTwS.png',
        ];
        const xAxis = chart.scales['x-axis-0'];
        const yAxis = chart.scales['y-axis-0'];
        xAxis.ticks.forEach((value, index) => {
          const x = xAxis.getPixelForTick(index);
          const image = new Image();
          image.src = images[index];
          // 在這邊調整 image 圖片的位置
          chart.ctx.drawImage(image, x - 13, yAxis.bottom + 25);
        });
      },
    });
    this.renderChart(this.data, this.options);
  },
};
</script>
