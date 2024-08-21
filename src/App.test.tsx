import { test, expect } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

test('should render headline', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
