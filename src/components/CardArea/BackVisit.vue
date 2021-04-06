<template>
  <div class="chart-area mb-3">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #c6c6c6;">
      <h5 class="mb-0 d-inline-block">新舊訪客比較</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div class="p-3" v-show="!isSlide">
        <SemCircle :chart-data="semCircleData" :options="semCircleOptions" :height="300" />
        <ul class="space-list ml-5 mt-4">
          <li v-for="(item, index) in semCircleSpace" :key="index">
            <div class="theme-square"
            :style="{'background-color': semCircleThemeColor[index]}"></div>
            <small class="ml-4">{{item}}</small>
          </li>
        </ul>
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
      semCircleThemeColor: ['#799b46', '#57a8c6', '#ed5e32', '#e9a43c', '#b092a3', '#7ea5e0'],
      semCircleSpace: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸小賣所', '松菸風格店家', '全家便利商店'],
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
          backgroundColor: ['#799b46', '#d6dfcb'],
          data: [65, 35],
        },
        {
          label: '菸廠區',
          backgroundColor: ['#57a8c6', '#b3d6e3'],
          data: [55, 45],
        },
        {
          label: '松菸小賣所 2號店',
          backgroundColor: ['#ed5e32', '#ecc8bd'],
          data: [75, 25],
        },
        {
          label: '松菸小賣所',
          backgroundColor: ['#e9a43c', '#f4ddb7'],
          data: [90, 10],
        },
        {
          label: '松菸風格店家',
          backgroundColor: ['#b092a3', '#dac8b6'],
          data: [10, 90],
        },
        {
          label: '全家便利商店',
          backgroundColor: ['#7ea5e0', '#cdddf4'],
          data: [50, 50],
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
