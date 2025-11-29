import { Link, useNavigate } from "react-router-dom"
import logoUrl from "../../assets/logo.png"
import "./Header.scss"
import PrimaryButton from "../ui/PrimaryButton"
import { useAuth } from "../../context/AuthContext"

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
        <img className="header__logo" src={logoUrl} alt="logo" />
        <nav className="header__nav">
            {isAuthenticated ? (
              <>
                <Link to="/">
                    <PrimaryButton type={2} text={"Home"} />
                </Link>
                <Link to="/catalog">
                    <PrimaryButton type={2} text={"Catalog"} />
                </Link>
                <Link to="/cart">
                    <PrimaryButton type={2} text={"Cart"} />
                </Link>
                <div onClick={handleLogout}>
                    <PrimaryButton type={1} text={"Sign Out"} />
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                    <PrimaryButton type={2} text={"Login"} />
                </Link>
                <Link to="/signup">
                    <PrimaryButton type={1} text={"Sign Up"} />
                </Link>
              </>
            )}
        </nav>
    </header>
  )
}
