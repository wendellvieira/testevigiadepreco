<template>
    <q-item>
        <q-item-section>
            <q-input 
                borderless dense
                v-model="title" 
                @keyup.enter="UpdateCategories">

                <template v-if='data.title == title'  v-slot:after>                    
                    <q-icon
                        class="gt-xs text-positive" size="22px"
                        name="edit" 
                    />
                </template>
                <template v-else v-slot:after>
                    <q-btn round dense flat 
                        :loading="edit_loading"
                        class="gt-xs text-primary" size="12px"
                        icon="save" @click='UpdateCategories'
                    />
                </template>

            </q-input>
        </q-item-section>

        <q-item-section side>
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
                is_loading: false,
                edit_loading: false,
                alt_title: null
            }
        },
        props: [
            'data'
        ],
        computed: {
            title: {
                set(val){
                    this.alt_title = val
                },
                get(){
                    if( this.alt_title == null ) return this.data.title
                    else return this.alt_title
                }
            }
        },
        methods: {
            ...mapMutations('GERENCIAR_POSTS', {
                storeDelete: 'DELETE_CATEGORIA',
                storeUpdate: 'UPDATE_CATEGORIA'
            }),
            UpdateCategories(){
                const sData = {
                    id: this.data.id,
                    title: this.title
                }
                this.edit_loading = true
                this.$axios.put('/categorias', sData).then( resp => {
                    this.edit_loading = false
                    this.alt_title = null
                    this.storeUpdate(sData)
                })
            },
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