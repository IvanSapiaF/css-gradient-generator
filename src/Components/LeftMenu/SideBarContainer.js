import React from 'react';

import styled from 'styled-components';

import GradiantSelect from './GradiantSelect';
import ColorSelect from './ColorsSelect';
import OuputFormat from './OuputFormat';
import LeftMenuFooter from './LeftMenuFooter';

const SideBarContainer = () => {
  return (
    <LeftContainer>
      <Title>
        <LinkTitle href={window.location.href}>
          CSS Gradient Generator
        </LinkTitle>
      </Title>
      <GradiantSelect />
      <ColorSelect />
      <OuputFormat />
      <LeftMenuFooter />
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  padding: 30px 32px;
  box-shadow: 2px 0 2px 0 rgb(0 0 0 / 15%);
  z-index: 100;
  overflow-y: auto;
  box-sizing: border-box;
`;

const LinkTitle = styled.a`
  color: #3d4853;
  text-transform: uppercase;
  text-decoration: none;
`;

const Title = styled.h1`
  display: inline-block;
  width: 140px;
  margin-bottom: 14px;
  margin-top: 0px;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export default SideBarContainer;
