import {useReducer} from "react";
import {PlacesContext} from "./PlacesContext";
import {placesReducer} from "./placesReducer";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const InitialState: PlacesState = {
  isLoading: true,
  userLocation: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(placesReducer, InitialState)
  return (
    <PlacesContext.Provider value={{
      ...state,
      }}>
      {children}
    </PlacesContext.Provider>
  )
}
