import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import { ChangePassword, Container, Form, Label, StyleRedirect, StyledError } from './styles'
import Body from 'components/layout/Body/Body'
import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider } from '../../../components/firebase/firebase-config';


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase())
const validatePassword = (password) => PASSWORD_REGEX.test(password)

const users = [
  {
    email: 'juan@mail.com',
    password: 'Juan1992'
  }
]

const authenticateUser = (email, password) => {
  let authenticated = false
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if (user.email === email && user.password === password) {
      authenticated = true
      localStorage.setItem('travelfreedom', 'HE ENTRADO!!!!')
    }
  }
  if (authenticated) console.log('the user is correct')
  else console.error('the user is incorrect')
}

const Login = ({ onLogin }) => {
  const [error, setError] = useState('')
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [isEmailError, setIsEmailError] = useState(false)
  const [isPassError, setIsPassError] = useState(false)

  const handleEmailChange = (value) => {
    setEmail(value)
    const isEmail = validateEmail(value)
    setIsEmailError(!isEmail)
  }

  const handlePasswordChange = (value) => {
    setPassword(value)
    const isPass = validatePassword(value)
    setIsPassError(!isPass)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    setAnimatedState(true)
    setIsDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsDisabled(false)
      setIsLoading(false)
    }, 2000)

    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return setError(error.message)
        onLogin(token)
      })
    } catch ({ message }) {
      setError(message)
    }
  }


  const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                // dispatch(
                //     login( user.uid, user.displayName )
                // )
                console.log(user)
            });
}

// const handleFacebookLogin = () => {
//     dispatch( startFacebookLogin() );
// }
// const handleGitHubLogin = () => {
//     dispatch( startGitHubLogin() );
// }


  return (
    <Body title='Acceso' isLoggedIn={false}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className='classInput'>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Introduce tu email'
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              id='emailName'
              name='emailName'
              error={isEmailError}
              errorText='Enter a valid email address...'
              disabled={disabled}
            />
          </div>
          <div className='classInput'>
            <label>Password</label>
            <Input
              type='password'
              placeholder='Introduce tu contraseña'
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              id='passName'
              name='passName'
              error={isPassError}
              errorText='The password to contain more than 6 characters and a uppercase letter'
              disabled={disabled}
              minLength={6}
            />
          </div>
          <ChangePassword>
            <Label htmlFor='forgotpassword'>
              <Link to='/recover-password/:hash'>Has olvidado tu contraseña?</Link>
            </Label>
          </ChangePassword>
          {/* {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )} */}
          <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <div 
                        className="google-btn"
                        // onClick={ handleFacebookLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="facebook-icon" src="https://img1.freepng.es/20180319/iyw/kisspng-facebook-logo-social-media-computer-icons-icon-facebook-drawing-5ab02fb69f99c4.9538101315214959906537.jpg" alt="facebook button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with facebook</b>
                        </p>
                    </div>
                    <div 
                        className="google-btn"
                        // onClick={ handleGitHubLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="github-icon" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png" alt="github button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with github</b>
                        </p>
                    </div>
                </div>
          <AsyncButton
            text='Acceder'
            loadingText='Accediendo'
            iconPosition='left'
            type='submit'
            className='blueGradient'
            textStyles={{ marginLeft: 10 }}
            isLoading={isLoading}
            animated={animatedState}
            disabled={disabled}
          />
          <StyleRedirect>
            No tienes cuenta? <Link to='/register'> Registrate</Link>
          </StyleRedirect>
        </Form>
      </Container>
    </Body>
  )
}

export default Login
