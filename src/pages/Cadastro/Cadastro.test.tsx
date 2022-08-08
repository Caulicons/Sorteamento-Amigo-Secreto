import { render } from "@testing-library/react"
import Footer from "components/Footer/Footer"
import Formulario from "components/Formulario/Formulario"
import ListaParticipantes from "components/ListaDeParticipantes/ListaParticipantes"
import { RecoilRoot } from "recoil"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('O componente Cadastro deve conter essa estrutura', () => {

  test('Tirar um print', () => {

    const { container } = render(<RecoilRoot>
      <Formulario />
      <ListaParticipantes />
      <Footer />
    </RecoilRoot>)

    expect(container).toMatchSnapshot()
  })
})