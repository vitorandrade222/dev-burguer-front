import { useNavigate, useResolvedPath } from "react-router-dom";

import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content
} from "./styles";

import { useUser } from "../../hooks/UserContext";

import { UserIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react";

export function Header() {
  const navigate = useNavigate()

  const { pathname } = useResolvedPath()

  function logoutUser() {
    logout()
    navigate('/login')
  }
  const { logout, userInfo } = useUser()

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'} >Home</HeaderLink>
            <hr />
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserIcon color="#fff" size={24} />
            <div>
              <p>
                Olá, <span> {userInfo.name} </span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <HeaderLink to="/carrinho">
              <ShoppingCartSimpleIcon color="#fff" size={24} />
              Carrinho
            </HeaderLink>

          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}


