import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import { Container, Form, StyleRedirect } from './styles'
import PrivacyPolicy from 'components/units/PrivacyPolicy/PrivacyPolicy'
import Body from 'components/layout/Body/Body'
import { registerUser, validateEmail, validatePassword } from 'utils/helper'

const Register = ({ retrieveUser }) => {
  const [error, setError] = useState('')
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const handleEmailChange = (value) => {
    setEmail(value)
    const isEmail = validateEmail(value)
    setIsEmailError(!isEmail)
  }

  const handlePasswordChange = (value) => {
    setPassword(value)
    const isPass = validatePassword(value)
    setIsPasswordError(!isPass)
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
      registerUser(email, password, (error, token) => {
        if (error) return setError(error.message)
        retrieveUser(token)
      })
    } catch ({ message }) {
      setError(message)
    }
  }

  return (
    <Body title='Sign up'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div className='classInput'>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Introduce your email'
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              id='emailName'
              name='email'
              error={isEmailError}
              errorText='Enter a valid email address...'
              disabled={disabled}
            />
          </div>
          <div className='classInput'>
            <label>Password</label>
            <Input
              type='password'
              placeholder='Introduce your password'
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              id='passwordName'
              name='password'
              error={isPasswordError}
              errorText='The password should contain more than 6 characters and a uppercase letter'
              disabled={disabled}
              minLength={6}
            />
          </div>
          <PrivacyPolicy />
          <AsyncButton
            text='Sign up'
            loadingText='Loading'
            iconPosition='left'
            type='submit'
            className='orangeGradient'
            textStyles={{ marginLeft: 10 }}
            isLoading={isLoading}
            animated={animatedState}
            disabled={disabled}
          />
          <StyleRedirect>
            Already have an account? <Link to='/login'>Sign in</Link>
          </StyleRedirect>
        </Form>
      </Container>
    </Body>
  )
}

export default Register
