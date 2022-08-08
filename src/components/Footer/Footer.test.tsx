import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useListaDeParticipantes from "state/hooks/useListaDeParticipantes";
import { useSorteador } from "state/hooks/useSorteador";
import Footer from './Footer';

jest.mock('state/hooks/useListaDeParticipantes');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

const mockSorteador = jest.fn()
jest.mock('state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteador
  }
});


describe('quando não existe participantes o suficiente', () => {

  beforeEach(() => { (useListaDeParticipantes as jest.Mock).mockReturnValue([]) })
  test('a brincadeira não pode ser iniciada', () => {

    render(<RecoilRoot>
      <Footer />
    </RecoilRoot>)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  })
})

describe('quando houver participantes suficientes.', () => {
  const participantes = ['amaral ', ' romario ', 'casa grande ', 'robson ']
  beforeEach(() => { (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes) })

  test('A brincadeira pode ser iniciada!.', () => {

    render(<RecoilRoot>
      <Footer />
    </RecoilRoot>)

    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/Sorteio')
    expect(mockSorteador).toHaveBeenCalledTimes(1)
  })
})