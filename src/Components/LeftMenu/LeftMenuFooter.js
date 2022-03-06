import React from 'react';
import styled from 'styled-components';

const LeftMenuFooter = () => {
  const Info = styled.div`
    position: fixed;
    display: block;
    width: 250px;
    bottom: 0;
    left: 0;
    padding: 30px 32px;
    background: #fff;
    z-index: 101;
    text-align: center;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #3d4853;
  `;

  return <Info>Made by Iván Sapia © 2022</Info>;
};

export default LeftMenuFooter;
