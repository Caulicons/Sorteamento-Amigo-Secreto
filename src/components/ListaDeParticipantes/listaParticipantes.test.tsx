import { render, screen } from "@testing-library/react";

import ListaParticipantes from "./ListaParticipantes";
import { RecoilRoot } from "recoil";
import useListaDeParticipantes from "state/hooks/useListaDeParticipantes";

jest.mock('state/hooks/useListaDeParticipantes') 

describe('lista de participantes deve começar vazio', () => {
  
  beforeEach(() =>  (useListaDeParticipantes as jest.Mock).mockReturnValue([]) )

  test('Compononente deve iniciar sem renderizar nenhum oponenete.', () => {

    render(<RecoilRoot>
      <ListaParticipantes />
    </RecoilRoot>)

    const itens = screen.queryAllByRole("listitem")
    expect(itens).toHaveLength(0)
  })
})

describe('lista de participante quando conter participantes', () => {
  const participantes = [' amaral ','polopoles' ]
  beforeEach(() => { (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes) })

  test('deve renderizer os nomes dos participantes em li', () => {

    render(<RecoilRoot>
      <ListaParticipantes />
    </RecoilRoot>)

    const itens = screen.queryAllByRole("listitem")
    expect(itens).toHaveLength(participantes.length)
  })
}) 
