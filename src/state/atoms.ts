import { atom } from "recoil";

export const listaDeParticipantes = atom<string[]>({
  key: 'listaDeParticipantes',
  default: []
});

export const mensagemDeError = atom<string>({
  key: 'mensagemDeError',
  default: ''
})

export const resultadoSorteio = atom<Map<string, string>>({
  key: 'resultadoSorteio',
  default: new Map()
})