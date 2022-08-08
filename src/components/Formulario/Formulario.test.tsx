import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";


describe('Testes do formulário', () => {
  test('Verifica ser o formulario está submetendo um input vazio.', () => {

    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    /* Encontra input */
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    /* Encontra button */
    const botao = screen.getByRole('button')

    /* Verificar ser o valor existe */
    expect(input).toBeInTheDocument

    /* Verifica ser o botão está desativo */
    expect(botao).toBeDisabled
  })

  test('Adicionar um novo participante caso exista um nome preenchido.', () => {

    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    /* Encontra input */
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    /* Encontra button */
    const botao = screen.getByRole('button')

    /* Inserir um valor no input */
    fireEvent.change(input, {
      target: {
        value: 'Opa meu bom.'
      }
    })

    /* Clicar o button */
    fireEvent.click(botao)

    /* input deve receber focus depois de submetido. */
    expect(input).toHaveFocus()

    /* Input deve ficar vazio após form ser submetido. */
    expect(input).toHaveValue('')
  })

  test('Nomes duplicados não podem ser adicionados na lista.', () => {

    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    /* Inserir um valor no input */
    fireEvent.change(input, {
      target: {
        value: 'Opa meu bom.'
      }
    })
    /* Clicar o button */
    fireEvent.click(botao)
    /* Adicionar novamente o mesmo nome */
    fireEvent.change(input, {
      target: {
        value: 'Opa meu bom.'
      }
    })
    /* Clicar o button */
    fireEvent.click(botao)
    
    /* Mostra alerta */
    const mensagemDeError = screen.getByRole('alert');
    expect(mensagemDeError.textContent).toBe('Nomes duplicados não são permitidos');
  })

  test('Mensagem de erro deve desaparecer após N segundos.', () => {

    jest.useFakeTimers()

    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')

    /* Inserir um valor no input */
    fireEvent.change(input, {
      target: {
        value: 'Opa meu bom.'
      }
    })
    /* Clicar o button */
    fireEvent.click(botao)
    /* Adicionar novamente o mesmo nome */
    fireEvent.change(input, {
      target: {
        value: 'Opa meu bom.'
      }
    })
    /* Clicar o button */
    fireEvent.click(botao)
    
    /* Mostra alerta */
    let mensagemDeError = screen.queryByRole('alert');
    expect(mensagemDeError).toBeInTheDocument;

    act(() => {
      jest.runAllTimers()
    });

    /* Mostra alerta */
    mensagemDeError = screen.queryByRole('alert');
    expect(mensagemDeError).toBeNull()
  })
})