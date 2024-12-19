import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
  return (
    <div>
      <div>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo</p>
      </div>
      <div>
        <img src={circuloColorido} />
      </div>
    </div>
  )
}