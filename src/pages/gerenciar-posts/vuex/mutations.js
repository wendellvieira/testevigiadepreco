export function SET_CATEGORIAS (state, payload) {
    state.categorias = payload;
};
export function REGISTERAR_CATEGORIA (state, item) {
    state.categorias.push(item);
};
export function DELETE_CATEGORIA (state, id) {
    const index = state.categorias.findIndex( item => item.id == id )
    state.categorias.splice(index, 1)
};


