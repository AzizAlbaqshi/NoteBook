import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillFire } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
// export const GlobalStyle = createGlobalStyle`
// body {
//     background-color: ${(props) => props.theme.backgroundColor};
//     color: ${(props) => props.theme.mainColor};
// }
// `;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }

  p {
    vertical-align: middle;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostersWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const PosterImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Text = styled.p`
  text-align: center;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 10px;

  &.active {
    color: ${(props) => props.theme.red};
  }
`;

export const DeleteB = styled.div`
  text-align: center;
  color: ${(props) => props.theme.red};
`;

export const AiFillFireStyled = styled(AiFillFire)`
  color: ${(props) => props.theme.mainColor};
  margin-left: 80%;
`;

export const CreateButtonStyled = styled.button`
  /* .button { */
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  background-color: white;
  color: black;
  border: 2px solid #555555;
  /* }

  .button5:hover {
    background-color: #555555;
    color: white;
  } */
`;

export const StoreItemImage = styled.img`
  width: 15em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  justify-content: center;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
`;

export const SignoutStyled = styled(FaSignOutAlt)`
  color: ${(props) => props.theme.red};
  size: "2em";
  margin: 5px;
`;
