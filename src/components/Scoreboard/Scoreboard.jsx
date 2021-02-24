import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Player from "./Player";

import { PlayerContext } from "../../Context";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
  width: 100vw;

  & > div {
    width: ${(props) => {
      if (props.numPlayers < 5) {
        return "50%";
      } else if (props.numPlayers < 10) {
        return "33%";
      } else {
        return "25%";
      }
    }};
    margin: 20px 0;
  }
`;

const Scoreboard = () => {
  let { players } = useContext(PlayerContext);

  return (
    <Container numPlayers={players.length}>
      {players.map((player) => (
        <Player name={player.name} />
      ))}
    </Container>
  );
};

export default Scoreboard;
