import React from 'react';
import styled from 'styled-components';
import { useSelectColors } from '../Redux/Slices/SelectColorSlice';

const BackgroundColor = () => {
  const {
    leftColor,
    rightColor,
    gradientLinearDegs,
    isRadial,
    radialPosition,
  } = useSelectColors();

  const Background = styled.div`
    background-image: ${isRadial
      ? `radial-gradient(ellipse at ${radialPosition},${leftColor.hex}, ${rightColor.hex})`
      : `linear-gradient(${gradientLinearDegs}deg, ${rightColor.hex}, ${leftColor.hex})`};
    flex: 1;
  `;

  return <Background />;
};

export default BackgroundColor;
