<template>
  <div class="chart-area shadow">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #d2e2a1;">
      <h5 class="mb-0 d-inline-block">新舊訪客比較</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div class="p-3" v-show="!isSlide">
        <SemCircle :chart-data="semCircleData" :options="semCircleOptions" :height="250" />
        <div class="container mt-3 px-3">
          <div class="row">
            <div class="col-12 col-md-6 pl-4 pl-md-5 pl-lg-2 pl-xl-5 pr-0"
            v-for="(item, index) in semCircleSpace" :key="index">
              <div class="d-inline-block mr-1" style="width: 14px; height: 14px;"
              :style="{'background-color': semCircleThemeColor[index]}">
              </div>
              <span style="font-size: 13px;">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SemCircle from '@/components/Chart/semCircle.vue';
import semCircleOptions from '@/components/Chart/semCircle';

export default {
  components: {
    SemCircle,
  },
  data() {
    return {
      semCircleData: {
        labels: [],
        datasets: [],
      },
      semCircleThemeColor: ['#f45c75', '#f18100', '#fbc02c', '#2c9671', '#4176d1', '#7447b7', '#8e512a', '#525a64'],
      semCircleSpace: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸小賣所', '松菸風格店家', '區域命名長度最多支援十五個字元', '區域命名長度最多支援十五個字元'],
      semCircleOptions,
      isSlide: false,
    };
  },
  mounted() {
    this.semCircleData = {
      labels: ['新訪客', '回訪客'],
      datasets: [
        {
          label: '倉庫外圍',
          backgroundColor: ['#f45c75', '#f45c7550'],
          data: [65, 35],
        },
        {
          label: '菸廠區',
          backgroundColor: ['#f18100', '#f1810050'],
          data: [55, 45],
        },
        {
          label: '松菸小賣所 2號店',
          backgroundColor: ['#fbc02c', '#fbc02c50'],
          data: [75, 25],
        },
        {
          label: '松菸小賣所',
          backgroundColor: ['#2c9671', '#2c967150'],
          data: [90, 10],
        },
        {
          label: '松菸風格店家',
          backgroundColor: ['#4176d1', '#4176d150'],
          data: [10, 90],
        },
        {
          label: '全家便利商店',
          backgroundColor: ['#7447b7', '#7447b750'],
          data: [50, 50],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.area-body{
  height: 0;
  transition: 0.3s ease;
}
.show-area{
  height: 466px;
  @media(min-width: 768px) {
    height: 400px;
  }
}
</style>
