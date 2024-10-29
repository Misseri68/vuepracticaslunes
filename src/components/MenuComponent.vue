<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/collatz">Collatz</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"MenuComopnent"
    }
</script>


<style>
ul#menu li {
    display: inline;
    padding-left: 5px;
    padding-right: 5px;
    list-style: none;
}

ul{
    list-style: none;
    padding: 0;
}
</style>