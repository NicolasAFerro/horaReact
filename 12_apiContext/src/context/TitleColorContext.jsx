import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'RED' };
    case 'BLUE':
      return { ...state, color: 'BLUE' };
    default:
      return state;
  }
};

//11 utilizando um context mais complexo com reducer
export const TitleColorContextProvider = ({ children }) => {
  const [state, dispathc] = useReducer(titleColorReducer, { color: 'purple' });
  return (
    <TitleColorContext.Provider value={{ ...state, dispathc }}>
      {children}
    </TitleColorContext.Provider>
  );
};
