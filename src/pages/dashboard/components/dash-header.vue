<template>
    <q-header elevated>
        <q-toolbar class='q-py-sm'>
            <q-btn flat dense round
                @click="$emit('update:leftDrawerOpen', !leftDrawerOpen)">
                <q-icon name="menu" />
            </q-btn>

            <q-input v-model='search'
                dark standout 
                placeholder='Seja bem vindo'
                input-class="text-h5 q-pa-md"
                class="q-ml-md  col-8" >

                    <template v-slot:append>
                        <q-icon v-if="search === ''" name="search" />
                        <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                    </template>

            </q-input>

        </q-toolbar>
    </q-header>
</template>
<script>
    export default {
        props: [
            'leftDrawerOpen'
        ],
        computed: {
            search: {
                set(val){
                    this.$store.commit('DASHBOARD/SET_SEARCH', val)
                },
                get(){
                    return this.$store.state.DASHBOARD.search
                }
            }
        }
    };
</script>