<template>
    <q-item >
        <q-item-section avatar>
            <!-- <q-avatar> -->
                <q-img
                    :src="$getImage( data.image || 'static/sem-imagem.png' )"
                    spinner-color="white"
                />
            <!-- </q-avatar> -->
        </q-item-section>

        <q-item-section>
            <q-item-label>{{data.title}}</q-item-label>
            <q-item-label caption lines='2'>{{data.description}}</q-item-label>
        </q-item-section>

        <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
                <q-btn class="gt-xs text-positive" size="12px" 
                    flat dense round 
                    icon="edit" 
                    @click='$router.push(`/editar-post/${data.id}`)'
                />
                <q-btn 
                    class="gt-xs text-red" size="12px" 
                    flat dense round 
                    icon="delete" 
                    :loading="is_loading"
                    @click='deletePost'
                />
            </div>
        </q-item-section>
    </q-item>
</template>
<script>
    import {mapMutations} from 'vuex'

    export default {
        props: ['data'],
        data(){
            return {
                is_loading: false
            }
        },
        methods: {
            ...mapMutations('GERENCIAR_POSTS', {
                storeDelete: 'DELETE_POST'
            }),
            deletePost(){
                this.is_loading = true
                this.$axios.delete(`/post/${this.data.id}`).then(resp => {
                    this.is_loading = false

                    this.storeDelete( this.data.id )

                    this.$q.notify({ 
                        position: 'top-right',
                        color: 'positive', 
                        message: 'Post excluído com sucesso!', 
                        icon: 'check' 
                    })
                })
            }
        }
    };
</script>