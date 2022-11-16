import { Flex } from "native-base";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { useOpen } from "@/commons/hooks";
import { useEffect } from "react";

const BurgerButton = ({ open: controlledOpen, onClick }: any) => {
  const { open, setOpen } = useOpen();

  const click = () => {
    setOpen(!open);
    onClick();
  };

  useEffect(() => {
    if (typeof controlledOpen !== undefined) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen, setOpen]);

  return (
    <Button onClick={click}>
      <Flex justifyContent="center">
        {controlledOpen || open ? (
          <IoMdClose color="#FFF" size="25px" />
        ) : (
          <GiHamburgerMenu color="#FFF" size="25px" />
        )}
      </Flex>
    </Button>
  );
};

export default BurgerButton;
