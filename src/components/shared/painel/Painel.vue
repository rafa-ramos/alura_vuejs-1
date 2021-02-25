<template>
    <div class="painel">
        <!-- propriedade @ é a abreviação de v-on -->
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <!-- slot é um componente do vue js e siguinifica "colocar fixa"-->
                <slot> </slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["titulo"],

    data() {
        return {
            visivel: true
        }
    }
};
</script>


<style scoped>
/* O atributo scoped define o estilo para somente este Componente */

/* estilo do painel */

.painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
}

.painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
}

* {
    box-shadow: 5px 5px 5px;
}

/*          classes geradas dinâmicamente pelo vue 
    painel-fade-enter           = estado atual do elemento
    painel-fade-enter-active    = quando elemento é incluído
    painel-fade-leave acrive    = quando elemento é removido
 */
 .painel-fade-enter, .painel-fade-leave-active {
     opacity: 0;
 }
 .painel-fade-enter-active, .painel-fade-leave-active {
     transition: opacity 1s;
 }
</style>
