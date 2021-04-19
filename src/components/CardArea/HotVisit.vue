<template>
  <div class="chart-area mb-3 shadow">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #d2e2a1;">
      <h5 class="mb-0 d-inline-block">熱門造訪時段</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div v-show="!isSlide">
        <VisitChart :chart-data="visitChartData" :options="visitOptions" :height="350"/>
      </div>
    </div>
  </div>
</template>

<script>
import VisitChart from '@/components/Chart/visitChart.vue';
import visitOptions from '@/components/Chart/visitChart';

export default {
  components: {
    VisitChart,
  },
  data() {
    return {
      visitChartData: {
        labels: [],
        datasets: [],
      },
      visitOptions,
      isSlide: false,
    };
  },
  mounted() {
    this.visitChartData = {
      labels: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸風格店家'],
      datasets: [
        {
          label: 'TOP 1',
          backgroundColor: '#d74343',
          data: [[10, 12], [16, 18], [10, 12], [16, 18]],
          barPercentage: 0.3,
        },
        {
          label: 'TOP 2',
          backgroundColor: '#f18100',
          data: [[12, 14], [18, 20], [12, 14], [18, 20]],
          barPercentage: 0.3,
        },
        {
          label: 'TOP 3',
          backgroundColor: '#fbc02c',
          data: [[8, 10], [20, 22], [14, 16], [14, 16]],
          barPercentage: 0.3,
        },
        {
          label: '',
          backgroundColor: '#e6e6e6',
          data: [[0, 24], [0, 24], [0, 24], [0, 24]],
          barPercentage: 0.3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.show-area{
  height: 400px;
}
</style>
