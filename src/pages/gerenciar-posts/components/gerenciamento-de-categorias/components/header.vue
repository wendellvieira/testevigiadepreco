<template>
    <q-header reveal class="bg-blue-5">
        <q-toolbar>
            <q-toolbar-title>
                <q-input 
                    dark dense standout
                    :value='search'
                    @input='$emit("update:search", $event)'   
                    @keyup.enter='CreateCategorie'
                    placeholder="Categorias">

                    <template v-slot:append>
                        <q-icon 
                            v-if="search === ''" 
                            name="search" 
                        />
                        <q-icon 
                            v-else 
                            name="clear" 
                            class="cursor-pointer" 
                            @click="$emit('update:search', '')" 
                        />
                    </template>
                    
                </q-input>
            </q-toolbar-title>
            
            <q-btn 
                @click='CreateCategorie' 
                flat round dense 
                icon="save" 
                :disable='!search'
            />
        </q-toolbar>
    </q-header>
</template>
<script>
    import {mapMutations} from 'vuex'
    import { uid } from 'quasar'

    export default {
        props: [
            'search'
        ],
        methods: {
            ...mapMutations('GERENCIAR_POSTS', {
                registerCategorie: 'REGISTERAR_CATEGORIA'
            }),
            CreateCategorie(){
                
                if( this.search != '' ){

                    const sData = {
                        title: this.search,
                        id: uid()
                    }

                    this.$axios.post('/categorias', sData).then( resp => {
                        this.registerCategorie(resp.data)
                        this.$q.notify({ 
                            position: 'top-right',
                            color: 'positive', 
                            message: 'Categoria cadastrada com sucesso!', 
                            icon: 'check' 
                        })
                        this.$emit('update:search', '')
                    })
                }
            }
        }
    };
</script>