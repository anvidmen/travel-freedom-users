
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/

export const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase())
export const validatePassword = (password) => PASSWORD_REGEX.test(password)

const users = [
  {
    email: 'juan@mail.com',
    password: 'Juan1992'
  }
]

export const registerUser = (email, password) => {
  const newUsers = []
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if (user.email === email) console.error('this user already exists')
    else {
      newUsers.push(email, password)
      localStorage.setItem('travelfreedom', 'HE ENTRADO!!!!')
      console.log(`The user ${email} has been successfully registered`)
    }
  }
}
