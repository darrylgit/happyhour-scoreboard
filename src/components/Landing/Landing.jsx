import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../Context";

const StyledHeader = styled.h1`
  color: white;
  font-size: 44px;
`;

const StyledH2 = styled.h2`
  color: #edf6ff;
  font-size: 24px;
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 5px;
  border: 3px solid #edf6ff;
  outline: none;
`;

const StyledButton = styled.button`
  background-color: #e26933;
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

const Landing = () => {
  const { changeNumberOfPlayers, players } = useContext(PlayerContext);

  return (
    <>
      <StyledHeader>Welcome to ClearPoint Music!</StyledHeader>
      <StyledH2>Select number of players:</StyledH2>
      <StyledInput
        type="number"
        value={players.length}
        min={2}
        max={12}
        onChange={changeNumberOfPlayers}
      />
      <Link to="/players">
        <StyledButton>Next</StyledButton>
      </Link>
    </>
  );
};

export default Landing;
