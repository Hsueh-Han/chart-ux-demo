<script>
import { PolarArea, mixins } from 'vue-chartjs';

export default {
  extends: PolarArea,
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
