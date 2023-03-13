import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1 - Renderizar o componente `render`
    // 2 - Selecionar o elemento a ser testado `screen` (queries) - getByLabel, getByText
    // 3 - Expect - assertion - comparação (espero que renderize a logo branca)

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})

describe('<Logo />', () => {
  it('should render a black label when color is passed', () => {
    // 1 - Renderizar o componente `render`
    // 2 - Selecionar o elemento a ser testado `screen` (queries) - getByLabel, getByText
    // 3 - Expect - assertion - comparação (espero que renderize a logo branca)

    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
