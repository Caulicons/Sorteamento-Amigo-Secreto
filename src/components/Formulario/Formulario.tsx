import { useRef, useState } from "react";
import { useAdicionarParticipantes } from "state/hooks/useAdicionarParticipante";
import { useMensagemDeError } from "state/hooks/useMensagemDeError";
import styles from './Formulario.module.scss';

const Formulario = () => {
  const [nome, setNome] = useState<string>('');
  const adicionarNaLista = useAdicionarParticipantes();
  const inputRef = useRef<HTMLInputElement>(null)

  const mensagemError = useMensagemDeError()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (nome) {
      adicionarNaLista(nome as string)
      setNome('');
      inputRef.current?.focus()
    }
  }

  return (
   <><form onSubmit={adicionarParticipante} className={styles.form}>
      <input
        className={styles.form_input}
        ref={inputRef}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />
      <button type="submit" className={styles.form_button}>Adicionar</button>

    </form>
    {mensagemError && <p role='alert' className={styles.mensagemError}>{mensagemError}</p>}
    </>
  )
}

export default Formulario;