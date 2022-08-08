import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaDeParticipantes, mensagemDeError } from "state/atoms"

export const useAdicionarParticipantes = () => {
  const setListaDeParticipantes = useSetRecoilState(listaDeParticipantes);
  const listaAtual = useRecoilValue(listaDeParticipantes);
  const setMensagemDeError = useSetRecoilState(mensagemDeError)

  return (nome: string) => {
    if(listaAtual.includes(nome)){
      setMensagemDeError('Nomes duplicados não são permitidos')
      setTimeout(()=> {
        setMensagemDeError('')
      }, 3500)
      return
    }
    return setListaDeParticipantes(listaAnterior => [...listaAnterior, nome])
  }
}