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
    width: 25%;
    margin: 20px 0;
  }
`;

const Scoreboard = () => {
  let { players } = useContext(PlayerContext);

  return (
    <Container>
      {players.map((player) => (
        <Player name={player.name} />
      ))}
    </Container>
  );
};

export default Scoreboard;
