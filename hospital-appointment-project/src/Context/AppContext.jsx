import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

const AppContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hospitals, setHospitals] = useState([]);
  const fetchHospitals = async () => {
    const response = await axios.get("http://localhost:3000/hastaneler");
    setHospitals(response.data);
  };
  const sharedValuesAndMethods = {
    state,
    dispatch,
    hospitals,
    fetchHospitals,
  };
  return (
    <AppContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AppContext.Provider>
  );
}
export { Provider };
export default AppContext;
// ActionType tanımları
export const actionTypes = {
  SET_SECILI_HASTANE: "SET_SECILI_HASTANE",
  SET_SECILI_BRANS: "SET_SECILI_BRANS",
  SET_SECILI_DOKTOR: "SET_SECILI_DOKTOR",
};

// Başlangıç durumu
const initialState = {
  seciliHastaneId: null,
  seciliBrans: null,
  seciliDoktor: null,
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SECILI_HASTANE:
      return {
        ...state,
        seciliHastaneId: action.payload,
        seciliBrans: null,
        seciliDoktor: null,
      };
    case actionTypes.SET_SECILI_BRANS:
      return {
        ...state,
        seciliBrans: action.payload,
        seciliDoktor: null,
      };
    case actionTypes.SET_SECILI_DOKTOR:
      return {
        ...state,
        seciliDoktor: action.payload,
      };
    default:
      return state;
  }
};
