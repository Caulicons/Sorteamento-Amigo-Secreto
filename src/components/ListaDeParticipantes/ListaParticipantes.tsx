import useListaDeParticipantes from "state/hooks/useListaDeParticipantes";
import styles from './ListaParticipantes.module.scss';


const ListaParticipantes = () => {

  const participantes: string[] = useListaDeParticipantes()

  return (
    <ul className={styles.participantes}>
      {participantes.map( participante => <li className={styles.participante} key={participante}>{participante}</li> )}
    </ul>
  )
};  

export default ListaParticipantes;