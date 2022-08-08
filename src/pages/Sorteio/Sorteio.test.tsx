import { act, fireEvent, render, screen } from "@testing-library/react";
import { notDeepEqual } from "assert";
import { RecoilRoot } from "recoil";
import useListaDeParticipantes from "state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "state/hooks/useResultadoSorteio";
import Sorteio from './Sorteio';

jest.mock('state/hooks/useListaDeParticipantes')
jest.mock('state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('na página de sorteio', () => {
  const participantes = [
    'amaral',
    'cabral',
    'lebral',
  ]

  const resultado = new Map([
    ['amaral', 'cabral'],
    ['cabral', 'jurimeu'],
    ['jurimeu', 'amaral']
  ])

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)

  })

  test('todos participantes podem exibir seu amigo secreto.', () => {

    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1) /* O ' + 1' é por causa que já temos uma como padrão. */
  })

  test('o amigo secreto é exibido quando solicitado.', () => {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const select = screen.getByPlaceholderText('Selecione seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const button = screen.getByRole('button');
    fireEvent.click(button)

    const mensagem = screen.getByRole('alert');
    expect(mensagem).toBeInTheDocument()
  })

  test('o amigo secreto é exibido quando solicitado.', () => {
    jest.useFakeTimers()

    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const select = screen.getByPlaceholderText('Selecione seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const button = screen.getByRole('button');
    fireEvent.click(button)

    const mensagem = screen.getByRole('alert');
    expect(mensagem).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    });
    
    expect(mensagem).not.toBeInTheDocument()
  })


  test('O componente Sorteio deve conter essa estrutura', () => {

    const { container } = render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    expect(container).toMatchSnapshot()
  })
})