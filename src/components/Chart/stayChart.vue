<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>
