import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: grid;
  margin-left: 50px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  width: 60vw;
  height: calc(60vh - 60px);
  
  
`;

export default Frame;
