import { useRecoilValue } from "recoil"
import { mensagemDeError } from "state/atoms"

export const useMensagemDeError = () => {
  const mensagemError = useRecoilValue(mensagemDeError)
  return mensagemError
}