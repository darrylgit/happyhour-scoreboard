import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PlayerContext } from "../../Context";

const Container = styled.div`
  color: white;
  cursor: pointer;
  user-select: none;
`;

const Score = styled.div`
  font-size: 96px;
  font-weight: 400;
`;

const Name = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 0 5px;
  }
`;

const Button = styled.button`
  border: 3px solid #edf6ff;
  color: #edf6ff;
  border-radius: 50%;
  background-color: transparent;
  font-size: 36px;
  padding: 0 8px 5px 8px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ccd6e0;
    border: 3px solid #ccd6e0;
  }
  line-height: 24px;
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

const Player = ({ name }) => {
  let [score, setScore] = useState(0);

  return (
    <Container>
      <Score onClick={() => setScore(score + 1)}>{score}</Score>
      <Name onClick={() => setScore(score + 1)}>{name}</Name>
      <ButtonContainer>
        <AddButton onClick={() => setScore(score + 1)}>+</AddButton>
        <Button
          onClick={() => {
            if (score > 0) {
              setScore(score - 1);
            }
          }}
        >
          {" "}
          -{" "}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Player;
