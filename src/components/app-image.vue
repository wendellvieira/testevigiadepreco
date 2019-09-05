<template>
    <div>
        <input ref='file'
            type="file" class='hidden' 
            accept="image/*"             
            @change="LoadPreview" 
        />
        <q-img
            :src='imagem.preview'
            spinner-color="white" :ratio="1"
            class="ctn-avatar" contain
        />
        <q-btn 
            class="full-width q-mt-md" 
            label="Alterar imagem"
            @click='$refs.file.click()'
        />
        <q-btn v-if='!!imagem.file' flat color='red'
            class="full-width q-mt-xs" 
            label="Cancelar"
            @click='CancelSendFile'
        />
    </div>
</template>
<script>
    import FileUploadMixin from 'assets/js/fileUpload.mixin'

    export default {
        mixins: [
            FileUploadMixin
        ],
        props: [
            'value'
        ],
        data(){
            return {
                imagem: {
                    file: null,
                    preview: ''
                },
            }
        },
        methods: {
            CancelSendFile(){
                this.imagem.file = null
                this.imagem.preview = this.$getImage("sem-imagem.png")
            },
            LoadPreview(ev) {
                // 
                if( ev.target.files.length == 0 ) return;

                const file = ev.target.files[0]

                const Reader = new FileReader

                Reader.onload = event => {

                    this.imagem.file = file
                    this.imagem.preview = event.target.result
                    this.$refs.file.value = ''

                }

                Reader.readAsDataURL(file)
                
            },
            upload(){
                return new Promise( (resolve, reject) => {
                    if( this.imagem.file == null ) resolve( )
                    else {
                        this.UploadFileMixin(this.imagem.file).then( resp => {
                            this.$emit('input', resp.target.response)
                            resolve()
                        
                        }).catch( err => {
                            reject(err)
                        })
                    }
                })
            }
        },
        mounted(){
            this.imagem.preview = !this.value ? this.$getImage("sem-imagem.png") : this.$getImage(this.value)
        }
    };
</script>
<style scoped>
    .ctn-avatar {
        width: 100%; 
        border: 1px solid #cecece; 
        border-radius: 5px;
        background-color: #f2f2f2;
    }
</style>