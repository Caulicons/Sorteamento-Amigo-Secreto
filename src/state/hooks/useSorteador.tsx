import { realizarSorteio } from "helpers/resultadoSorteio/realizarSorteio";
import { useSetRecoilState } from "recoil";
import { resultadoSorteio } from "state/atoms";
import useListaDeParticipantes from "./useListaDeParticipantes";

export const useSorteador = () => {

  const participantes = useListaDeParticipantes()
  const setResposta = useSetRecoilState(resultadoSorteio)

  return () => {
    const resposta = realizarSorteio(participantes);
    setResposta(resposta)
  }
}
