async function listaVideos() {
    const conexao = await fetch("http://127.0.0.1:3000/videos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida

}

export const conectaApi = {
    listaVideos
}
