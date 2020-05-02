<template>
    <div class="q-pa-md">
        <incomes-form 
        :form="form"
        title="Editar ingreso"
        :edit-mode="true"
        />
    </div>
</template>

<script>
import incomesForm from "components/Incomes/incomesForm"
export default {
    name: 'incomesEdit',
    components: {incomesForm},
    mounted() {
        this.form = this.$store.getters["incomes/find"](this.$route.params.id);
    },
    data () {
        return {
            form: {
                name: null,
                amount: null,
                date: null
            }
        }
    }


}
</script>