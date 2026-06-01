'use strict'

import { criarLogin } from "./pages/login.js"
import { criarPreview } from "./pages/preview.js"

const paginas = {
    preview: {
        titulo: 'PREVIEW DE IMAGENS',
        renderizar: criarPreview
    },
    login: {
        titulo: 'Login no Sistema XYZ',
        renderizar: criarLogin
    }
}

export function renderizarPagina(nomePagina) {
    const pagina = paginas[nomePagina].renderizar()
    document.getElementById('main').replaceChildren(pagina)
}

renderizarPagina('login')