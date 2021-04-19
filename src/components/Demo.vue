<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-12 py-3 bg-gray rounded-lg mb-3">
        <div class="row">
          <div class="col-12 col-lg-6">
            <StatusCard />
          </div>
          <div class="col-12 col-lg-6">
            <ImmediateFlowChart />
          </div>
        </div>
      </div>
      <div class="col-12 py-3 bg-gray rounded-lg mb-3">
        <div class="mb-4">
          <h5 class="font-weight-bold">請選擇場域（可複選，最多6個）</h5>
          <el-select
            :multiple-limit="6"
            :clearable="true"
            no-match-text="沒有符合的搜尋選項"
            v-model="value"
            multiple
            filterable
            default-first-option
            placeholder="請選擇場域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mb-4">
          <h5 class="font-weight-bold">請選擇日期區間</h5>
          <div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="month-pick"
              v-model="pickMode" value="month" checked>
              <label class="form-check-label  mr-5" for="month-pick">
                <p class="mb-1"> 月數（最多選取 6 個月）</p>
              </label>
              <input class="form-check-input" type="radio" id="date-pick"
              v-model="pickMode" value="date">
              <label class="form-check-label text-sm mr-5" for="date-pick">
                <p class="mb-1"> 天數（最多選取過往 7 天）</p>
              </label>
            </div>
          </div>
          <DatePicker v-if="pickMode === 'date'" @sendTime="getTimeValue" />
          <MonthPicker v-if="pickMode === 'month'" @sendTime="getTimeValue" />
        </div>
        <div class="text-center">
          <button class="btn btn-dark w-30 cus-rounded"
          :disabled="value.length === 0 || !startTimeValue"
          @click="isRenderChart = true">
            產生歷史人流
          </button>
        </div>
      </div>
      <div class="col-12 py-3 bg-gray rounded-lg" v-if="isRenderChart">
        <HistoryChart />
        <div class="row">
          <div class="col-12 col-lg-6">
            <HotVisit />
          </div>
          <div class="col-12 col-lg-6">
            <BackVisit />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6">
            <StayTime />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImmediateFlowChart from '@/components/CardArea/ImmediateFlow.vue';
import StatusCard from '@/components/WarningStatus/Status.vue';
import HistoryChart from '@/components/CardArea/HistoryCard.vue';
import StayTime from '@/components/CardArea/StayTime.vue';
import HotVisit from '@/components/CardArea/HotVisit.vue';
import BackVisit from '@/components/CardArea/BackVisit.vue';
import DatePicker from '@/components/DatePicker/datePicker.vue';
import MonthPicker from '@/components/MonthPicker/monthPicker.vue';

export default {
  components: {
    ImmediateFlowChart,
    StatusCard,
    DatePicker,
    MonthPicker,
    HistoryChart,
    HotVisit,
    StayTime,
    BackVisit,
  },
  data() {
    return {
      options: [{
        value: '倉庫外圍',
        label: '倉庫外圍',
      }, {
        value: '菸廠區',
        label: '菸廠區',
      }, {
        value: '松菸小賣所 2號店',
        label: '松菸小賣所 2號店',
      }, {
        value: '松菸小賣所',
        label: '松菸小賣所',
      }, {
        value: '松菸風格店家',
        label: '松菸風格店家',
      }, {
        value: '全家便利商店',
        label: '全家便利商店',
      }, {
        value: '不給你選的第七個',
        label: '不給你選的第七個',
      }],
      value: [],
      startTimeValue: null,
      endTimeValue: null,
      pickMode: 'month',
      isRenderChart: false,
      isSlide: false,
    };
  },
  methods: {
    getTimeValue(startDay, endDay) {
      this.startTimeValue = startDay;
      this.endTimeValue = endDay;
    },
  },
  watch: {
    value() {
      if (this.value.length === 0 && !this.startTimeValue) {
        this.isRenderChart = false;
      }
    },
  },
};
</script>

<style lang="scss">
.space-list{
  list-style: none;
  padding: 0;
}
.space-list li {
  position: relative;
  width: 50%;
  display: inline-block;
}
.theme-square{
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #000;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.el-select{
  width: 100%;
}
.w-30{
  width: 30%;
}
button.cus-rounded{
  border-radius: 15px;
}
.el-tag.el-tag--info{
  padding-right: 0;
  border-color: #000;
  color: #000;
}
.el-tag.el-tag--info .el-tag__close {
    color: #000;
    right: 0px;
    top: 0;
}
.el-select .el-tag__close.el-icon-close {
  background-color: transparent;
}
.el-select__tags-text{
  padding: 0 5px 0 0;
  border-right: 1px solid #c6c6c6;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
    color: #000;
}
</style>
