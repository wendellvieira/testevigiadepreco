export function CATEGORIE_IS_SELECTED (state) {
    return (id) => {
        const index = state.categorias_selecionadas.findIndex( item => item == id )
        return index != -1
    };
}; 