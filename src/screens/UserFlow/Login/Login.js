import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { authenticateUser, validateEmail, validatePassword } from 'utils/helper'

import Body from 'components/layout/Body/Body'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'

import { ChangePassword, Container, Form, Label, StyleRedirect, StyledError } from './styles'

const Login = ({ onLogin }) => {
  const [error, setError] = useState('')
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPassError, setIsPassError] = useState(false)

  const history = useHistory()

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
      history.push('/profile')
    } catch ({ message }) {
      setError(message)
    }
  }
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
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
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
