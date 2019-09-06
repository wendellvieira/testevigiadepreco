<template>
    <q-list bordered padding>
        <q-item-label header>Gerenciamento de postagens</q-item-label>

        <div v-for='(post, index) in posts' :key='index'>

            <item-posts :data='post' />

            <q-separator v-if='index+1 < posts.length' spaced inset="item" />

        </div>
        


    </q-list>    
</template>
<script>
    import {mapState} from 'vuex'
    import ItemPosts from './components/item-posts'

    export default {
        components: {
            ItemPosts
        },
        computed: {
            ...mapState('GERENCIAR_POSTS', {
                posts: s => s.posts 
            })
        }
    };
</script>