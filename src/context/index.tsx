"use client";

import React from "react";

interface State {
  openSidenav: boolean;
  sidenavColor: string;
  sidenavType: string;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
}

type Action =
  | { type: "OPEN_SIDENAV"; value: boolean }
  | { type: "SIDENAV_TYPE"; value: string }
  | { type: "SIDENAV_COLOR"; value: string }
  | { type: "TRANSPARENT_NAVBAR"; value: boolean }
  | { type: "FIXED_NAVBAR"; value: boolean }
  | { type: "OPEN_CONFIGURATOR"; value: boolean };

type ContextType = [State, React.Dispatch<Action>];

const initialState: State = {
  openSidenav: false,
  sidenavColor: "dark",
  sidenavType: "white",
  transparentNavbar: true,
  fixedNavbar: false,
  openConfigurator: false,
};

export const MaterialTailwind = React.createContext<ContextType>([
  initialState,
  () => {},
]);
MaterialTailwind.displayName = "MaterialTailwindContext";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
}

export function MaterialTailwindControllerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [controller, dispatch] = React.useReducer(reducer, initialState);

  const value: ContextType = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
    </MaterialTailwind.Provider>
  );
}

export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = "/src/context/index.jsx";

export const setOpenSidenav = (
  dispatch: React.Dispatch<Action>,
  value: boolean
) => dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (
  dispatch: React.Dispatch<Action>,
  value: string
) => dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (
  dispatch: React.Dispatch<Action>,
  value: string
) => dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (
  dispatch: React.Dispatch<Action>,
  value: boolean
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (
  dispatch: React.Dispatch<Action>,
  value: boolean
) => dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (
  dispatch: React.Dispatch<Action>,
  value: boolean
) => dispatch({ type: "OPEN_CONFIGURATOR", value });
