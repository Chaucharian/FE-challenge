import { theme } from "@/app/theme";
import { Flex } from "native-base";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <Flex bg={theme.colors.primary}>
      <Header />
      <Flex
        p={theme.space["1"]}
        mr={{ lg: theme.space[16] }}
        ml={{ lg: theme.space[16] }}
        mt="40px"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
