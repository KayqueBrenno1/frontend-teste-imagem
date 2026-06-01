import { renderizarPagina } from "../main.js"

export function criarLogin () {
    const container = document.createElement('form')

    const inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.placeholder = 'Digite o seu e-mail'
    inputEmail.className = 'input-login'

    const inputSenha = document.createElement('input')
    inputSenha.type = 'password'
    inputSenha.placeholder = 'Digite a sua senha'
    inputSenha.className = 'input-login'

    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'button'
    button.textContent = 'ENTRAR'
    button.onclick = () => renderizarPagina('preview')

    container.append(inputEmail, inputSenha, button)

    return container
}