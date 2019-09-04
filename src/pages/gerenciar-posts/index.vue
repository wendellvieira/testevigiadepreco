<template>
    <q-page>
        <div class="q-pt-xl row q-gutter-md q-px-md">
            <div class="col-8">
                <gerenciamento-de-postagens/>
            </div>
            <div class="col">
                <gerenciamento-de-categorias />
            </div>
        </div>
    </q-page>
</template>
<script>
    import GerenciamentoDeCategorias from './components/gerenciamento-de-categorias'
    import GerenciamentoDePostagens from './components/gerenciamento-de-postagens'

    export default {
        components: {
            GerenciamentoDeCategorias,
            GerenciamentoDePostagens
        }
        
    };
</script>