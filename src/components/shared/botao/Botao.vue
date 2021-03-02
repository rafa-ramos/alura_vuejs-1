<template>
    <!-- o resultado data bind :class vai ser concatenado com o atributo class nativo -->
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>

export default {
    // validando os valores da props
    props: {
        tipo: {
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: Boolean,

        estilo: String
    },
    // validar propriedades não previne erros, mas torna as mensagens de erros mais claras para o desenvolvedor indicando precisamente o problema.

    methods: {

        disparaAcao() {
            if (this.confirmacao) {
                if (confirm('Confirma a Remoção?')) {
                    /* Podem ser disparados com this.$emit através de qualquer componente. Esta função recebe como primeiro parâmetro o nome do evento de nossa escolha e opcionalmente como segundo os dados que serão encaminhados com o evento. */
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');

        }
    },

    computed: {
        estiloDoBotao() {
            if(this.estilo == 'padrao' || !this.estilo) 
                return 'botao-padrao';
            else if(this.estilo == 'perigo') 
                return 'botao-perigo';
        }
    }
}
</script>

<style scoped>
.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}

.botao-perigo {
    background: firebrick;
    color: white;
}

.botao-padrao {
    background: darkcyan;
    color: white;
}
</style>