<template>
    <q-page>
        <div class="q-pt-xl row q-gutter-md q-px-md">
            <div class="col-8">
                <gerenciamento-de-postagens/>
            </div>
            <div class="col">
                <gerenciamento-de-categorias />
            </div>
        </div>
        <q-page-sticky class='z-index-btn' position="top-right" :offset="[50, -30]">
            <q-btn fab 
                icon="plus_one" color="blue-4"
                @click='$router.push("/editar-post/new")'
            />
        </q-page-sticky>
    </q-page>
</template>
<script>
    import GerenciamentoDeCategorias from './components/gerenciamento-de-categorias'
    import GerenciamentoDePostagens from './components/gerenciamento-de-postagens'
    import {mapMutations} from 'vuex'

    export default {
        components: {
            GerenciamentoDeCategorias,
            GerenciamentoDePostagens
        },
        methods: {
            ...mapMutations('GERENCIAR_POSTS', {
                setCategorias: 'SET_CATEGORIAS',
                setPosts: 'SET_POSTS'
            }),
            loadInitialData(){
                this.$axios.get('/categorias').then( resp => {
                    this.setCategorias(resp.data)
                })
                this.$axios.get('/post').then( resp => {
                    this.setPosts(resp.data)
                })
            },
        },
        mounted(){
            this.loadInitialData()
            this.$emit('update:title', 'Gerenciamento de postagens e categorias')
        }
        
    };
</script>