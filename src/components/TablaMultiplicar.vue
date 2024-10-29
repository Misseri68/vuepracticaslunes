<template>
    <div>
        <label>Introduce un número</label><br /><br />
        <input type="number" v-model="numero"><br /><br />
        <button v-on:click="generarTabla()">Calcular tabla del {{ numero }}</button>
        <table class="table">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html">

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            html: "",
            numero: null
        }
    },
    methods: {
        generarTabla() {
            var html = "";
            var num = this.numero;
            if (num == null) alert("Elige un numero primero crack")
            else {
                for (let i = 1; i <= 10; i++) {
                    html += "<tr>";
                    html += "<td>" + num + " x " + i + "</td>";
                    html += "<td>" + num * i + "</td>";
                    html += "</tr>";
                }
            }

            this.html = html
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