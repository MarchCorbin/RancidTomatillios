import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  
  it('should render a <Home /> component', () => {
    const { getByTestId } = render(<App />)
    const header = getByTestId('header')
    expect(header).toBeInTheDocument()
  })

})
