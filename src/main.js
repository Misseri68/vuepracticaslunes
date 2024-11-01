import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)

app.config.globalProperties.$filters = {
    parOImparHTML(num){
        if(num % 2 == 0){
            return("<span style='color:green'>" + num + "</span>")
        }
        else{
            return("<span style='color:orange'>" + num + "</span>")
        }
    },

    getOperacion(num, i){
        return(num + "x" + i)
    },

    getResultado(num, i){
        return(num*i)
    }
}


app.use(router).mount('#app')
