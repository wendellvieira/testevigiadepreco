<template>
    <q-layout view="lHh Lpr lFf">
        <component :is=" headerCmp || 'AppHeader' "
            :leftDrawerOpen.sync='leftDrawerOpen' 
            :title='title'
        />

        <app-menu
            :leftDrawerOpen.sync='leftDrawerOpen'
        />

        <q-page-container>
            <router-view 
                :title.sync='title'
                :headerCmp.sync='headerCmp'
            />
        </q-page-container>
    </q-layout>
</template>

<script>
    import AppHeader from './components/header'
    import AppMenu from './components/AppMenu'
    import { mapMutations } from 'vuex'

    export default {
        name: 'AppLayout',
        components: {
            AppHeader,
            AppMenu
        },
        data () {
            return {
                leftDrawerOpen: false,
                title: 'TITLE PAGE',
                headerCmp: null
            }
        },
        methods: {
            ...mapMutations('LAYOUTAPP', {
                loadCategories: 'CARREGAR_CATEGORIAS'
            }),
            loadLayoutAssets(){
                this.$axios.get('/categorias').then( resp => {
                    this.loadCategories(resp.data)
                })
            }
        },
        mounted(){
            this.loadLayoutAssets()
        }
    };
</script>
