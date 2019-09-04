<template>
    <q-layout view="lhh LpR lff" container rounded style="height: 500px">
        <q-header reveal class="bg-blue-5">
            <q-toolbar>
                <q-toolbar-title>
                    <q-input 
                        dark dense standout
                        v-model="text"   
                        placeholder="Filtrar/Adicionar">

                        <template v-slot:append>
                            <q-icon v-if="text === ''" name="search" />
                            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
                        </template>
                        
                    </q-input>
                </q-toolbar-title>
                
                <q-btn flat @click="drawerRight = !drawerRight" round dense icon="save" />
            </q-toolbar>
        </q-header>
         <q-page-container>
            <q-page>
                <q-list bordered separator>
                    <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                    </q-item>
                </q-list>
            </q-page>
         </q-page-container>
    </q-layout>
</template>
<script>
    export default {
        data(){
            return {
                text: ''
            }
        }
    };
</script>