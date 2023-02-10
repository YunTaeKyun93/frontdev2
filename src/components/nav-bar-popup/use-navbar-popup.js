import { useState } from "react";
const useNavbarPopup = () => {
  const [isPopupOpen, setIsPopOpen] = useState(true);
  return {
    isPopupOpen,
    setIsPopOpen
  };
};

export default useNavbarPopup;
