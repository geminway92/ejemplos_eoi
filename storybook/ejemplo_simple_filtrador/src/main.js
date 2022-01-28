import { createApp } from 'vue'
import App from './App.vue'
import  store from './store/store'

const app = createApp(App)
app.use(store)
app.mount('#app')



/**
 * Pasos:

  npm install vue@next --save

ir al main.js y:

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App);
app.use(store)
app.mount('#app')


Crear la estructura del ficheros:

src/store/store.jscle

//
Pasos:

  npm install vue@next --save

ir al main.js y:

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App);
app.use(store)
app.mount('#app')

Crear la estructura del ficheros:

src/store/store.js

Dentro del store.js crean su store:





import { createStore } from 'vuex'



// Create a new store instance.

const store = createStore({

state () {

    return {

        ...

    }

  },

  mutations: {

    ...

  },

  actions: {

    ...

  }

});

y para usarlo dentro de los componentes: this.$store.dispatch('nombre_acción', data);

this.$store.state.nombre_variable

this.$store.dispatch('setFiltered', this.filtered); //* Llama la accion
commit('SET_FILTERED', newFiltered); //* Llama mutacion


*/
