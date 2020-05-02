<template>
    <div class="q-pa-md">
        <incomes-form 
        :form="form"
        title="Añadir ingreso"
        :edit-mode="false"
        />
    </div>
</template>

<script>
import incomesForm from "components/Incomes/incomesForm"
export default {
    name: 'incomesCreate',
    components: {incomesForm},
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