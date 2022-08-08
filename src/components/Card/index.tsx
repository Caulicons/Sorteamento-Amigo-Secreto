import { Children } from 'react';
import styles from './Card.module.scss'

export const Card: React.FC = ({ children }) => {

  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export default Card;