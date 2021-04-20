<template>
  <div class="chart-area shadow">
    <div class="area-header p-3 rounded-top"
    style="background-color: #d2e2a1;">
      <h6 class="mb-0 d-inline-block">群聚狀況</h6>
    </div>
    <div class="area-body bg-white rounded-bottom show-area py-5">
      <div class="row no-gutters h-100 py-4">
        <div class="col-4 col-lg-6 d-flex justify-content-center align-items-center">
          <img class="w-100 d-none d-xl-block" src="@/assets/img/75.png" alt="">
          <img class="w-100 d-none d-xl-none d-md-block" src="@/assets/img/50.png" alt="">
          <img class="w-100 d-block d-md-none" src="@/assets/img/25.png" alt="">
        </div>
        <div class="col-8 col-lg-6 p-2 position-relative">
          <div class="d-flex flex-column w-90 mb-1 mb-sm-0
          status-tag position-absolute"
          :class="{'tag-hover': safeSpace.length > 3,
          'justify-content-center': safeSpace.length < 3}"
          style="top: 12%; transform: translateY(-33px);">
            <div class="status-text-wrap-safe mx-h-100">
              <div class="status-text-box mx-h-100 px-3 py-1 position-relative">
                <p class="mb-0" v-for="(item, index) in safeSpace" :key="index">{{item}}</p>
                <p v-if="safeSpace.length === 0" class="mb-0 text-secondary">(目前沒有場域符合該群聚狀況)</p>
                <span v-if="safeSpace.length > 3" class="position-fixed arrow-icon">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column w-90 mb-1 mb-sm-0
          status-tag position-absolute"
          :class="{'tag-hover': heatSpace.length > 3,
          'justify-content-center': heatSpace.length < 3}"
          style="top: 37%; transform: translateY(-33px);">
            <div class="status-text-wrap-heat mx-h-100">
              <div class="status-text-box mx-h-100 px-3 py-1 position-relative">
                <p class="mb-0" v-for="(item, index) in heatSpace" :key="index">{{item}}</p>
                <p v-if="heatSpace.length === 0" class="mb-0 text-secondary">(目前沒有場域符合該群聚狀況)</p>
                <span v-if="heatSpace.length > 3" class="position-fixed arrow-icon">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column w-90 mb-1 mb-sm-0
          status-tag position-absolute"
          :class="{'tag-hover': warningSpace.length > 3,
          'justify-content-center': warningSpace.length < 3}"
          style="top: 63%; transform: translateY(-33px);">
            <div class="status-text-wrap-hot mx-h-100">
              <div class="status-text-box mx-h-100 px-3 py-1 position-relative">
                <p class="mb-0" v-for="(item, index) in warningSpace" :key="index">{{item}}</p>
                <p v-if="warningSpace.length === 0" class="mb-0 text-secondary">(目前沒有場域符合該群聚狀況)</p>
                <span v-if="warningSpace.length > 3" class="position-fixed arrow-icon">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column w-90 mb-1 mb-sm-0
          status-tag position-absolute"
          :class="{'tag-hover': dangerSpace.length > 3,
          'justify-content-center': dangerSpace.length < 3}"
          style="top: 88%; transform: translateY(-33px);">
            <div class="status-text-wrap-danger mx-h-100">
              <div class="status-text-box mx-h-100 px-3 py-1 position-relative">
                <p class="mb-0" v-for="(item, index) in dangerSpace" :key="index">{{item}}</p>
                <p v-if="dangerSpace.length === 0" class="mb-0 text-secondary">(目前沒有場域符合該群聚狀況)</p>
                <span v-if="dangerSpace.length > 3" class="position-fixed arrow-icon">
                  <i class="fas fa-sort-down"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      safeSpace: ['區域命名長度最多支援十五個字元', '菸廠區', '松菸小賣所', '松菸小賣所 2號店',
        '松菸小賣所 3號店', '松菸小賣所 4號店', '松菸小賣所 5號店', '松菸小賣所 6號店',
        '松菸小賣所 7號店', '松菸小賣所 8號店'],
      heatSpace: ['區域命名長度最多支援十五個字元', '菸廠區', '松菸小賣所', '松菸小賣所 2號店',
        '松菸小賣所 3號店', '松菸小賣所 4號店', '松菸小賣所 5號店', '松菸小賣所 6號店',
        '松菸小賣所 7號店', '松菸小賣所 8號店'],
      warningSpace: [],
      dangerSpace: ['區域命名長度最多支援十五個字元', '菸廠區', '松菸小賣所', '松菸小賣所 2號店',
        '松菸小賣所 3號店', '松菸小賣所 4號店', '松菸小賣所 5號店', '松菸小賣所 6號店',
        '松菸小賣所 7號店', '松菸小賣所 8號店'],
    };
  },
};
</script>

<style lang="scss" scoped>
.show-area{
  height: auto;
}
.d-xl-block{
  @media (min-width: 1200px) {
    display: block;
  }
}
.d-md-block{
  @media  (min-width: 768px) {
    display: block;
  }
}
.d-xl-none{
  @media  (min-width: 1200px) {
    display: none;
  }
}
.d-md-none{
  @media  (min-width: 768px) {
    display: none;
  }
}
.status-text-wrap-safe{
  border-radius: 5px;
  padding: 3px;
  background: linear-gradient(to bottom right,#a6cc51 60%, #ecea53 100%);
}
.status-text-wrap-heat{
  border-radius: 5px;
  padding: 3px;
  background: linear-gradient(to bottom right,#ffd500 60%, #fac278 100%);
}
.status-text-wrap-hot{
  border-radius: 5px;
  padding: 3px;
  background: linear-gradient(to bottom right,#f59034 60%, #eb6417 100%);
}
.status-text-wrap-danger{
  border-radius: 5px;
  padding: 3px;
  background: linear-gradient(to bottom right,#f10007 60%, #c3403c 100%);
}
.status-text-box{
  border-radius: 5px;
  background: #ffffff;
  font-size: 12px;
}
.mx-h-100{
  max-height: 100%;
}
.w-90{
  width: 90%;
}
.status-tag{
  height: 67px;
  transition: 0.5s ease;
}
.tag-hover{
  .status-text-box{
    overflow: hidden;
  }
}
.tag-hover:hover{
  .status-text-box{
    overflow: initial;
    overflow-x: auto;
  }
  z-index: 100;
  height: 120px;
}
.arrow-icon{
  transition: 0.15s ease;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.tag-hover:hover .status-text-box .arrow-icon{
  transform: rotate(180deg);
}
</style>
