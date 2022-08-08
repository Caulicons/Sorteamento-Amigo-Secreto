import { useState } from "react";
import useListaDeParticipantes from "state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "state/hooks/useResultadoSorteio";
import styles from './Sorteio.module.scss';
import aviãoDePapel from 'assets/aviao.png'

const Sorteio = () => {

  const participantes = useListaDeParticipantes();
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const [participante, setParticipante] = useState('')
  const sorteio = useResultadoSorteio()

  const mostrandoAmigoSecreto = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (sorteio.has(participante)) {
      setAmigoSecreto(sorteio.get(participante)!)
    }
  }

  return (
    <>
      <form onSubmit={mostrandoAmigoSecreto} className={styles.form}>
        <select
          className={styles.form_select}
          name="selecionarParticipante"
          placeholder="Selecione seu nome"
          onChange={evento => setParticipante(evento.target.value)}
          value={participante}
        >
          <option>Selecione seu nome</option>
          {participantes.map(participante => <option  className={styles.form_option} value={participante} key={participante}>{participante}</option>)}
        </select>
        <button
          type='submit'
          className={styles.form_button}> Sortear!</button>
      </form>
      {amigoSecreto && <p
        className={styles.form_resultado}
        role='alert'
      >
        {amigoSecreto}</p>}

      <img src={aviãoDePapel} alt="Aviãozinho de papel" className={styles.aviaozinho}/>
    </ >
  )
}

export default Sorteio;