<template>
    <div>
        <h1>Collatz!!!!</h1><br/>
        <label>Introduce un número positivo</label><br/><br/>
        <input type="number" v-model="numero"><br/><br/>
        <button v-on:click="getSecuencia()">Calcular secuencia</button>
        <ul>
            <li v-for="num in secuencia" :key="num" v-html="$filters.parOImparHTML(num)"> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CollatzComponent",
        methods : {
            getSecuencia(){
                while(this.numero > 1 ){
                    this.secuencia.push(this.numero)
                    if(this.numero % 2 == 0){
                        this.numero = this.numero / 2;
                    }
                    else{
                        this.numero = this.numero * 3 + 1
                    }
                }
                this.secuencia.push(1)
            }
        },
        data() {
            return {
                numero: 0,
                secuencia: []
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>