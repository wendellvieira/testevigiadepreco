export function SET_CATEGORIAS (state, payload) {
    state.categorias = payload;
};
export function REGISTRAR_CATEGORIA (state, item) {
    state.categorias.push(item);
};
export function DELETE_CATEGORIA (state, id) {
    const index = state.categorias.findIndex( item => item.id == id )
    state.categorias.splice(index, 1)
};
export function UPDATE_CATEGORIA (state, payload) {
    const index = state.categorias.findIndex( item => item.id == payload.id )
    state.categorias[index].title = payload.title
};

export function SET_POSTS (state, payload) {
    state.posts = payload;
};
export function REGISTRAR_POST (state, item) {
    state.posts.push(item);
};
export function DELETE_POST (state, id) {
    const index = state.posts.findIndex( item => item.id == id )
    state.posts.splice(index, 1)
};





