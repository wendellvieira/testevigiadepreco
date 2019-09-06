<template>
    <q-item :active='isSelected(id)' @click='toggleCats(id)' clickable v-ripple>
        <q-item-section avatar>
            <q-icon v-if='!isSelected(id)' name="trip_origin" />
            <q-icon v-else name="done" />
        </q-item-section>
        <q-item-section>
            <q-item-label>
                {{title}}
            </q-item-label>
        </q-item-section>
    </q-item>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        props: [
            'id',
            'title'
        ],
        computed: {
            ...mapGetters('LAYOUTAPP', {
                isSelected: 'CATEGORIE_IS_SELECTED'
            }),
        },
        methods: {
            ...mapMutations('LAYOUTAPP', {
                toggleCats: 'TOGGLE_CATEGORIAS'
            })
        }  
    };
</script>