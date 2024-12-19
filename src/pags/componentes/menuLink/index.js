import { Link, useLocation } from "react-router-dom";
import styles from './menuLink.module.css';


export default function MenuLink({ children, destino }) {
  const localizacao = useLocation();

  return (
    <Link className={`
      ${styles.link} 
      ${localizacao.pathname === destino ? styles.linkDestacado : ''}
    `} to={destino}>
      {children}
    </Link>
  )
}