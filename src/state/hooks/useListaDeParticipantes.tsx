import { useRecoilValue } from "recoil";
import { listaDeParticipantes } from "state/atoms";

const useListaDeParticipantes = () => {
  return useRecoilValue(listaDeParticipantes)
};

export default useListaDeParticipantes; 