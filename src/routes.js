//import { component } from 'vue/types/umd'
import Cadastro from './components/cadastros/Cadastro.vue'
import Home from './components/home/Home.vue'

/*  quando exportar uma variável precisa ser uma constante
    uma rota é um objeto js com duas propriedades
*/
export const routes = [
    { path: '', component: Home, titulo: 'Menu' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}
    //{ path: '/cadastro', component: Cadastro},
];