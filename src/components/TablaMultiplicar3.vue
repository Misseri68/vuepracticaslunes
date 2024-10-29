<template>
    <div>
        <label>Introduce un número</label><br /><br />
        <input type="number" v-model="numero"><br /><br />
        <table class="table">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-if="numero != null">
                <tr v-for="num in 10" :key="num">
                    <td>{{$filters.getOperacion(numero, num) }}</td>
                    <td>{{$filters.getResultado(numero, num) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar3",
    data() {
        return {
            numero: null,

        }
    }
}
</script>

<style>
table {
    margin: auto;
    margin-top: 2em;
}
</style>