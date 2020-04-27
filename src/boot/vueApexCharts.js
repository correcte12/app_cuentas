import vueApexCharts from 'vue-apexcharts'

export default async ({ Vue }) => {
  Vue.use(vueApexCharts);
  Vue.component('apex-chart', vueApexCharts);

}
