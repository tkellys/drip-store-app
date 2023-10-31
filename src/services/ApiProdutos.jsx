import api from "./ApiDripStore";

export  const buscarProdutos = async () => {
    const response = await api.get("/produtos");
    return response.data;
}

export  const buscarProdutosEmAlta = async () => {
    const response = await api.get("/produtos-em-alta");
    return response.data;
}