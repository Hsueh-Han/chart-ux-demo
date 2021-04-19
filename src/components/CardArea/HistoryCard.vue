<template>
  <div class="chart-area mb-3 shadow">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #d2e2a1;">
      <h5 class="mb-0 d-inline-block">歷史人流數</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div v-show="!isSlide">
        <BarChart :chart-data="chartData" :options="chartOptions" :height="500" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/Chart/chart.vue';
import chartOptions from '@/components/Chart/config';

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions,
      isSlide: false,
    };
  },
  mounted() {
    this.chartData = {
      labels: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '6/7'],
      datasets: [
        {
          label: '倉庫外圍',
          backgroundColor: '#f45c75',
          data: [10, 20, 30, 40, 25, 30, 50],
        },
        {
          label: '菸廠區',
          backgroundColor: '#f18100',
          data: [30, 10, 20, 30, 55, 0, 60],
        },
        {
          label: '松菸小賣所 2號店',
          backgroundColor: '#fbc02c',
          data: [20, 50, 10, 10, 5, 15, 30],
        },
        {
          label: '松菸小賣所',
          backgroundColor: '#2c9671',
          data: [20, 50, 11, 10, 25, 15, 10],
        },
        {
          label: '松菸風格店家',
          backgroundColor: '#4176d1',
          data: [40, 15, 38, 10, 55, 25, 40],
        },
        {
          label: '全家便利商店',
          backgroundColor: '#7447b7',
          data: [70, 22, 35, 17, 15, 5, 29],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.shadow{
  box-shadow: 1px 1px 1px #000;
}
.slide-btn{
  cursor: pointer;
}
.area-body{
  transition: 0.2s ease;
  height: 0;
}
.show-area{
  height: 500px;
}
</style>
