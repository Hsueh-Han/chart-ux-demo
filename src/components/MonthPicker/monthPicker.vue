<template>
  <div>
    <el-date-picker
      v-model="dateValueStart"
      type="month"
      @change="dataPick"
      :clearable="true"
      :picker-options="pickerOptionsStart"
      placeholder="選擇起始月份">
    </el-date-picker>
    <small class="text-secondary mx-2"> 至 </small>
    <el-date-picker
      v-model="dateValueEnd"
      type="month"
      :clearable="false"
      :picker-options="pickerOptionsEnd"
      placeholder="選擇結束月份">
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
        // 起始日期月曆：禁用未來及今日的日期
        disabledDate: (time) => time.getTime() > Date.now() - 24 * 60 * 60 * 1000
        || time.getTime() < Date.now() - 365 * 24 * 60 * 60 * 1000,
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          // 選取結束日期的規則：disabled 規則（所選日期前後6月禁用）
          if (this.dateValueStart) {
            const yy = this.dateValueStart.getFullYear();
            const afterMonth = new Date(yy, this.dateValueStart.getMonth() + 5).getTime();
            const beforeMonth = new Date(yy, this.dateValueStart.getMonth() - 5).getTime();
            const nowMonth = new Date(new Date(Date.now()).getFullYear(),
              new Date(Date.now()).getMonth()).getTime();
            return time.getTime() > afterMonth || time.getTime() < beforeMonth
            || time.getTime() > nowMonth;
          }
          // 選取結束日期的規則：若無選取起始日，則返回true(表示結束日期的月曆會全部disabled)
          return true;
        },
      },
    };
  },
  methods: {
    dataPick() {
      this.dateValueEnd = this.dateValueStart;
    },
    sendTimeValue() {
      this.$emit('sendTime', this.dateValueStart, this.dateValueEnd);
    },
  },
  watch: {
    dateValueEnd() {
      // 監聽：當結束日是選取在起始日以前的日子時，將數值交換 使日期資料邏輯是由 小～大 來呈現
      if (this.dateValueStart && this.dateValueStart.getTime() > this.dateValueEnd.getTime()) {
        [this.dateValueStart, this.dateValueEnd] = [this.dateValueEnd, this.dateValueStart];
      }
      this.sendTimeValue();
    },
  },
};
</script>

<style lang="scss">
.el-month-table td.current:not(.disabled) .cell{
  color: #ffffff;
  background: #007b8c;
}
.el-month-table td.today .cell {
    color: #007b8c;
    font-weight: 700;
}
.el-month-table td .cell:hover{
  color: #007b8c;
}

</style>
