<template>
  <div>
    <el-date-picker
      :clearable="true"
      @change="dataPick"
      :picker-options="pickerOptionsStart"
      v-model="dateValueStart"
      type="date"
      placeholder="選擇起始日期">
    </el-date-picker>
    <small class="text-secondary mx-2"> 至 </small>
    <el-date-picker
      :clearable="false"
      class="picker-end"
      :picker-options="pickerOptionsEnd"
      v-model="dateValueEnd"
      type="date"
      placeholder="選擇結束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateValueStart: '',
      dateValueEnd: '',
      pickerOptionsStart: {
        // 起始日期月曆：禁用今日以後的日期
        disabledDate: (time) => time.getTime() > Date.now() - 24 * 60 * 60 * 1000,
        cellClassName: (time) => {
          // 添加className 規則一，起始日期添加 class = picker-end
          if (this.dateValueStart && this.dateValueStart.getTime() === time.getTime()) {
            return 'picker-end';
          }
          // 添加className 規則二，介於起始日及結束日之間的日子添加 class = picker-end
          if (this.dateValueStart && time.getTime() > this.dateValueStart.getTime()
          && time.getTime() < this.dateValueEnd.getTime()) {
            return 'picker-end';
          }
          if (this.dateValueEnd && this.dateValueEnd.getTime() === time.getTime()) {
            // 在起始日中重新查看時，將結束日的位置添加 end-day 樣式class
            return 'end-day';
          }
          // 反之條件，給予一個全局的樣式class
          return 'normalTheme';
        },
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          // 選取結束日期的規則：disabled 規則（所選日期前後七天以上禁用）
          if (this.dateValueStart) {
            const before = this.dateValueStart.getTime() - 144 * 60 * 60 * 1000;
            const after = this.dateValueStart.getTime() + 144 * 60 * 60 * 1000;
            const yDay = Date.now() - 24 * 60 * 60 * 1000;
            return time.getTime() < before || time.getTime() > after || time.getTime() > yDay;
          }
          // 選取結束日期的規則：若無選取起始日，則返回true(表示結束日期的月曆會全部disabled)
          return true;
        },
        cellClassName: (time) => {
          // 添加className 規則，當起始日期出現在結束日期的選曲月曆上時，添加 class = picker-end，
          if (this.dateValueStart && this.dateValueStart.getTime() === time.getTime()) {
            return 'picker-end';
          }
          if (this.dateValueStart && time.getTime() > this.dateValueStart.getTime()
          && time.getTime() < this.dateValueEnd.getTime()) {
            return 'picker-end';
          }
          if (this.dateValueEnd && this.dateValueEnd.getTime() === time.getTime()) {
            return 'end-day';
          }
          // 反之條件，給予一個全局的樣式class
          return 'normalTheme';
        },
      },
    };
  },
  methods: {
    sendTimeValue() {
      this.$emit('sendTime', this.dateValueStart, this.dateValueEnd);
    },
    dataPick() {
      this.dateValueEnd = this.dateValueStart;
    },
  },
  watch: {
    dateValueEnd() {
      // 監聽：當結束日是選取在起始日以前的日子時，將數值交換 使日期資料邏輯是由 小～大 來呈現
      if (this.dateValueStart && this.dateValueStart.getTime() > this.dateValueEnd.getTime()) {
        [this.dateValueStart, this.dateValueEnd] = [this.dateValueEnd, this.dateValueStart];
      }
      if (this.dateValueEnd) {
        this.sendTimeValue();
      }
    },
  },
};
</script>

<style lang="scss">
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 180px;
}
// 除了disabled以外的全部月曆文字樣式
.available:hover:not(.disabled) span {
  color: #007b8c !important;
}
// 修改結束日的樣式
.el-date-table td.end-day:not(.disabled) span{
  color: #FFF;
  background-color: #007b8c;
}

// 修改 非disabled 文字 hover時的樣式
.normalTheme:hover:not(.disabled) span {
  color: #007b8c !important;
}
.el-date-table__row .picker-end:hover:not(.disabled) span, .end-day:hover:not(.disabled) span{
  color: #fff !important;
}
// 修改 非disabled 文字樣式
.normalTheme:not(.disabled) span {
  color: #606266;
}
.today span{
  color: #007b8c !important;
}
// 修改起始日期的圓圈樣式
.el-date-table__row .picker-end{
  opacity: 0.5;
}
.el-date-table__row .picker-end span{
  color: #FFF !important;
  background-color: #007b8c !important;
}
</style>
