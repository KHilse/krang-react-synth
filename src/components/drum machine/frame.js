import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  width: 60vw;
  height: calc(70vh - 60px);
  
  
`;

export default Frame;
