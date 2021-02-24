import React, { useReducer } from "react";

export const PlayerContext = React.createContext();

const playerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, { name: "" }];
    case "CHOP_PLAYER":
      return state.slice(0, -1);
    case "UPDATE_PLAYER_NAME":
      return [
        ...state.slice(0, action.payload.index),
        { ...state[action.payload.index], name: action.payload.name },
        ...state.slice(action.payload.index + 1),
      ];
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [players, dispatch] = useReducer(playerReducer, [
    { name: "" },
    { name: "" },
  ]);

  const addPlayer = () => {
    if (players.length < 12) {
      dispatch({ type: "ADD_PLAYER" });
    }
  };
  const chopPlayer = () => {
    dispatch({ type: "CHOP_PLAYER" });
  };
  const changeNumberOfPlayers = (e) => {
    if (e.target.value > players.length) {
      addPlayer();
    } else if (e.target.value < players.length) {
      chopPlayer();
    }
  };
  const updatePlayerName = (name, index) =>
    dispatch({ type: "UPDATE_PLAYER_NAME", payload: { name, index } });

  return (
    <PlayerContext.Provider
      value={{ players, addPlayer, updatePlayerName, changeNumberOfPlayers }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
