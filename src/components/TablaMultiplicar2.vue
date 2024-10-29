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
                <tr v-for="num in tabla" :key="num">
                    <td>{{ numero }} x {{ num }}</td>
                    <td>{{ numero * num }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar2",
    data() {
        return {
            tabla: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            numero: null
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