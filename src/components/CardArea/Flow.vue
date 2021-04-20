<template>
  <div class="chart-area h-100 shadow">
    <div class="area-header p-3 rounded-top"
    style="background-color: #d2e2a1;">
      <h6 class="mb-0 d-inline-block">當日人流趨勢狀況</h6>
    </div>
    <div class="bg-white rounded-bottom show-area p-5">
      <LineChart :chart-data="lineChartData" :options="lineChartOptions" :height="400"/>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/Chart/lineChart.vue';
import lineChartOptions from '@/components/Chart/lineChart';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      lineChartOptions,
      lineChartData: {
        labels: [],
        datasets: [],
      },
    };
  },
  mounted() {
    this.lineChartData = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13',
        '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          label: '倉庫外圍',
          borderColor: '#f45c75',
          backgroundColor: '#f45c75',
          fill: false,
          pointBackgroundColor: '#f45c75',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 10, 20, 30, 44, 53, 62, 70, 85, 98, 102],
        },
        {
          label: '菸廠區',
          borderColor: '#f18100',
          backgroundColor: '#f18100',
          fill: false,
          pointBackgroundColor: '#f18100',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 5, 10, 14, 20, 22, 40, 45, 48, 52],
        },
        {
          label: '松菸小賣所 2號店',
          borderColor: '#fbc02c',
          backgroundColor: '#fbc02c',
          fill: false,
          pointBackgroundColor: '#fbc02c',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 10, 15, 18, 22],
        },
        {
          label: '松菸小賣所',
          borderColor: '#2c9671',
          backgroundColor: '#2c9671',
          fill: false,
          pointBackgroundColor: '#2c9671',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 20, 25, 18, 19],
        },
        {
          label: '松菸風格店家',
          borderColor: '#4176d1',
          backgroundColor: '#4176d1',
          fill: false,
          pointBackgroundColor: '#4176d1',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 23, 22, 21, 25, 28, 39],
        },
        {
          label: '全家便利商店',
          borderColor: '#7447b7',
          backgroundColor: '#7447b7',
          fill: false,
          pointBackgroundColor: '#7447b7',
          pointRadius: 2,
          data: [2, 2, 3, 4, 2, 2, 6, 10, 8, 15, 20, 22, 30, 35, 28, 29],
        },
      ],
    };
  },
};
</script>

<style lang="scss">

</style>
