import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import s from "./Header.module.css";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </Container>
    </header>
  );
}
