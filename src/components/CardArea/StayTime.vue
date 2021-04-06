<template>
  <div class="chart-area mb-3">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #c6c6c6;">
      <h5 class="mb-0 d-inline-block">平均停留時間</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div class="p-3" v-show="!isSlide">
        <StayChart :chart-data="stayChartData" :options="stayOptions" :height="400" />
      </div>
    </div>
  </div>
</template>

<script>
import StayChart from '@/components/Chart/stayChart.vue';
import stayOptions from '@/components/Chart/stayChart';

export default {
  components: {
    StayChart,
  },
  data() {
    return {
      stayChartData: {
        labels: [],
        datasets: [],
      },
      stayOptions,
      isSlide: false,
    };
  },
  mounted() {
    this.stayChartData = {
      labels: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸小賣所', '松菸風格店家', '全家便利商店'],
      datasets: [
        {
          label: '0 ~ 15分鐘',
          backgroundColor: '#0e6da8',
          data: [40, 30, 50, 70, 25, 30],
          barPercentage: 0.9, // 未來這裡需要跟隨場域多寡調整寬度
        },
        {
          label: '15 ~ 30 分鐘',
          backgroundColor: '#a81e0e',
          data: [20, 50, 10, 10, 0, 15],
          barPercentage: 0.9,
        },
        {
          label: '30 ~ 60 分鐘',
          backgroundColor: '#de9415',
          data: [20, 10, 20, 10, 5, 25],
          barPercentage: 0.9,
        },
        {
          label: '60 分鐘以上',
          backgroundColor: '#138a74',
          data: [20, 10, 20, 10, 70, 30],
          barPercentage: 0.9,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.show-area{
  height: 450px;
}
</style>
