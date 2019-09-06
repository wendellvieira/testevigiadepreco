<template>
    <div class="q-pt-xl row">

        <card-post 
            v-for='(item, index) in filteredPosts' :key='index'
            :data='item'
        />
        
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import CardPost from './components/card-item'
    import DashHeader from './components/dash-header'

    export default {
        data(){
            return {
                filteredPosts: []
            }
        },
        components: {
            CardPost
        },
        computed: {
            ...mapState('DASHBOARD', [
                'search'
            ]),
            ...mapState('LAYOUTAPP',[
                'categorias_selecionadas'
            ]),            
        },
        watch: {
            'search': function(){
                this.loadPost()
            },
            'categorias_selecionadas': function(){
                this.loadPost()
            },
        },
        methods: {
            loadPost(){
                const filterList = {
                    search: this.search,
                    sCats: this.categorias_selecionadas
                }
                this.$axios.post('/post/filter/3/0', filterList).then( resp => {
                    this.filteredPosts = resp.data
                })
            }
        },
        mounted(){
            this.$emit('update:title', "Seja bem vindo")
            this.$emit('update:headerCmp', DashHeader)
            this.loadPost()
        }
    };
</script>

