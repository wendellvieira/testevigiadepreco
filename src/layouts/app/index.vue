<template>
    <q-layout view="lHh Lpr lFf">
        <app-header 
            :leftDrawerOpen.sync='leftDrawerOpen' 
        />

        <app-menu
            :leftDrawerOpen.sync='leftDrawerOpen'
        />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    import AppHeader from './components/header'
    import AppMenu from './components/menu'

    export default {
        name: 'AppLayout',
        components: {
            AppHeader,
            AppMenu
        },
        data () {
            return {
                leftDrawerOpen: false
            }
        }
    };
</script>
