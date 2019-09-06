<template>
    <q-page>
        
        <div class="row q-gutter-md q-pt-xl q-px-md">
            <div class="col-3">
                <app-image ref='AppImage'
                    v-model='form.image'
                />
            </div>
            <div class="col">
                <q-form @submit="SavePost" >

                    <div>
                        <q-input label="Titulo" outlined lazy-rules
                            v-model="form.title"                            
                            :rules="[ val => val && val.length > 3 || 'Escolha um titulo.']"
                        />
                    </div>
                    <div class="q-mt-md">
                        <q-select
                            label="Categorias"
                            use-chips multiple outlined
                            emit-value map-options

                            option-value="id"
                            option-label="title"
                            
                            v-model="form.categories"                        
                            :options="categorias"

                            lazy-rules
                            :rules="[ val => val.length >= 1 || 'Escolha ao menos uma categoria!']"
                        />
                    </div>
                    <div class="q-my-md">
                        <q-editor 
                            v-model="form.description" min-height="10rem" 
                            lazy-rules
                            :rules="[ val => val && val.length > 3 || 'Escolha um titulo.']"
                        />
                    </div>

                    <q-page-sticky class='z-index-btn' position="top-right" :offset="[50, -30]">
                        <q-btn fab icon="save" color="blue-4" :loading='form_save' type='submit'/>
                    </q-page-sticky>

                </q-form>
            </div>
        </div>

        <!-- 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis qui magni excepturi quos, explicabo ratione ut perferendis voluptates rem eaque, iste ipsa assumenda molestias incidunt quae, nobis unde quibusdam!
Numquam voluptatibus illo at repellendus fugit nulla sint eligendi repellat aperiam officiis soluta adipisci, et nostrum cum nam vitae corporis. Voluptas amet odio quasi. Ab, culpa laudantium. Quibusdam, modi nam.
Veritatis sapiente porro minus. Aspernatur expedita officia reprehenderit eaque minima ab suscipit, alias, vitae voluptatum obcaecati illo assumenda est vel ipsa ratione incidunt, corporis quis. Voluptas dolorem ex dolor odit.
 
         -->
    </q-page>
</template>
<script>
    import {clone} from 'lodash'
    import AppImage from 'components/app-image'
    import {uid} from 'quasar'
    

    export default {
        components: {
            AppImage
        },
        data(){
            return {
                form_save: false,

                form: {
                    title: '',
                    description: '',
                    categories: [],
                    image: null
                },
                
                categorias: []
            }
        },
        methods: {            
            LoadAssets(){
                this.$axios.get('/categorias').then( resp => {
                    this.categorias = resp.data
                })
            },                     
            async SavePost(){
                this.form_save = true

                await this.$refs.AppImage.upload()

                let sendData = clone(this.form)
                let method = 'put'
                if( this.$route.params.id == 'new' ){
                    sendData.id = uid()
                    method = 'post'
                } 

                this.$axios[method]( '/post', sendData ).then( saveResp => {
                    this.form_save = false

                    this.$q.notify({ 
                        position: 'top-right',
                        color: 'positive', 
                        message: 'Post salvo com sucesso!', 
                        icon: 'check' 
                    })

                    if(this.$route.params.id == 'new'){
                        this.$router.push(`/editar-post/${ saveResp.data.id }`)
                    }

                })                
            },
            loadPost(id){
                this.$axios.get(`/post/find/${id}`).then( resp => {
                    this.form = resp.data
                })
            }
        },
        mounted(){            
            this.LoadAssets()
            this.$emit('update:title', 'Editar post')
            if(this.$route.params.id != 'new'){
                this.loadPost(this.$route.params.id)
            }
        }
    };
</script>
