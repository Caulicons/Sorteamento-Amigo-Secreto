import logoMobile from 'assets/logo-vertical.svg';
import logoDesktop from 'assets/logo-horizontal.svg';
import participanteDesktop from 'assets/participante-desktop.png';
import participanteMobile from 'assets/participante-mobile.svg';
import styles from './Cabecalho.module.scss';

const Cabecalho = () => {

  return (
    <header className={styles.container}>
      <div className={styles.container_logo}>
        <img src={logoMobile} alt='Logo Sorteado de Amigo Secreto' className={`${styles.imagens_mobile} ${styles.logo_mobile}`} />
        <img src={logoDesktop} alt='Logo Sorteado de Amigo Secreto' className={`${styles.imagens_desktop} ${styles.logo_desktop}`} />
      </div>
      <div className={styles.container_participante}>
        <img src={participanteMobile} alt="Ilustração de uma pessoa fazendo a atividade" className={`${styles.imagens_mobile} ${styles.participante_mobile}`} />
        <img src={participanteDesktop} alt="Ilustração de uma pessoa fazendo a atividade" className={`${styles.imagens_desktop} ${styles.participante_desktop}`} />
      </div>
    </header>
  )
}

export default Cabecalho;