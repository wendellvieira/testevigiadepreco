<template>
    <q-header elevated>
      <q-toolbar>

        <q-btn flat dense round
          @click="$emit('update:leftDrawerOpen', !leftDrawerOpen)">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{title}}
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>
</template>
<script>
    export default {
        props: [
          'leftDrawerOpen',
          'title'
        ]
    };
</script>  