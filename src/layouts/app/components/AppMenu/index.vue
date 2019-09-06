<template>
    <q-drawer
      @input="$emit('update:leftDrawerOpen', $event)"
      :value='leftDrawerOpen'
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>

        <q-item to='/' exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header>Nossas Categorias</q-item-label>
        
        <item-menu-categoria 
            v-for='(item, index) in categorias' :key='index'
            v-bind='item'
        />

        <q-item-label header>Administrativo</q-item-label>

        <q-item to='/gerenciar-posts' exact>
          <q-item-section avatar>
            <q-icon name="settings_applications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gerenciar postagens</q-item-label>
          </q-item-section>
        </q-item>
      

      </q-list>
    </q-drawer>
</template>
<script>
    import ItemMenuCategoria from './component/item-menu-categoria'
    import { mapState } from 'vuex'

    export default {
        props: [
            'leftDrawerOpen'
        ],
        components:{
            ItemMenuCategoria
        },
        computed: {
            ...mapState('LAYOUTAPP', {
                categorias: s => s.categorias
            })
        }
    };
</script>  