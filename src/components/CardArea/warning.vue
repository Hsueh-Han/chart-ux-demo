<template>
  <div class="chart-area mb-3 h-100">
    <div class="area-header p-3 rounded-top d-flex justify-content-between"
    :class="{'rounded-bottom': isSlide}"
    style="background-color: #c6c6c6;">
      <h5 class="mb-0 d-inline-block">群聚狀況</h5>
      <span class="slide-btn" @click="isSlide = !isSlide">
          <i class="fas fa-plus-circle" v-if="isSlide"></i>
          <i class="fas fa-minus-circle" v-if="!isSlide"></i>
      </span>
    </div>
    <div class="area-body bg-white rounded-bottom" :class="{'show-area': !isSlide}">
      <div class="position-absolute position-center" v-show="!isSlide">
        <Status />
      </div>
    </div>
  </div>
</template>

<script>
import Status from '@/components/WarningStatus/Status.vue';

export default {
  components: {
    Status,
  },
  data() {
    return {
      isSlide: false,
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.slide-btn{
  cursor: pointer;
}
.area-body{
  transition: 0.2s ease;
  height: 0;
}

.show-area{
  height: 350px;
}
.position-center{
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
