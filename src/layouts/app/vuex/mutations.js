export function CARREGAR_CATEGORIAS (state, payload) {
    state.categorias = payload
};
export function TOGGLE_CATEGORIAS (state, payload) {
    const index = state.categorias_selecionadas.findIndex( item => item == payload )
    if(index == -1) state.categorias_selecionadas.push(payload)
    else state.categorias_selecionadas.splice(index, 1)
};

