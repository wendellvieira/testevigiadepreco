<template>
    <q-layout view="lhh LpR lff" container rounded style="height: 500px">
        <categoria-header 
            :search.sync='search'
        />
        <q-page-container>
            <q-page>
                <q-list bordered separator>
                    <categoria-item 
                        v-for='(item, index) in filterCategorias' 
                        :key='index'
                        :data='item'
                    />
                </q-list>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
<script>
    import CategoriaHeader from './components/header'
    import CategoriaItem from './components/item'
    import {mapState} from 'vuex'

    export default {
        data(){
            return {
                search: ''
            }
        },
        components: {
            CategoriaHeader,
            CategoriaItem
        },
        computed: {
            ...mapState('GERENCIAR_POSTS', {
                categorias: s => s.categorias
            }),

            filterCategorias(){
                if( this.search == "" ) return this.categorias
                return this.categorias.filter( item => 
                    item.title.toLowerCase().indexOf( this.search.toLowerCase() ) != -1
                )
            }
        }
    };
</script>