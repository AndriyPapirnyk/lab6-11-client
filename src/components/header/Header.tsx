import { Link } from "react-router-dom"
import logoUrl from "../../assets/logo.png"
import "./Header.scss"
import PrimaryButton from "../ui/PrimaryButton"

export default function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logoUrl} alt="logo" />
        <nav className="header__nav">
            <Link to="/">
                <PrimaryButton type={2} text={"Home"} />
            </Link>
            <Link to="/catalog">
                <PrimaryButton type={2} text={"Catalog"} />
            </Link>
            <Link to="/cart">
                <PrimaryButton type={2} text={"Cart"} />
            </Link>
        </nav>
    </header>
  )
}
