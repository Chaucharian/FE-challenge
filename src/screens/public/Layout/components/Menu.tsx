import { Flex } from "native-base";
import styled from "styled-components";
import { routes } from "@/screens/public/routes";
import { Route } from "@/commons/types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { theme } from "@/app/theme";

export interface MenuProps {
  open: boolean;
  options?: Route[];
  onOptionClick: () => void;
}

export const defaultOptions = routes;

const Ul = styled.ul`
  margin-top: 72px;
  list-style-type: none;
  text-decoration: none;
  a {
    font-size: 22px;
    font-family: "Urbanist";
    color: ${theme.colors.white};
    text-decoration: none;
  }
`;

const Menu: FC<MenuProps> = ({
  open,
  options = defaultOptions,
  onOptionClick,
}) => {
  return (
    <Flex
      position="static"
      zIndex="1"
      height="100vh"
      width="100%"
      display={open ? "block" : "none"}
    >
      <Flex pr={{ lg: theme.space[16] }} pl={{ lg: theme.space[16] }}>
        <Ul>
          {options.map(({ name, path }) => (
            <li key={name} onClick={onOptionClick}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </Ul>
      </Flex>
    </Flex>
  );
};

export default Menu;
