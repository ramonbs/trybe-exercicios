import { nanoid } from 'nanoid'

const randomPassword = nanoid()
console.log(randomPassword)

const generator = () => nanoid(21)

const button = document.querySelector('button')
const password = document.querySelector('#password')

button.addEventListener('click', () => {
  password.innerHTML = generator()
})

export { generator }
