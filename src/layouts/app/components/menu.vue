<template>
    <q-drawer
      @input="$emit('update:leftDrawerOpen', $event)"
      :value='leftDrawerOpen'
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>

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
    export default {
        props: ['leftDrawerOpen']
    };
</script>  