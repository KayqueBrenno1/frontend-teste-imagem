import { renderizarPagina } from "../main.js"

export function criarPreview() {
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const input = document.createElement('input')
    input.id = 'preview-input'
    input.classList.add('preview-input')
    input.type = 'file'
    input.accept = 'image/*'

    const label = document.createElement('label')
    label.classList.add('preview-label')
    label.htmlFor = 'preview-input'

    const image = document.createElement('img')
    image.id = 'preview-image'
    image.classList.add('preview-image')
    image.src = './img/upload-icon.svg'

    previewContainer.append(input, label, image)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const btnSalvar = document.createElement('button')
    btnSalvar.classList.add('button')
    btnSalvar.type = 'button'
    btnSalvar.id = 'upload-button'
    btnSalvar.textContent = 'Salvar'

    const btnCancelar = document.createElement('button')
    btnCancelar.classList.add('button')
    btnCancelar.type = 'button'
    btnCancelar.textContent = 'Cancelar'
    btnCancelar.onclick = () => renderizarPagina('login')

    buttonContainer.append(btnSalvar, btnCancelar)

    container.append(previewContainer, buttonContainer)
    return container
}