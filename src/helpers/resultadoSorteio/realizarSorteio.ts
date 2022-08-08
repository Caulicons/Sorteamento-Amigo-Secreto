import { shuffle } from "ts-shuffle";

export function realizarSorteio (listaParticipantes: string[]) {
  const participantes = [...listaParticipantes]
  const tamanhoDaLista = participantes.length
  const listaEmbaralhada = shuffle(participantes)
  const resposta = new Map<string, string>()
  for (let index = 0; index < tamanhoDaLista; index++) {

    const indiceDoAmigo = index === tamanhoDaLista - 1 ? 0 : index + 1
    resposta.set(listaEmbaralhada[index], listaEmbaralhada[indiceDoAmigo])
  }
  return resposta
} 


