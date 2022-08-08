import styles from './DefaultPage.module.scss';
import Cabecalho from "components/Cabecalho";
import { Outlet, useParams } from "react-router-dom";

const DefaultPage =  () => {
  const params = useParams()

  return (
    <>
      <Cabecalho/>
      <section className={styles.section}>
      {!params.Cardapio && <h3 className={styles.section_titulo}>Quem vai tirar o papelzinho?</h3>}
      {params.Sorteio && <h3 className={styles.section_titulo}>Quem vai tirar o papelzinho?</h3>}
        <Outlet/>
      </section>
    </>
  )
};

export default DefaultPage;

