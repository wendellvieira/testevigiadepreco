<template>
    <q-page>
        <div class="row q-gutter-md q-pt-xl q-px-md">
            <div class="col-3">
                <q-img
                    :src='$getImage("sem-imagem.png")'
                    spinner-color="white" :ratio="1"
                    class="ctn-avatar" contain
                />
                <q-btn 
                    class="full-width q-mt-md" 
                    label="Alterar imagem" 
                />
            </div>
            <div class="col">
                <div>
                    <q-input outlined  v-model="text" label="Titulo" />
                </div>
                <div class="q-mt-md">
                    <q-input outlined  v-model="text" label="Categorias" />
                </div>
                <div class="q-mt-md">
                    <q-editor v-model="text" min-height="10rem" />
                </div>
            </div>
        </div>
    </q-page>
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
<style scoped>
    .ctn-avatar {
        width: 100%; 
        border: 1px solid #cecece; 
        border-radius: 5px;
        background-color: #f2f2f2;
    }
</style>