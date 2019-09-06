<template>    
    <q-infinite-scroll ref='infiniteScroll' @load="onLoad" :offset="250">
        <div class="q-pt-xl row">
            <card-post 
                v-for='(item, index) in filteredPosts' :key='index'
                :data='item'
            />
        </div>
        <template v-slot:loading>
            <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
            </div>
        </template>
    </q-infinite-scroll>    
</template>
<script>
    import {mapState} from 'vuex'
    import CardPost from './components/card-item'
    import DashHeader from './components/dash-header'

    export default {
        data(){
            return {
                filteredPosts: [],
                qnt: 3,
                page: 0
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
                this.reset()
            },
            'categorias_selecionadas': function(){
                this.reset()
            },
        },
        methods: {
            onLoad(index, done){
                this.page++
                this.loadPost( data => {
                    if(!data.length) {
                        this.$refs.infiniteScroll.stop()
                    }else{
                        const qnt = this.filteredPosts.length
                        data.forEach( item => {
                            const index = this.filteredPosts.findIndex( findIndex => findIndex.id == item.id )
                            if(index == -1) this.filteredPosts.push(item)
                        })
                        // if(qnt == this.filteredPosts.length) this.$refs.infiniteScroll.stop()
                    }                    
                    done()
                })
            },
            loadPost(callback = null){
                const filterList = {
                    search: this.search,
                    sCats: this.categorias_selecionadas
                }
                const page = this.page-1 < 0 ? 0 : this.page-1
                console.log(`/post/filter/${this.qnt}/${page}`)
                this.$axios.post(`/post/filter/${this.qnt}/${page}`, filterList).then( resp => {
                    if(!callback){
                        this.filteredPosts = resp.data
                        this.page = 0
                        this.$refs.infiniteScroll.resume()
                    
                    }else callback( resp.data )
                })
            },
            reset(){
                this.page = 0
                this.$refs.infiniteScroll.resume()
                this.loadPost()
            }
        },
        mounted(){
            this.$emit('update:title', "Seja bem vindo")
            this.$emit('update:headerCmp', DashHeader)

            // this.resume()
            
        }
    };
</script>

