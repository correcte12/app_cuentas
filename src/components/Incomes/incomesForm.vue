

<script>
import BaseAppFormVue from '../BaseAppForm.vue';

export default {
  name: 'incomesForm',
  extends: BaseAppFormVue,
  props: ["form", "title", "editMode"],
  methods: {
    onSubmit(){
      if (!this.internal_form.date) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'error',
          message: 'Debes seleccionar una fecha'
        });
        return;
      }
      if (this.$props.editMode) {
        this.update();
      }else{
        this.create();
      }
    },
    create () {
      this.internal_form.id = Date.now();
      this.$store.commit("incomes/ADD_INCOME", this.internal_form);
      this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Ingreso añadido correctamente'
        });
      this.$router.back();
    },
    update () {
      this.$store.commit("incomes/UPDATE_INCOME", this.internal_form);
      this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Ingreso actualizado correctamente'
        });
      this.$router.back();
    }
  },
  data () {
    return {}
  }
}
</script>
