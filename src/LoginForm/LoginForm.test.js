import React from 'react';
import LoginForm from './LoginForm';

import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';

describe('LoginForm', () => {
  it('should run loginCredentials on button click', () => {
    const mockLoginCredentials = jest.fn()
    const { getByTestId, getByLabelText } = render(
      <LoginForm 
        isValid={true}
        email=''
        password=''
        handleChange={ jest.fn()}
        handleSubmit={ mockLoginCredentials }
      />
    )

    const emailInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const button = getByTestId('loginButton')
    
    fireEvent.change(emailInput, {target: {name: 'email', value: 'bob@bob.com'}})
    fireEvent.change(passwordInput, {target: {name: 'password', value: '12345'}})
    fireEvent.click(button)
    
    expect(mockLoginCredentials).toBeCalledTimes(1)
  })
})