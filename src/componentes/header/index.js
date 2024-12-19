import './header.css';
import MenuLink from "../menuLink";

export default function Header() {
  return (
    <header className="navegacao">
      <MenuLink destino={'/'}>Inicio</MenuLink>
      <MenuLink destino={'/sobremim'}>Sobre Mim</MenuLink>
    </header>
  )
}