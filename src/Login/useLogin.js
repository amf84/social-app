import { useState } from "react";

export const useLogin = (initialState) => {
  const [state, setState] = useState(initialState);
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };
  return {
    state,
    handleInputChange
  };
};
