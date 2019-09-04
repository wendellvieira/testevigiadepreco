<template>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="$emit('update:leftDrawerOpen', !leftDrawerOpen)"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Sistem Blog
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>
<script>
    export default {
        props: ['leftDrawerOpen']
    };
</script>  