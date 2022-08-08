import { useRecoilValue } from "recoil"
import { resultadoSorteio } from "state/atoms"

export const useResultadoSorteio = () => {
  return useRecoilValue(resultadoSorteio)
}