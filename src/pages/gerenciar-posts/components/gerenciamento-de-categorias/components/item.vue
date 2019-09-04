<template>
    <q-item>
        <q-item-section>
            {{data.title}}
        </q-item-section>

        <q-item-section top side>
            <q-btn 
                class="gt-xs text-red" 
                size="12px" 
                flat dense round 
                icon="delete" 

                :loading="is_loading"
                @click='RemoverCategoria'
            />
        </q-item-section>
    </q-item>    
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                is_loading: false
            }
        },
        props: [
            'data'
        ],
        methods: {
            ...mapMutations('GERENCIAR_POSTS', {
                storeDelete: 'DELETE_CATEGORIA'
            }),
            RemoverCategoria(){
                this.is_loading = true
                this.$axios.delete(`/categorias/${this.data.id}`).then( resp => {
                    this.is_loading = false

                    this.storeDelete(this.data.id)

                    this.$q.notify({ 
                        position: 'top-right',
                        color: 'positive', 
                        message: 'Categoria excluída com sucesso!', 
                        icon: 'check' 
                    })
                })
            }
        }
    };
</script>