<template>
    <div class="cnt-card col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-md">
        <q-card class="my-card ">
            <q-img 
                :src="$getImage(data.image || 'static/sem-imagem.png')"
                style='height: 250px'
            />

            <q-card-section>
                <div class="text-h6 title-card">{{data.title}}</div>
            </q-card-section>

            <q-card-section class='text-center' style='height: 150px'>
                {{data.description | DescSlug}}
            </q-card-section>
            
            <q-card-actions align="around">
                <q-btn disable flat round color="red" icon="favorite" />
                <q-btn disable flat round color="teal" icon="visibility" />
                <q-btn disable flat round color="primary" icon="share" />
            </q-card-actions>
        </q-card>
    </div>
</template>
<script>
    export default {
        props: ['data'],
        filters: {
            DescSlug(val){
                return val.replace(/(<([^>]+)>)|(\&([^>]+)\;)/ig,"").substring(0, 200) + "..."
            }
        }
    };
</script>
<style scoped>
    .title-card {
        text-overflow: ellipsis;
        text-transform: uppercase;
        overflow: hidden;
        white-space: nowrap;
    }
</style>