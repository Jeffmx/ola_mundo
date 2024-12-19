import './header.css';
import MenuLink from "../menuLink";

export default function Header() {
  return (
    <header className="navegacao">
      <MenuLink destino={'/'}>Inicio</MenuLink>
      <MenuLink destino={'/sobremin'}>Sobre Mim</MenuLink>
    </header>
  )
}