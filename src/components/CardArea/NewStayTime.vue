<template>
  <div class="chart-area mb-3 shadow rounded">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #d2e2a1;">
      <h5 class="mb-0 d-inline-block">平均停留時間</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom">
      <el-collapse-transition>
        <div class="p-3 overflow-x-sm" v-show="!isSlide">
          <div class="xflow-width-sm">
            <LineChart :chart-data="lineChartData" :options="lineChartOptions" :height="450"/>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/Chart/lineChart.vue';
import lineChartOptions from '@/components/Chart/newStayChart';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      isSlide: false,
      lineChartOptions,
      lineChartData: {
        labels: [],
        datasets: [],
      },
    };
  },
  mounted() {
    this.lineChartData = {
      labels: ['0', '0-3 mins', '3-5 mins', '5-10 mins', '10-30 mins', '30-60 mins', '1-3 hrs', '3-6 hrs',
        '6-9 hrs', '9 hrs 以上'],
      datasets: [
        {
          label: '倉庫外圍',
          borderColor: '#f45c75',
          backgroundColor: '#f45c75',
          fill: false,
          pointBackgroundColor: '#f45c75',
          pointRadius: 3,
          data: [0, 40, 70, 80, 40, 20, 10, 10, 15, 10],
        },
        {
          label: '菸廠區',
          borderColor: '#f18100',
          backgroundColor: '#f18100',
          fill: false,
          pointBackgroundColor: '#f18100',
          pointRadius: 3,
          data: [0, 30, 20, 50, 40, 30, 20, 30, 20, 15],
        },
        {
          label: '松菸小賣所 2號店',
          borderColor: '#fbc02c',
          backgroundColor: '#fbc02c',
          fill: false,
          pointBackgroundColor: '#fbc02c',
          pointRadius: 2,
          data: [0, 30, 20, 40, 80, 50, 30, 20, 10, 5],
        },
        {
          label: '松菸小賣所',
          borderColor: '#2c9671',
          backgroundColor: '#2c9671',
          fill: false,
          pointBackgroundColor: '#2c9671',
          pointRadius: 3,
          data: [0, 20, 30, 40, 20, 25, 10, 5, 3, 3],
        },
        {
          label: '松菸風格店家',
          borderColor: '#4176d1',
          backgroundColor: '#4176d1',
          fill: false,
          pointBackgroundColor: '#4176d1',
          pointRadius: 3,
          data: [0, 10, 30, 50, 60, 30, 10, 20, 30, 5],
        },
        {
          label: '全家便利商店',
          borderColor: '#7447b7',
          backgroundColor: '#7447b7',
          fill: false,
          pointBackgroundColor: '#7447b7',
          pointRadius: 3,
          data: [0, 90, 110, 70, 20, 10, 5, 2, 3, 3],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.overflow-x-sm{
  @media (max-width: 376px) {
    overflow-x: auto;
  }
}
.xflow-width-sm{
  @media (max-width: 376px) {
    width: 650px;
  }
}
</style>
