import '@testing-library/jest-dom'

import { PasswordGenerator } from '../components/password'
import { fireEvent, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Password Generator', () => {
  it('should be able render password generator input', () => {
    const wrapper = render(<PasswordGenerator />)

    const input = wrapper.getByPlaceholderText('Nova senha')

    expect(input).toBeInTheDocument()
  })

  it('should be able generate some random password', () => {
    const wrapper = render(<PasswordGenerator />)

    const button = wrapper.getByTestId('button-generate-password')

    fireEvent.click(button)

    wrapper.debug()

    expect(
      wrapper.getByPlaceholderText('Nova senha').ariaValueText,
    ).toBeDefined()
  })
})
