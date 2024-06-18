import '@testing-library/jest-dom'

import { PasswordGenerator } from '../components/password'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Password Generator', () => {
  beforeEach(() => {
    render(<PasswordGenerator />)
  })

  it('should be able render password generator input', () => {
    const input = screen.getByPlaceholderText('Nova senha')

    expect(input).toBeInTheDocument()
  })

  it('should be able generate some random password', () => {
    const button = screen.getByTestId('button-generate-password')

    fireEvent.click(button)

    expect(
      screen.getByPlaceholderText(
        (content, element) =>
          element?.tagName.toLowerCase() === 'input' && content.length > 0,
      ),
    )
  })
})
