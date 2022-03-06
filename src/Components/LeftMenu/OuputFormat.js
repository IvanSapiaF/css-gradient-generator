import React, { useState } from 'react';
import styled from 'styled-components';

import { useSelectColors } from '../../Redux/Slices/SelectColorSlice';
import { Button, Subtitle, ButtonsWrapper } from './GradiantSelect';

const OuputFormat = () => {
  const {
    isRadial,
    radialPosition,
    leftColor,
    rightColor,
    gradientLinearDegs,
  } = useSelectColors();
  const [isShare, setIsShare] = useState(false);
  const [isShareCSS, setIsShareCSS] = useState(false);
  const [isHexColor, setIsHexColor] = useState(true);

  const urlOfPage = window.location.href;

  const shared = (css) => {
    css ? setIsShareCSS(true) : setIsShare(true);
    setTimeout(() => {
      css ? setIsShareCSS(false) : setIsShare(false);
    }, [3000]);
  };

  const hexToRgba = (hex) => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
      );
    }
  };

  const stylesColorsToPrint = `background-image: ${
    isRadial
      ? `radial-gradient(ellipse at ${radialPosition},${
          isHexColor ? leftColor.hex : hexToRgba(leftColor.hex)
        }, ${isHexColor ? rightColor.hex : hexToRgba(rightColor.hex)})`
      : `linear-gradient(${gradientLinearDegs}deg, ${
          isHexColor ? rightColor.hex : hexToRgba(rightColor.hex)
        }, ${isHexColor ? leftColor.hex : hexToRgba(leftColor.hex)})`
  };
`;

  return (
    <>
      <Subtitle>Ouput Format</Subtitle>
      <ButtonsWrapper>
        <Button onClick={() => setIsHexColor(true)} isSelect={isHexColor}>
          Hex
        </Button>
        <Button
          left={true}
          onClick={() => setIsHexColor(false)}
          isSelect={!isHexColor}
        >
          Rgba
        </Button>
      </ButtonsWrapper>
      <LargeButton
        mt={'48px'}
        onClick={() => {
          navigator.clipboard.writeText(stylesColorsToPrint);
          shared(true);
        }}
      >
        {isShareCSS ? 'Yay! Copied to Clipboard!' : 'Get CSS'}
      </LargeButton>
      <LargeButton
        mt={'10px'}
        onClick={() => {
          navigator.clipboard.writeText(urlOfPage);
          shared(false);
        }}
      >
        {isShare ? 'Yay! Copied to Clipboard!' : 'Get Share Link'}
      </LargeButton>
    </>
  );
};

const LargeButton = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt : '5px')};
  display: inline-block;
  margin-left: 0;
  width: 256px;
  height: 48px;
  background: #f1f4f8;
  border-radius: 6px;
  font-size: 0.8125rem;
  line-height: 3rem;
  color: #3d4853;
  font-weight: 600;
  text-align: center;
  outline: 0;
  cursor: pointer;

  :hover {
    background-color: #3d4853;
    color: #fff;
  }
`;

export default OuputFormat;
