<template>
    <div class="corpo">
        
       <meu-menu :rotas="routes"/>

        <transition name="pagina">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue'

export default {

    components: {
        'meu-menu': Menu
    },

    data() {
        return {
            routes : routes
        }
    }
};
</script>

<style>
.corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
}

/*          classes geradas dinâmicamente pelo vue 
    pagina-enter           = estado atual do elemento
    pagina-enter-active    = quando elemento é incluído
    pagina-leave acrive    = quando elemento é removido
 */
 .pagina-enter, .pagina-leave-active {
     opacity: 0;
 }
 .pagina-enter-active, .pagina-leave-active {
     transition: opacity 1s;
 }
</style>
