import { NavLink } from 'react-router-dom';
import { Aside, Logo, Navi, Span } from './SideBar.styled';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: #0b5cc7;
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const SideBar = () => {
  
  return (
    <Aside>
      <NavLink to="/">
        <Logo>
          Car
          <Span>Shop</Span>
        </Logo>
      </NavLink>

      <Navi>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navi>
    </Aside>
  );
};

export default SideBar;
