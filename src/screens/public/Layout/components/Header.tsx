import { FC } from "react";
import { Box, Flex, Text } from "native-base";
import { useLocation } from "react-router-dom";
import { BurgerButton } from "@/components";
import { useOpen } from "@/commons/hooks";
import { routes } from "@/screens/public";
import { theme } from "@/app/theme";
import Menu from "./Menu";

const Header: FC<any> = () => {
  const { open, setOpen } = useOpen(false);
  const location = useLocation();
  const title = routes.find((route) => route.path === location.pathname)?.name;

  const changeMenuState = () => setOpen(!open);

  return (
    <Box
      position="fixed"
      zIndex="1"
      width="100%"
      p={theme.space["0.5"]}
      bg={theme.colors.primary}
    >
      <Flex justifyContent="space-between" direction="row">
        <BurgerButton onClick={changeMenuState} open={open} />
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Text
            color={theme.colors.white}
            fontWeight={theme.fontWeights.bold}
            fontSize="15px"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <Menu open={open} onOptionClick={changeMenuState} />
    </Box>
  );
};

export default Header;
