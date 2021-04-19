<template>
  <div class="chart-area h-100 mb-3 mb-lg-0 shadow">
    <div class="area-header p-3 rounded-top"
    style="background-color: #d2e2a1;">
      <h6 class="mb-0 d-inline-block">每小時即時人流</h6>
    </div>
    <div class="bg-white rounded-bottom show-area pt-5">
      <div class="container">
        <div class="row">
          <div v-for="(item, index) in placeList" :key="index" class="col-12 col-md-6 pl-5">
            <div class="d-inline-block mr-2" style="width: 14px; height: 14px;"
            :style="{'background-color': themeColor[index]}">
            </div>
            <span style="font-size: 12px;">{{ item }}：{{ placeValue[index] }}人</span>
          </div>
        </div>
      </div>
      <PolarArea :chart-data="polarChartData" :options="polarAreaOptions" :height="270"/>
    </div>
  </div>
</template>

<script>
import PolarArea from '@/components/Chart/PolarAreaChart.vue';
import polarAreaOptions from '@/components/Chart/polarArea';

export default {
  components: {
    PolarArea,
  },
  data() {
    return {
      polarAreaOptions,
      polarChartData: {
        labels: [],
        datasets: [],
      },
      themeColor: [
        '#f45c75',
        '#f18100',
        '#fbc02c',
        '#2c9671',
        '#4176d1',
        '#7447b7',
        '#8e512a',
        '#525a64',
        '#d74343',
        '#8bc34a',
      ],
      placeList: ['全家便利商店最多支援十四個字', '倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸小賣所', '松菸風格店家'],
      placeValue: [82, 44, 55, 63, 99, 74],
    };
  },
  mounted() {
    this.polarChartData = {
      labels: this.placeList,
      datasets: [
        {
          data: this.placeValue,
          backgroundColor: this.themeColor,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.show-area{
  height: calc(100% - 56px);
}

</style>
