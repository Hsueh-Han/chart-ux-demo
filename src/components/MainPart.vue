<template>
  <div>
    <LineChart :chart-data="lineChartData" :options="lineChartOptions" :height="500" />
    <hr>
    <BarChart :chart-data="chartData" :options="chartOptions" :height="500" />
    <hr>
    <StayChart :chart-data="stayChartData" :options="stayOptions" :height="500" />
    <hr>
    <VisitChart :chart-data="visitChartData" :options="visitOptions" :height="350"/>
    <hr>
    <div style="width: 600px;">
      <SemCircle :chart-data="semCircleData" :options="semCircleOptions" :height="400" />
      <ul class="space-list">
        <li v-for="(item, index) in semCircleSpace" :key="index">
          <div class="theme-square" :style="{'background-color': semCircleThemeColor[index]}"></div>
          <span class="ml-4">{{item}}</span>
        </li>
      </ul>
    </div>
    <hr>
  </div>
</template>

<script>
import LineChart from '@/components/Chart/lineChart.vue';
import lineChartOptions from '@/components/Chart/lineChart';
import BarChart from '@/components/Chart/chart.vue';
import chartOptions from '@/components/Chart/config';
import StayChart from '@/components/Chart/stayChart.vue';
import stayOptions from '@/components/Chart/stayChart';
import VisitChart from '@/components/Chart/visitChart.vue';
import visitOptions from '@/components/Chart/visitChart';
import SemCircle from '@/components/Chart/semCircle.vue';
import semCircleOptions from '@/components/Chart/semCircle';

export default {
  components: {
    LineChart,
    BarChart,
    StayChart,
    VisitChart,
    SemCircle,
  },
  data() {
    return {
      semCircleOptions,
      chartOptions,
      stayOptions,
      visitOptions,
      lineChartOptions,
      pickMode: 'month',
      chartData: {
        labels: [],
        datasets: [],
      },
      lineChartData: {
        labels: [],
        datasets: [],
      },
      stayChartData: {
        labels: [],
        datasets: [],
      },
      visitChartData: {
        labels: [],
        datasets: [],
      },
      semCircleData: {
        labels: [],
        datasets: [],
      },
      semCircleThemeColor: ['#799b46', '#57a8c6', '#ed5e32', '#e9a43c', '#b092a3', '#7ea5e0'],
      semCircleSpace: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸小賣所', '松菸風格店家', '全家便利商店'],
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
    this.visitChartData = {
      labels: ['倉庫外圍', '菸廠區', '松菸小賣所 2號店', '松菸風格店家'],
      datasets: [
        {
          label: 'TOP 1',
          backgroundColor: '#d20023',
          data: [[10, 12], [16, 18], [10, 12], [16, 18]],
          barPercentage: 0.3,
        },
        {
          label: 'TOP 2',
          backgroundColor: '#ff4c01',
          data: [[12, 14], [18, 20], [12, 14], [18, 20]],
          barPercentage: 0.3,
        },
        {
          label: 'TOP 3',
          backgroundColor: '#fec24b',
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
    this.chartData = {
      labels: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '6/7'],
      datasets: [
        {
          label: '倉庫外圍',
          backgroundColor: '#65942e',
          data: [10, 20, 30, 40, 25, 30, 50],
        },
        {
          label: '菸廠區',
          backgroundColor: '#00b3d6',
          data: [30, 10, 20, 30, 55, 0, 60],
        },
        {
          label: '松菸小賣所 2號店',
          backgroundColor: '#e96649',
          data: [20, 50, 10, 10, 5, 15, 30],
        },
        {
          label: '松菸小賣所',
          backgroundColor: '#f1a11e',
          data: [20, 50, 11, 10, 25, 15, 10],
        },
        {
          label: '松菸風格店家',
          backgroundColor: '#a67a93',
          data: [40, 15, 38, 10, 55, 25, 40],
        },
        {
          label: '全家便利商店',
          backgroundColor: 'rgb(93, 153, 227)',
          data: [70, 22, 35, 17, 15, 5, 29],
        },
      ],
    };
    this.lineChartData = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13',
        '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          label: '倉庫外圍',
          borderColor: '#fe6383',
          backgroundColor: '#fe6383',
          fill: false,
          pointBackgroundColor: '#fe6383',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 10, 20, 30, 44, 53, 62, 70, 85, 98, 102],
        },
        {
          label: '菸廠區',
          borderColor: '#ff9f40',
          backgroundColor: '#ff9f40',
          fill: false,
          pointBackgroundColor: '#ff9f40',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 5, 10, 14, 20, 22, 40, 45, 48, 52],
        },
        {
          label: '松菸小賣所 2號店',
          borderColor: '#ffcd57',
          backgroundColor: '#ffcd57',
          fill: false,
          pointBackgroundColor: '#ffcd57',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 10, 15, 18, 22],
        },
        {
          label: '松菸小賣所',
          borderColor: '#4cc0c0',
          backgroundColor: '#4cc0c0',
          fill: false,
          pointBackgroundColor: '#4cc0c0',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 12, 20, 25, 18, 19],
        },
        {
          label: '松菸風格店家',
          borderColor: '#33a1ea',
          backgroundColor: '#33a1ea',
          fill: false,
          pointBackgroundColor: '#33a1ea',
          pointRadius: 2,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 23, 22, 21, 25, 28, 39],
        },
        {
          label: '全家便利商店',
          borderColor: '#9867ff',
          backgroundColor: '#9867ff',
          fill: false,
          pointBackgroundColor: '#9867ff',
          pointRadius: 2,
          data: [2, 2, 3, 4, 2, 2, 6, 10, 8, 15, 20, 22, 30, 35, 28, 29],
        },
      ],
    };
  },
};
</script>
