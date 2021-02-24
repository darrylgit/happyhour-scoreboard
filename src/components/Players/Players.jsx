import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PlayerContext } from "../../Context";

const PlayerInput = styled.input`
  margin: 8px 0;
  padding: 5px 10px;
  width: 300px;
  font-size: 18px;
  border-radius: 5px;
  border: 3px solid #edf6ff;
  outline: none;
`;

const AddButton = styled.button`
  border: 3px solid #edf6ff;
  color: #edf6ff;
  border-radius: 50%;
  background-color: transparent;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ccd6e0;
    border: 3px solid #ccd6e0;
  }
`;

const StyledButton = styled.button`
  background-color: #e26933;
  margin: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  &:hover {
    background-color: #9a4722;
  }
`;

const Players = () => {
  const { players, updatePlayerName, addPlayer } = useContext(PlayerContext);
  const canAddPlayersFlag = players.length < 12;
  const allPlayersNamedFlag = players.every((player) => player.name);
  return (
    <>
      {allPlayersNamedFlag ? (
        <Link to="/scoreboard">
          <StyledButton>Start!</StyledButton>
        </Link>
      ) : (
        <h2 style={{ color: "white" }}>Give each player a name:</h2>
      )}
      {players.map((player, i) => {
        return (
          <PlayerInput
            key={i}
            placeholder={`Name of Player ${i + 1}`}
            value={player.name}
            onChange={(e) => updatePlayerName(e.target.value, i)}
          />
        );
      })}
      {canAddPlayersFlag && (
        <AddButton onClick={addPlayer} numPlayers={players.length}>
          +
        </AddButton>
      )}
    </>
  );
};

export default Players;
