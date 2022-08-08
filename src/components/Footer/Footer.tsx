import { useNavigate } from "react-router-dom";
import useListaDeParticipantes from "state/hooks/useListaDeParticipantes";
import sacolas from 'assets/sacolas.png';
import styles from './Footer.module.scss'
import { useState } from "react";
import { useSorteador } from "state/hooks/useSorteador";

const Footer = () => {
  const [poucosParticipantes, setPoucosParticipantes] = useState<boolean>(false);
  const participantens = useListaDeParticipantes();

  const irParaOSorteio = useNavigate();
   const sortear = useSorteador(); 

  const iniciarBrincadeira = () => {
    
    if(participantens.length < 3){

      setPoucosParticipantes(true)
      setTimeout( () => setPoucosParticipantes(false), 3000)
      return
    }
    sortear() 
    irParaOSorteio('/Sorteio');
  }

  return (
    <footer className={styles.footer}> 
      <button onClick={iniciarBrincadeira} className={styles.footer_button}>
        Iniciar Brincadeira !
      </button>
      {poucosParticipantes && <p role='alert'>O sorteio deve ter no mínimo 3 participantes.</p>}
      <img src={sacolas} alt="Sacola de presentes." className={styles.footer_sacolas}/>
    </footer>
  );
}

export default Footer;