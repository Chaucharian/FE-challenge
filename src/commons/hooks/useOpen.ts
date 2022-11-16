import { useState } from "react";

const useOpen = (initalOpen = false) => {
  const [open, setOpen] = useState(initalOpen);
  return { open, setOpen };
};

export default useOpen;
